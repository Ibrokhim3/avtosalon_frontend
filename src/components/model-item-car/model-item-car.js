import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import cortIcon from "../../assets/icons/cart.svg";
import likeIcon from "../../assets/icons/like.svg";
import { modelsAction } from "../../store";

export const ModelItemCar = ({
  style,
  children,
  modelPrice,
  modelImg,
  priceText,
  like,
  item: { carName, carImg, carPrice, _id, likes },
}) => {
  const { listCars, formType, listCategory, clickedId } = useSelector(
    (state) => state.models
  );

  // const [cars, setCars] = useState();

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   fetch("http://localhost:2004/avtosalon/get-users", {
  //     headers: { token: token },
  //   })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.json();
  //       }
  //       return Promise.reject(res);
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setCars(data);
  //     })
  //     .catch((err) => {
  //       return console.log(err);
  //     });
  // }, [listCars]);

  // useEffect(() => {
  //   fetch("http://localhost:2004/avtosalon/get-models", {
  //     headers: { token: token },
  //   })
  //     .then((res) => {
  //       if (res.status !== 200) {
  //         return res.text().then((text) => {
  //           throw new Error(text);
  //         });
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // dispatch(modelsAction.setListCars(data));
  //     })
  //     .catch((err) => {
  //       return console.log(err);
  //     });
  // }, []);

  const onBuyClick = async (e) => {
    const id = e.target.dataset.id;

    fetch("http://localhost:2004/avtosalon/buy-car", {
      method: "POST",
      headers: { "Content-type": "Application/json", token: token },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => {
        if (res.status !== 201) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onLikeClick = async (e) => {
    const id = e.target.dataset.id;

    fetch("http://localhost:2004/avtosalon/like-car", {
      method: "POST",
      headers: { "Content-type": "Application/json", token: token },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => {
        if (res.status !== 201) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <li className="model_item">
      <Link to={`/model-info/${_id}`}>
        <img
          style={{ marginBottom: 16, objectFit: "contain" }}
          width={289}
          height={220}
          src={carImg}
          alt="car-byd"
        />
        <p style={style} className="model_item_car-brand">
          {carName}
        </p>
        <p style={{ textAlign: "left" }} className="model-item__car-price">
          <span className="model-item__car-price-text">{priceText}</span>{" "}
          {carPrice} so'm
        </p>
      </Link>
      <div className="model-item__button-wrapper">
        <button data-id={_id} onClick={onBuyClick} className="action-button">
          <img
            style={{ width: 25, pointerEvents: "none" }}
            src={cortIcon}
            alt="buy"
          />
        </button>
        <button onClick={onLikeClick} data-id={_id} className="action-button">
          <img
            style={{ width: 25, pointerEvents: "none" }}
            src={likeIcon}
            alt="like"
          />
          <span className="count">{likes.length}</span>
        </button>
      </div>
    </li>
  );
};

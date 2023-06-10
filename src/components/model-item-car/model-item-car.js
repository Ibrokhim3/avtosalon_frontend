import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import cortIcon from "../../assets/icons/cart.svg";
import likeIcon from "../../assets/icons/like.svg";
import { modelsAction } from "../../store";
import { API_URL } from "../../variables";

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

  const [likeStatus, setLikeStatus] = useState();
  const [buyStatus, setBuyStatus] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

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

    fetch(`${API_URL}/avtosalon/buy-car`, {
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
        setBuyStatus(data.isBought);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onLikeClick = async (e) => {
    const id = e.target.dataset.id;

    fetch(`${API_URL}/avtosalon/like-car`, {
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
        setLikeStatus(data.isLiked);
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
        <button
          data-id={_id}
          onClick={
            token
              ? onBuyClick
              : () => {
                  alert("Please login to the system to buy the model");
                  navigate("/login");
                }
          }
          className="action-button"
        >
          {/* <img
            style={{ width: 25, pointerEvents: "none" }}
            src={cortIcon}
            alt="buy"
          /> */}
          <svg
            style={{ width: 35, pointerEvents: "none" }}
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill={buyStatus ? "#db1414" : "none"}
            xmlns="http://www.w3.org/2000/svg"
            stroke="#db1414"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
                stroke="#db1414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={
            token
              ? onLikeClick
              : () => {
                  alert("Please login to the system to Like the model");
                  navigate("/login");
                }
          }
          data-id={_id}
          className="action-button"
        >
          {/* <img
            style={{ width: 25, pointerEvents: "none" }}
            src={likeIcon}
            alt="like"
          /> */}

          <svg
            style={{ width: 25, pointerEvents: "none" }}
            fill={likeStatus ? "#2A85FF" : "black"}
            width="25px"
            height="25px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            stroke={likeStatus ? "#2A85FF" : "black"}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M19.017 31.992c-9.088 0-9.158-0.377-10.284-1.224-0.597-0.449-1.723-0.76-5.838-1.028-0.298-0.020-0.583-0.134-0.773-0.365-0.087-0.107-2.143-3.105-2.143-7.907 0-4.732 1.472-6.89 1.534-6.99 0.182-0.293 0.503-0.47 0.847-0.47 3.378 0 8.062-4.313 11.21-11.841 0.544-1.302 0.657-2.159 2.657-2.159 1.137 0 2.413 0.815 3.042 1.86 1.291 2.135 0.636 6.721 0.029 9.171 2.063-0.017 5.796-0.045 7.572-0.045 2.471 0 4.107 1.473 4.156 3.627 0.017 0.711-0.077 1.619-0.282 2.089 0.544 0.543 1.245 1.36 1.276 2.414 0.038 1.36-0.852 2.395-1.421 2.989 0.131 0.395 0.391 0.92 0.366 1.547-0.063 1.542-1.253 2.535-1.994 3.054 0.061 0.422 0.11 1.218-0.026 1.834-0.535 2.457-4.137 3.443-9.928 3.443zM3.426 27.712c3.584 0.297 5.5 0.698 6.51 1.459 0.782 0.589 0.662 0.822 9.081 0.822 2.568 0 7.59-0.107 7.976-1.87 0.153-0.705-0.59-1.398-0.593-1.403-0.203-0.501 0.023-1.089 0.518-1.305 0.008-0.004 2.005-0.719 2.050-1.835 0.030-0.713-0.46-1.142-0.471-1.16-0.291-0.452-0.185-1.072 0.257-1.38 0.005-0.004 1.299-0.788 1.267-1.857-0.024-0.849-1.143-1.447-1.177-1.466-0.25-0.143-0.432-0.39-0.489-0.674-0.056-0.282 0.007-0.579 0.183-0.808 0 0 0.509-0.808 0.49-1.566-0.037-1.623-1.782-1.674-2.156-1.674-2.523 0-9.001 0.025-9.001 0.025-0.349 0.002-0.652-0.164-0.84-0.443s-0.201-0.627-0.092-0.944c0.977-2.813 1.523-7.228 0.616-8.736-0.267-0.445-0.328-0.889-1.328-0.889-0.139 0-0.468 0.11-0.812 0.929-3.341 7.995-8.332 12.62-12.421 13.037-0.353 0.804-1.016 2.47-1.016 5.493 0 3.085 0.977 5.473 1.447 6.245z" />{" "}
            </g>
          </svg>

          <span className="count">{likes.length}</span>
        </button>
      </div>
    </li>
  );
};

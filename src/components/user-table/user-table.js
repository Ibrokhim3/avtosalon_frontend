import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import arrowRight from "../../assets/icons/arrow-right.svg";
import editIcon from "../../assets/icons/edit.svg";
import trashIcon from "../../assets/icons/trash.svg";
import { modelsAction, userAction } from "../../store";
import { useEffect, useState } from "react";
import { API_URL } from "../../variables";

export const UserTable = ({
  children,
  style,
  to,
  onClick,
  type,
  dataType,
  elModal,
}) => {
  const dispatch = useDispatch();
  const { formType, listCategory, listCars, clickedId, tableType } =
    useSelector((state) => state.models);

  const [purchasedCars, setPurchasedCars] = useState();
  const [likedCars, setLikedCars] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${API_URL}/avtosalon/get-one-user`, {
      headers: { token: token },
    })
      .then((res) => {
        if (res.status !== 200) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        dispatch(userAction.setUsers(data.user));
        setPurchasedCars(data.purchasedCars);
        setLikedCars(data.likedCars);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);

  return (
    <table className="model-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Markasi</th>
          <th>Gearbook</th>
          <th>Tanirovkasi</th>
          <th>Motor</th>
          <th>Color</th>
          <th>Year</th>
          <th>Distance</th>
        </tr>
      </thead>
      {tableType === "user-likes-table" ? (
        <tbody>
          {likedCars?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.carName}</td>
              <td>{item.gearbox}</td>
              <td>{item.tonirovka}</td>
              <td>{item.motor}</td>
              <td>{item.year}</td>
              <td>{item.color}</td>
              <td>{item.distance}&nbsp;km</td>
              <td className="model-table__td-button">
                <span className="purchased">Liked</span>
              </td>
              <td className=""></td>
              <td>
                <Link>
                  <img src={arrowRight} alt="arrow-right" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      ) : tableType === "user-buy-table" ? (
        <tbody>
          {purchasedCars?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.carName}</td>
              <td>{item.gearbox}</td>
              <td>{item.tonirovka}</td>
              <td>{item.motor}</td>
              <td>{item.year}</td>
              <td>{item.color}</td>
              <td>{item.distance}&nbsp;km</td>
              <td className="model-table__td-button">
                <span style={{ background: "orange" }} className="purchased">
                  Bought
                </span>
              </td>

              <td>
                <Link>
                  <img src={arrowRight} alt="arrow-right" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          {likedCars?.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.carName}</td>
              <td>{item.gearbox}</td>
              <td>{item.tonirovka}</td>
              <td>{item.motor}</td>
              <td>{item.year}</td>
              <td>{item.color}</td>
              <td>{item.distance}&nbsp;km</td>
              <td className="model-table__td-button">
                <span className="purchased">Like</span>
              </td>
              <td className=""></td>
              <td>
                <Link>
                  <img src={arrowRight} alt="arrow-right" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

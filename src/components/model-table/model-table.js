import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import arrowRight from "../../assets/icons/arrow-right.svg";
import editIcon from "../../assets/icons/edit.svg";
import trashIcon from "../../assets/icons/trash.svg";
import { modelsAction } from "../../store";
import { useEffect } from "react";
import { API_URL } from "../../variables";

export const ModelTable = ({
  children,
  style,
  to,
  onClick,
  type,
  dataType,
  elModal,
}) => {
  const dispatch = useDispatch();
  const { formType, listCategory, listCars, clickedId } = useSelector(
    (state) => state.models
  );

  const onDeleteClick = async (evt) => {
    const id = evt.target.dataset.id;

    fetch(`${API_URL}/avtosalon/delete-model`, {
      method: "DELETE",
      headers: {
        "Content-type": "Application/json",
        token: localStorage.getItem("token" || ""),
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => {
        if (res.status !== 200) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();

        // if (res.status === 200) {
        //   return res.json();
        // }
        // return Promise.reject(res);
      })
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    fetch(`${API_URL}/avtosalon/get-models`)
      .then((res) => {
        if (res.status !== 200) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        dispatch(modelsAction.setListCars(data));
      })
      .catch((err) => {
        alert(err);
      });
  }, [listCars]);

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
      <tbody>
        {listCars?.map((item, index) => (
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
              <button
                onClick={onDeleteClick}
                data-id={item._id}
                data-type="delete-model"
                className="control-button"
              >
                <img
                  style={{ pointerEvents: "none" }}
                  width={22}
                  src={trashIcon}
                  alt="delete/trash"
                />
              </button>
            </td>
            <td className="">
              <button
                data-id={item._id}
                data-type="edit-model"
                onClick={(e) => {
                  dispatch(modelsAction.setClickedId(e.target.dataset.id));
                  // elModal.style.display = "block";}
                  dispatch(modelsAction.setFormType("edit"));
                }}
                className="control-button"
              >
                <img
                  style={{ pointerEvents: "none" }}
                  width={22}
                  src={editIcon}
                  alt="edit/pen"
                />
              </button>
            </td>
            <td>
              <Link>
                <img src={arrowRight} alt="arrow-right" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

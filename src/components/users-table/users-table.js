import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import arrowRight from "../../assets/icons/arrow-right.svg";
import editIcon from "../../assets/icons/edit.svg";
import trashIcon from "../../assets/icons/trash.svg";
import { modelsAction, userAction } from "../../store";
import { useEffect } from "react";
import { API_URL } from "../../variables";

export const UsersTable = ({
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

  const { users } = useSelector((state) => state.users);

  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  const onDeleteClick = async (evt) => {
    const id = evt.target.dataset.id;

    fetch(`${API_URL}/avtosalon/delete-user-by-admin`, {
      method: "DELETE",
      headers: {
        "Content-type": "Application/json",
        token,
        userRole,
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
      })
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    fetch(`${API_URL}/avtosalon/get-users`, {
      headers: { token, userRole },
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
        dispatch(userAction.setUsers(data));
      })
      .catch((err) => {
        alert(err);
      });
  }, [users]);

  return (
    <table className="model-table">
      <thead>
        <tr>
          <th>#</th>
          <th>User-email</th>
          <th>User-role</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.userEmail}</td>
            <td>{item.userRole}</td>
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

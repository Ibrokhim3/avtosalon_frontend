import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import arrowRight from "../../assets/icons/arrow-right.svg";
import editIcon from "../../assets/icons/edit.svg";
import trashIcon from "../../assets/icons/trash.svg";
import { modelsAction } from "../../store";

export const UsersTable = ({
  children,
  style,
  to,
  onClick,
  type,
  dataType,
  elModal,
}) => {
  const dispath = useDispatch();
  const { formType } = useSelector((state) => state.models);

  return (
    <table className="model-table">
      <thead>
        <tr>
          <th>#</th>
          <th>User id</th>
          <th>Username</th>
          <th>Login</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>Hellojon</td>
          <td>1145</td>
          <td>User</td>
          <td>User</td>
          <td className="model-table__td-button">
            <button data-type="delete-category" className="control-button">
              <img width={22} src={trashIcon} alt="delete/trash" />
            </button>
          </td>
          <td className="">
            <button
              data-type="edit-model"
              onClick={() => {
                // elModal.style.display = "block";
                dispath(modelsAction.setFormType("edit"));
              }}
              className="control-button"
            >
              <img width={22} src={editIcon} alt="edit/pen" />
            </button>
          </td>
          <td>
            <button
              className="switch-button"
              data-id=""
              onClick={() => {
                dispath(modelsAction.setTableType("users-cars"));
              }}
            >
              <img src={arrowRight} alt="arrow-right" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

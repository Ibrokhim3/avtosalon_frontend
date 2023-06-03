import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import arrowRight from "../../assets/icons/arrow-right.svg";
import editIcon from "../../assets/icons/edit.svg";
import trashIcon from "../../assets/icons/trash.svg";
import { modelsAction } from "../../store";

export const CartegoryTable = ({
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
    <table className="category-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Markasi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>BUILD YOUR DREAMS (BYD)</td>
          <td className="category-table__td-button">
            <button data-type="delete-category" className="control-button">
              <img width={22} src={trashIcon} alt="delete/trash" />
            </button>
          </td>
          <td className="">
            <button
              data-type="edit-category"
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
            <Link>
              <img src={arrowRight} alt="arrow-right" />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

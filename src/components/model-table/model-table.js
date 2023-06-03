import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import arrowRight from "../../assets/icons/arrow-right.svg";
import editIcon from "../../assets/icons/edit.svg";
import trashIcon from "../../assets/icons/trash.svg";
import { modelsAction } from "../../store";

export const ModelTable = ({
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
        <tr>
          <td>1.</td>
          <td>BYD</td>
          <td>Sinxron karobka</td>
          <td>Yoq</td>
          <td>300kw/soat</td>
          <td>2023</td>
          <td>Oq</td>
          <td>0 km</td>
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
            <Link>
              <img src={arrowRight} alt="arrow-right" />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

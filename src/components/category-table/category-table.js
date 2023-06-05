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
  const dispatch = useDispatch();

  const { formType, list, clickedId } = useSelector((state) => state.models);

  console.log(clickedId);

  const onDeleteClick = async (evt) => {
    dispatch(modelsAction.setClickedId(await evt.target.dataset.id));

    fetch("http://localhost:2004/avtosalon/delete-category", {
      method: "DELETE",
      headers: {
        "Content-type": "Application/json",
        token: localStorage.getItem("token" || ""),
      },
      body: JSON.stringify({ id: clickedId }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  // dispatch(postsAction.setLoading(true));

  return (
    <table className="category-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Markasi</th>
        </tr>
      </thead>
      <tbody>
        {list?.map((item, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{item.categoryName}</td>
            <td className="category-table__td-button">
              <button
                // onClick={(e) =>
                //   dispatch(modelsAction.setClickedId(e.target.dataset.id))
                // }
                onClick={onDeleteClick}
                data-id={item._id}
                data-type="delete-category"
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
                data-type="edit-category"
                onClick={(e) => {
                  dispatch(modelsAction.setClickedId(e.target.dataset.id));
                  // elModal.style.display = "block";
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
              <button
                className="switch-button"
                data-id={item._id}
                onClick={() => {
                  dispatch(modelsAction.setTableType("cars"));
                }}
              >
                <img src={arrowRight} alt="arrow-right" />
              </button>
              {/* <Link>
             <img src={arrowRight} alt="arrow-right" />
           </Link> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

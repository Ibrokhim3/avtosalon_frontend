import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import arrowRight from "../../assets/icons/arrow-right.svg";
import editIcon from "../../assets/icons/edit.svg";
import trashIcon from "../../assets/icons/trash.svg";
import { modelsAction } from "../../store";
import { useEffect } from "react";
import { API_URL } from "../../variables";

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

  const { formType, listCategory, clickedId } = useSelector(
    (state) => state.models
  );

  useEffect(() => {
    fetch(`${API_URL}/avtosalon/get-categories`)
      .then((res) => {
        if (res.status !== 200) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        dispatch(modelsAction.setListCategory(data));
      })
      .catch((err) => {
        return console.log(err);
      });
  }, [listCategory]);

  const onDeleteClick = async (evt) => {
    const id = evt.target.dataset.id;

    fetch(`${API_URL}/avtosalon/delete-category`, {
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
        {listCategory?.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
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
              <Link
                to={`/`}
                className="switch-button"
                data-id={item._id}
                onClick={() => {
                  dispatch(modelsAction.setTableType("cars"));
                }}
              >
                <img src={arrowRight} alt="arrow-right" />
              </Link>
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

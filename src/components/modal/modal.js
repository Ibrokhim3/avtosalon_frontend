import { useDispatch, useSelector } from "react-redux";
import { modelsAction } from "../../store";
import { CartegoryForm } from "../category-form";
import { ModelForm } from "../model-form";

export const Modal = ({ elModal }) => {
  const dispath = useDispatch();
  const { formType, tableType } = useSelector((state) => state.models);

  return (
    <div
      style={formType ? { display: "block" } : null}
      className="admin-panel__modal"
    >
      <div className="admin-panel__modal-content">
        <div className="admin-panel__modal-header">
          <span
            style={{ background: "#CABDFF" }}
            className="admin-panel__indicator"
          ></span>
          <p className="admin-panel__modal-title">
            {formType === "edit" && tableType === "category"
              ? "Kategoriyani o'zgartirish"
              : formType === "add" && tableType === "category"
              ? "Kategoriya qo'shish"
              : formType === "edit" && tableType === "cars"
              ? "Mashinani o'zgartirish"
              : formType === "add" && tableType === "cars"
              ? "Mashina qo'shish"
              : ""}
          </p>
          <span
            className="admin-panel__modal-close"
            onClick={() => {
              elModal.style.display = "none";
              dispath(modelsAction.setFormType(""));
            }}
          ></span>
        </div>
        {tableType === "category" ? (
          <CartegoryForm elModal={elModal}></CartegoryForm>
        ) : tableType === "cars" ? (
          <ModelForm elModal={elModal}></ModelForm>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

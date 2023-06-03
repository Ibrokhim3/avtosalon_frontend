import { useDispatch, useSelector } from "react-redux";
import { modelsAction } from "../../store";
import { Button } from "../button";
import { Input } from "../input-text";

export const CartegoryForm = ({ elModal }) => {
  const dispath = useDispatch();
  const { formType } = useSelector((state) => state.models);

  return (
    <form className="category__modal-form">
      <div className="category__modal-input-wrapper">
        <Input placeholder={"BYD"} id={"categoryTextInput"}>
          Markasi
        </Input>
        <Input type={"file"} placeholder={"Yuklash"} id={"categoryFileInput"}>
          Rasm
        </Input>
      </div>

      <Button
        onClick={() => {
          elModal.style.display = "none";
          dispath(modelsAction.setFormType(""));
        }}
        style={{ marginTop: 40 }}
      >
        Saqlash
      </Button>
    </form>
  );
};

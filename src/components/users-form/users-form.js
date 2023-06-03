import { useDispatch, useSelector } from "react-redux";
import { modelsAction } from "../../store";
import { Button } from "../button";
import { Input } from "../input-text";
import { Select } from "../select";

export const UsersForm = ({ elModal }) => {
  const dispath = useDispatch();
  const { formType } = useSelector((state) => state.models);

  return (
    <form className="users__modal-form">
      <div className="users__modal-input-wrapper">
        <Input placeholder={"Begzod"}>Username</Input>
        <Input placeholder={"Login..."}>Login</Input>

        <Input placeholder={"123user"}>Password</Input>
      </div>

      <Button
        onClick={() => {
          elModal.style.display = "none";
          dispath(modelsAction.setFormType(""));
        }}
      >
        Saqlash
      </Button>
    </form>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { modelsAction } from "../../store";
import { Button } from "../button";
import { Input } from "../input-text";
import { Select } from "../select";

export const ModelForm = ({ elModal }) => {
  const dispath = useDispatch();
  const { formType } = useSelector((state) => state.models);

  return (
    <form className="model__modal-form">
      <div className="model__modal-input-wrapper">
        <label
          className="input-label"
          htmlFor="modelSelect
        "
        >
          Markasi
          <Select id={"modelSelect"}>
            <option>BYD</option>
            <option>Cherry</option>
          </Select>
        </label>
        <Input placeholder={"1.5"}>Motor</Input>
        <Input placeholder={"Oq"}>Color</Input>

        <Input placeholder={"A/T"}>Gearbox</Input>

        <label className="input-label" htmlFor="modelSelect2">
          Tanirovkasi
          <Select id={"modelSelect2"}>
            <option>Yo'q</option>
            <option>Bor</option>
          </Select>
        </label>

        <label
          className="input-label"
          htmlFor="textAreaDesc
        "
        >
          Description
          <textarea
            id="textAreaDesc"
            placeholder="Tavsifini kiriting"
            className="textarea"
          ></textarea>
        </label>

        <Input placeholder={"2023"}>Year</Input>
        <Input type={"number"} placeholder={"0"}>
          Distance
        </Input>
        <Input type={"number"} placeholder={"250 000 000"}>
          Narxi
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
        // style={{""}}
      >
        Saqlash
      </Button>
    </form>
  );
};

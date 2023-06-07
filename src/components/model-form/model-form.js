import { useEffect, useInsertionEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modelsAction } from "../../store";
import { Button } from "../button";
import { Input } from "../input-text";
import { Select } from "../select";

export const ModelForm = ({ elModal }) => {
  const dispatch = useDispatch();
  const { formType, listCategory, listCars, loading, clickedId } = useSelector(
    (state) => state.models
  );

  const token = localStorage.getItem("token");

  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [tonirovka, setTonirovka] = useState("Yo'q");

  const onFileChange = async (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    // dispatch(postsAction.setLoading(true));

    const styles = {
      opacity: loading ? 0.7 : 1,
    };

    const {
      inputModel: { value: carName },
      inputMotor: { value: motor },
      inputColor: { value: color },
      inputGear: { value: gearbox },
      textAreaDesc: { value: desc },
      inputYear: { value: year },
      inputDistance: { value: distance },
      inputPrice: { value: carPrice },
    } = evt.target;

    const formData = new FormData();

    formData.append("carCategory", category);
    formData.append("carName", carName);
    formData.append("motor", motor);
    formData.append("color", color);
    formData.append("tonirovka", tonirovka);
    formData.append("gearbox", gearbox);
    formData.append("desc", desc);
    formData.append("year", year);
    formData.append("distance", distance);
    formData.append("carPrice", carPrice);
    formData.append("carImg", file);

    fetch("http://localhost:2004/avtosalon/add-model", {
      method: "POST",
      headers: {
        token: token,
      },
      body: formData,
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        alert(data);
        elModal.style.display = "none";
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      })
      .finally(() => {
        dispatch(modelsAction.setLoading(false));
      });
  };

  const handleFormSubmitUpdate = (evt) => {
    evt.preventDefault();

    const {
      inputModel: { value: carName },
      inputMotor: { value: motor },
      inputColor: { value: color },
      inputGear: { value: gearbox },
      textAreaDesc: { value: desc },
      inputYear: { value: year },
      inputDistance: { value: distance },
      inputPrice: { value: carPrice },
    } = evt.target;

    const formData = new FormData();

    formData.append("carCategory", category);
    formData.append("carName", carName);
    formData.append("motor", motor);
    formData.append("color", color);
    formData.append("tonirovka", tonirovka);
    formData.append("gearbox", gearbox);
    formData.append("desc", desc);
    formData.append("year", year);
    formData.append("distance", distance);
    formData.append("carPrice", carPrice);
    formData.append("carImg", file);
    formData.append("id", clickedId);

    fetch("http://localhost:2004/avtosalon/update-model", {
      method: "PUT",
      headers: {
        token: token,
      },
      body: formData,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        alert(data);
        elModal.style.display = "none";
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      })
      .finally(() => {
        dispatch(modelsAction.setLoading(false));
      });
  };

  return (
    <form
      onSubmit={
        formType === "add"
          ? handleFormSubmit
          : formType === "edit"
          ? handleFormSubmitUpdate
          : handleFormSubmit
      }
      className="model__modal-form"
    >
      <div className="model__modal-input-wrapper">
        <label
          className="input-label"
          htmlFor="modelSelect
        "
        >
          Markasi
          <Select
            onChange={(e) => setCategory(e.target.value)}
            id={"dirSelect"}
          >
            {listCategory?.map((item, index) => (
              <option value={item.categoryName} key={index}>
                {item.categoryName}
              </option>
            ))}
          </Select>
        </label>
        <Input id={"inputModel"} placeholder={"BYD Song"}>
          Model nomi
        </Input>
        <Input id={"inputMotor"} placeholder={"1.5"}>
          Motor
        </Input>
        <Input id={"inputColor"} placeholder={"Oq"}>
          Color
        </Input>

        <Input id={"inputGear"} placeholder={"A/T"}>
          Gearbox
        </Input>

        <label className="input-label" htmlFor="modelSelect2">
          Tanirovkasi
          <Select
            onChange={(e) => setTonirovka(e.target.value)}
            id={"modelSelect2"}
          >
            <option value="Yo'q">Yo'q</option>
            <option value="Bor">Bor</option>
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

        <Input id={"inputYear"} placeholder={"2023"}>
          Year
        </Input>
        <Input id={"inputDistance"} type={"number"} placeholder={"0"}>
          Distance
        </Input>
        <Input id={"inputPrice"} type={"number"} placeholder={"250 000 000"}>
          Narxi
        </Input>
        <Input
          style={{ marginBottom: 10 }}
          onChange={onFileChange}
          type={"file"}
          placeholder={"Yuklash"}
          id={"categoryFileInput"}
        >
          Rasm
        </Input>
      </div>

      <Button
        onClick={() => {
          elModal.style.display = "none";
        }}
      >
        Saqlash
      </Button>
    </form>
  );
};

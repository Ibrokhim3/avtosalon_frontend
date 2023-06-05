import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modelsAction } from "../../store";
import { Button } from "../button";
import { Input } from "../input-text";

export const CartegoryForm = ({ elModal }) => {
  const { formType, loading, clickedId } = useSelector((state) => state.models);

  const styles = {
    opacity: loading ? 0.7 : 1,
  };

  // const { token } = useSelector((state) => state.user);

  const token = localStorage.getItem("token");

  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

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
      categoryTextInput: { value: categoryName },
    } = evt.target;

    const formData = new FormData();

    formData.append("categoryName", categoryName);
    formData.append("categoryImg", file);

    fetch("http://localhost:2004/avtosalon/add-category", {
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
      categoryTextInput: { value: categoryName },
    } = evt.target;

    const formData = new FormData();

    formData.append("categoryName", categoryName);
    formData.append("categoryImg", file);
    formData.append("id", clickedId);

    fetch("http://localhost:2004/avtosalon/update-category", {
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
      onSubmit={formType === "add" ? handleFormSubmit : handleFormSubmitUpdate}
      className="category__modal-form"
    >
      <div className="category__modal-input-wrapper">
        <Input placeholder={"BYD"} id={"categoryTextInput"}>
          Markasi
        </Input>
        <Input
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
          // elModal.style.display = "none";
          dispatch(modelsAction.setFormType(""));
        }}
        style={{ marginTop: 40, styles }}
      >
        Saqlash
      </Button>
    </form>
  );
};

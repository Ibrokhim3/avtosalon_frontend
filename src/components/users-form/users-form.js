import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modelsAction } from "../../store";
import { API_URL } from "../../variables";
import { Button } from "../button";
import { Input } from "../input-text";
import { Select } from "../select";

export const UsersForm = ({}) => {
  const dispath = useDispatch();
  const { formType, clickedId } = useSelector((state) => state.models);

  const elModal = document.querySelector(".admin-panel__modal");

  const token = localStorage.getItem("token");
  const userRoleV = localStorage.getItem("userRole");

  const [file, setFile] = useState(null);
  const [userRole, setUserRole] = useState("user");
  const { loading } = useSelector((state) => state.models);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const styles = {
    opacity: loading ? 0.7 : 1,
  };

  const onFileChange = async (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const onRegSubmit = (evt) => {
    evt.preventDefault();
    dispatch(modelsAction.setLoading(true));

    const {
      inputPass: { value: password },
      inputPass2: { value: password2 },
      inputEmail: { value: userEmail },
    } = evt.target;

    const formData = new FormData();

    formData.append("userEmail", userEmail);
    formData.append("password", password);
    formData.append("password2", password2);
    formData.append("profileImg", file);
    formData.append("userRole", userRole);

    fetch(`${API_URL}/avtosalon/signup`, {
      method: "POST",
      headers: { token, userRole: userRoleV },
      body: formData,
    })
      .then((res) => {
        if (res.status !== 201) {
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
      })
      .finally(() => {
        dispatch(modelsAction.setLoading(false));
        navigate("/");
      });
  };

  const handleUpdateUser = (evt) => {
    evt.preventDefault();
    dispatch(modelsAction.setLoading(true));

    const {
      inputPass: { value: password },
      inputPass2: { value: password2 },
      inputEmail: { value: userEmail },
    } = evt.target;

    const formData = new FormData();

    formData.append("userEmail", userEmail);
    formData.append("password", password);
    formData.append("password2", password2);
    formData.append("userRole", userRole);
    formData.append("id", clickedId);
    formData.append("profileImg", file);

    fetch(`${API_URL}/avtosalon/update-user-by-admin`, {
      method: "PUT",
      headers: {
        token,
        userRole: userRoleV,
      },
      body: formData,
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
        elModal.style.display = "none";
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        dispatch(modelsAction.setLoading(false));
        navigate("/");
      });
  };

  return (
    <form
      onSubmit={
        formType === "add"
          ? onRegSubmit
          : formType === "edit"
          ? handleUpdateUser
          : onRegSubmit
      }
      className="users__modal-form"
    >
      <div className="users__modal-input-wrapper">
        <Input type="email" id="inputEmail" placeholder={"begzod94@gmail.com"}>
          User email
        </Input>
        <Input id="inputPass" type={"password"}>
          Parol
        </Input>
        <Input type={"password"} id={"inputPass2"}>
          Parolni takrorlang
        </Input>
        {userRoleV === "admin" ? (
          <label className="input-label" htmlFor="modelSelect2">
            User role:
            <Select
              onChange={(e) => setUserRole(e.target.value)}
              id={"modelSelect2"}
            >
              <option checked value="user">
                user
              </option>
              <option value="admin">admin</option>
            </Select>
          </label>
        ) : (
          ""
        )}
        <Input
          style={{ marginBottom: 10 }}
          onChange={onFileChange}
          type={"file"}
          placeholder={"Yuklash"}
          id={"categoryFileInput"}
        >
          Profilga Rasm
        </Input>
      </div>

      <Button
        style={styles}
        onClick={() => {
          elModal.style.display = "none";
        }}
      >
        Saqlash
      </Button>
    </form>
  );
};

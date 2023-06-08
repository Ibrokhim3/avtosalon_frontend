import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useFormAction, useNavigate } from "react-router-dom";
import { Container } from "../../components";
import { modelsAction } from "../../store";

export const SignupPage = () => {
  const [file, setFile] = useState(null);
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

    fetch("http://localhost:2004/avtosalon/signup", {
      method: "POST",
      // headers: { "Content-type": "Application/json" },
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
        dispatch(modelsAction.setLoading(false));
        alert(data);
        navigate("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Container style={{ marginTop: "60px", height: "100vh" }}>
      <div className="login-page__form-wrapper">
        <form onSubmit={onRegSubmit} className="login-page__form">
          <p className="login-page__form-title">Ro'yxatdan o'tish</p>
          <div className="login-page__input-wrapper">
            <input
              id="inputEmail"
              className="login-page__form-input"
              type="email"
              placeholder="Email"
            />
            <input
              id="inputPass"
              className="login-page__form-input"
              type="password"
              placeholder="Parol"
            />
            <input
              id="inputPass2"
              className="login-page__form-input"
              type="password"
              placeholder="Parol ni takrorlang"
            />
            <label
              className="login-page__form-title login-page__file-label"
              htmlFor="inputFile"
            >
              Profil uchun rasm yuklang
              <input
                onChange={onFileChange}
                id="inputFile"
                className="signup__upload-input"
                type="file"
                accept="image/*"
                placeholder="Profil uchun rasm yuklang"
              />
            </label>
            <div className="login-page__span-wrapper">
              <Link
                style={{ margin: 0 }}
                className="login-page__forgot-pass"
                to={"/login"}
              >
                Login
              </Link>
            </div>
          </div>
          <div className="login-page__button-wrapper">
            <button
              style={styles}
              type="submit"
              className="login-page__form-button"
            >
              Ro'yxatdan o'tish
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

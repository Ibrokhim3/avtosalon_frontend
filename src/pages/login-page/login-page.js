import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../components";
import { modelsAction } from "../../store";

export const LoginPage = () => {
  const { loading } = useSelector((state) => state.models);

  const styles = {
    opacity: loading ? 0.7 : 1,
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onLoginSubmit = (evt) => {
    evt.preventDefault();
    dispatch(modelsAction.setLoading(true));

    const {
      inputPass: { value: password },
      inputEmail: { value: userEmail },
    } = evt.target;

    const user = {
      userEmail,
      password,
    };

    fetch("http://localhost:2004/avtosalon/login", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(user),
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
        localStorage.setItem("token", data.token);
        localStorage.setItem("userRole", data.userRole);

        alert(data.msg);
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        dispatch(modelsAction.setLoading(false));
      });
  };

  return (
    <Container style={{ marginTop: "60px", height: "100vh" }}>
      <div className="login-page__form-wrapper">
        <form onSubmit={onLoginSubmit} className="login-page__form">
          <p className="login-page__form-title">Tizimga kirish</p>
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
            <div className="login-page__span-wrapper">
              <Link
                style={{ margin: 0 }}
                className="login-page__forgot-pass"
                to={"/signup"}
              >
                Ro'yxatdan o'tish
              </Link>
              <span className="login-page__forgot-pass">
                Parolni unutdingizmi?
              </span>
            </div>
          </div>
          <div className="login-page__button-wrapper">
            <button
              disabled={loading}
              style={styles}
              type="submit"
              className="login-page__form-button"
            >
              Kirish
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

import { Container } from "../../components";

export const LoginPage = () => {
  // const styles = {
  //   opacity: loading ? 0.7 : 1,
  // };

  // const onLoginSubmit = (evt) => {
  //   evt.preventDefault();
  //   dispatch(postsAction.setLoading(true));

  //   const {
  //     inputPass: { value: password },
  //     inputLogin: { value: login },
  //   } = evt.target;

  //   const user = {
  //     login,
  //     password,
  //   };

  //   fetch("https://light-pleat-jay.cyclic.app/pressa/login", {
  //     method: "POST",
  //     headers: { "Content-type": "Application/json" },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => {
  //       if (res.status === 201) {
  //         return res.json();
  //       }
  //       return Promise.reject(res);
  //     })
  //     .then((data) => {
  //       localStorage.setItem("token", data.token);
  //       dispatch(postsAction.setLoading(false));
  //       navigate("/admin-panel");
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };

  return (
    <Container style={{ marginTop: "60px", height: "100vh" }}>
      <div className="login-page__form-wrapper">
        <form className="login-page__form">
          <p className="login-page__form-title">Tizimga kirish</p>
          <div className="login-page__input-wrapper">
            <input
              id="inputLogin"
              className="login-page__form-input"
              type="text"
              placeholder="Login"
            />
            <input
              id="inputPass"
              className="login-page__form-input"
              type="password"
              placeholder="Parol"
            />
            <span className="login-page__forgot-pass">
              Parolni unutdingizmi?
            </span>
          </div>
          <div className="login-page__button-wrapper">
            <button
              // style={styles}
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

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button";

import adminIcon from "../../assets/icons/admin.svg";
import arrowIcon from "../../assets/icons/Vector.svg";
import avatarImg from "../../assets/icons/avatar3.png";
import { useDispatch, useSelector } from "react-redux";
import { modelsAction } from "../../store";

export const Header = ({ style, children, icon }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const userRole = JSON.parse(localStorage.getItem("userRole"));
  return (
    <header style={style} className="header">
      <div className="header__profile-wrapper">
        <button
          className="profile-button"
          onClick={() => {
            dispatch(modelsAction.setPageType("user-profile"));
            token ? navigate("/user-page") : navigate("/login");
          }}
        >
          <img width={40} src={avatarImg} alt="profile-image" />
        </button>
        <p style={{ fontSize: 20 }} className="main-page_page-name">
          Profile
        </p>
      </div>
      {userRole === "admin" ? (
        <Button
          onClick={() => {
            dispatch(modelsAction.setPageType("admin-profile"));
            navigate("/admin-panel");
          }}
          style={{ width: 260 }}
          // to={"/admin-panel"}
        >
          <img src={adminIcon} alt="admin-icon" />
          {/* Login */}
          Admin panelga o‘tish
        </Button>
      ) : (
        ""
      )}

      <div className="main-page__title-wrapper">
        <Link to={"/"} className="main-page_page-name">
          Bosh sahifa <img src={arrowIcon} alt="arrow" />
          <Link className="main-page_page-name">modellar</Link>
          <Link className="main-page_page-name">{children}</Link>
        </Link>
      </div>
    </header>
  );
};

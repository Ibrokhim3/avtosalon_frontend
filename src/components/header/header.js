import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button";

import adminIcon from "../../assets/icons/admin.svg";
import arrowIcon from "../../assets/icons/Vector.svg";
import avatarImg from "../../assets/icons/Avatar.svg";

export const Header = ({ style, children, icon }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");
  return (
    <header style={style} className="header">
      <div className="header__profile-wrapper">
        <button
          className="profile-button"
          onClick={() => {
            token ? navigate("/user-page") : navigate("/login");
          }}
        >
          <img src={avatarImg} alt="profile-image" />
        </button>
        <p style={{ fontSize: 20 }} className="main-page_page-name">
          Profile
        </p>
      </div>
      {userRole === "admin" ? (
        <Button
          style={{ width: 260 }}
          to={token && userRole === "admin" ? "/admin-panel" : "/login"}
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
          <Link className="main-page_page-name">modellari</Link>
          <Link className="main-page_page-name">{children}</Link>
        </Link>
      </div>
    </header>
  );
};

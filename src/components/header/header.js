import { Link } from "react-router-dom";
import { Button } from "../button";

import adminIcon from "../../assets/icons/admin.svg";
import arrowIcon from "../../assets/icons/Vector.svg";

export const Header = ({ style, children, icon }) => {
  return (
    <header style={style} className="header">
      <Button style={{ width: 260 }} to={"admin-panel"}>
        {" "}
        <img src={adminIcon} alt="admin-icon" />
        {/* Login */}
        Admin panelga o‘tish
      </Button>
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

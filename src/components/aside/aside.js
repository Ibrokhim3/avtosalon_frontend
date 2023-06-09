import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { modelsAction } from "../../store";

export const Aside = () => {
  const dispath = useDispatch();

  const { pageType, tableType } = useSelector((state) => state.models);

  return (
    <div className="aside">
      <ul className="aside__list">
        <li className="aside__item">
          <Link to={"/"} className="aside__link">
            Asosiy
          </Link>
        </li>
        <li className="aside__item">
          <Link className="aside__link">E’lonlar</Link>
        </li>
        <li className="aside__item">
          <Link className="aside__link">Savollar</Link>
        </li>
        <li className="aside__item">
          {pageType === "admin-profile" ? (
            <button
              style={
                tableType === "category"
                  ? { color: "blue" }
                  : { color: "initial" }
              }
              onClick={() => {
                dispath(modelsAction.setTableType("category"));
              }}
              className="aside__link"
            >
              Kategoriyalar
            </button>
          ) : (
            <button
              style={
                tableType === "user-likes-table"
                  ? { color: "blue" }
                  : { color: "initial" }
              }
              onClick={() => {
                dispath(modelsAction.setTableType("user-likes-table"));
              }}
              className="aside__link"
            >
              Tanlangan mashinalar
            </button>
          )}
        </li>
        <li className="aside__item">
          {pageType === "admin-profile" ? (
            <button
              style={
                tableType === "cars" ? { color: "blue" } : { color: "initial" }
              }
              onClick={() => {
                dispath(modelsAction.setTableType("cars"));
              }}
              className="aside__link"
            >
              Masinalar
            </button>
          ) : (
            <button
              style={
                tableType === "user-buy-table"
                  ? { color: "blue" }
                  : { color: "initial" }
              }
              onClick={() => {
                dispath(modelsAction.setTableType("user-buy-table"));
              }}
              className="aside__link"
            >
              Sotib olingan mashinalar
            </button>
          )}
        </li>
        <li className="aside__item">
          {pageType === "admin-profile" ? (
            <button
              style={
                tableType === "users" ? { color: "blue" } : { color: "initial" }
              }
              onClick={() => {
                dispath(modelsAction.setTableType("users"));
              }}
              className="aside__link"
            >
              Foydalanuvchilar
            </button>
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  );
};

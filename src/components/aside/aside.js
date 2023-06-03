import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { modelsAction } from "../../store";

export const Aside = () => {
  const dispath = useDispatch();

  return (
    <div className="aside">
      <ul className="aside__list">
        <li className="aside__item">
          <Link className="aside__link">Asosiy</Link>
        </li>
        <li className="aside__item">
          <Link className="aside__link">E’lonlar</Link>
        </li>
        <li className="aside__item">
          <Link className="aside__link">Savollar</Link>
        </li>
        <li className="aside__item">
          <button
            onClick={() => {
              dispath(modelsAction.setTableType("category"));
            }}
            className="aside__link"
          >
            Kategoriyalar
          </button>
        </li>
        <li className="aside__item">
          <button
            onClick={() => {
              dispath(modelsAction.setTableType("cars"));
            }}
            className="aside__link"
          >
            Masinalar
          </button>
        </li>
        <li className="aside__item">
          <button
            onClick={() => {
              dispath(modelsAction.setTableType("users"));
            }}
            className="aside__link"
          >
            Foydalanuvchilar
          </button>
        </li>
      </ul>
    </div>
  );
};

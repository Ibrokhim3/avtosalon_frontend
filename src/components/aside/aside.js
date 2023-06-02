import { Link } from "react-router-dom";

export const Aside = () => {
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
          <Link className="aside__link">Kategoriyalar</Link>
        </li>
        <li className="aside__item">
          <Link className="aside__link">Masinalar</Link>
        </li>
        <li className="aside__item">
          <Link className="aside__link">Foydalanuvchilar</Link>
        </li>
      </ul>
    </div>
  );
};

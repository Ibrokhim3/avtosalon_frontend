import { Link } from "react-router-dom";

export const Button = ({ children, style, to, onClick, type, dataType }) => {
  if (to)
    return (
      <Link to={to} style={style} className="button">
        {children}
      </Link>
    );
  return (
    <button
      data-type={dataType}
      type={type ? type : "submit"}
      onClick={onClick}
      style={style}
      className="button"
    >
      {children}
    </button>
  );
};

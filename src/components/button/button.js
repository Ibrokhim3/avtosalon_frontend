import { Link } from "react-router-dom";

export const Button = ({ children, style, to }) => {
  if (to)
    return (
      <Link to={to} style={style} className="button">
        {children}
      </Link>
    );
  return (
    <button style={style} className="button">
      {children}
    </button>
  );
};

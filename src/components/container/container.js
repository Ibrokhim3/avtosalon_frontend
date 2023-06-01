import "./_container.scss";

export const Container = ({ children, style }) => {
  return <div style={style} className="container">{children}</div>;
};

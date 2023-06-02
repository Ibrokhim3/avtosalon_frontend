export const Input = ({ style, children, id, placeholder, type }) => {
  return (
    <label style={style} className="input-label" htmlFor={id}>
      {children}
      <input
        placeholder={placeholder}
        className={type === "file" ? "input input-file" : "input"}
        id={id}
        type={type ? type : "text"}
        accept={"image/*"}
      />
    </label>
  );
};

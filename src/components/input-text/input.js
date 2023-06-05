export const Input = ({ style, children, id, placeholder, type, onChange }) => {
  return (
    <label style={style} className="input-label" htmlFor={id}>
      {children}
      <input
        onChange={onChange}
        placeholder={placeholder}
        className={type === "file" ? "input input-file" : "input"}
        id={id}
        type={type ? type : "text"}
        accept={"image/*"}
      />
    </label>
  );
};

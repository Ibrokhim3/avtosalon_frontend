export const Select = ({ children, id, onChange, checked, labelName }) => {
  return (
    <div className="select-wrapper">
      <select onChange={onChange} className="select" name="" id={id}>
        {children}
      </select>
    </div>
  );
};

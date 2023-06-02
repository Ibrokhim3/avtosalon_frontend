export const CategoryTable = ({
  children,
  style,
  to,
  onClick,
  type,
  dataType,
}) => {
  return (
    <table className="admin-panel__table">
      <thead>
        <tr>
          <th>#</th>
          <th>Markasi</th>
          <th>Gearbook</th>
          <th>Tanirovkasi</th>
          <th>Motor</th>
          <th>Color</th>
          <th>Year</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>BYD</td>
          <td>Sinxron karobka</td>
          <td>Yoq</td>
          <td>300kw/soat</td>
          <td>2023</td>
          <td>Oq</td>
          <td>0 km</td>
          <td className="admin-panel__td-button">
            <button data-type="delete-category" className="control-button">
              <img width={22} src={trashIcon} alt="delete/trash" />
            </button>
          </td>
          <td className="">
            <button
              data-type="edit-category"
              onClick={() => {
                elModal.style.display = "block";
                setFormType("edit-category");
              }}
              className="control-button"
            >
              <img width={22} src={editIcon} alt="edit/pen" />
            </button>
          </td>
          <td>
            <Link>
              <img src={arrowRight} alt="arrow-right" />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

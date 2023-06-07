import { Link, useParams } from "react-router-dom";

import cortIcon from "../../assets/icons/cart.svg";
import likeIcon from "../../assets/icons/like.svg";

export const ModelItem = ({
  style,
  children,
  modelPrice,
  modelImg,
  priceText,

  item: { categoryName, categoryImg, publicId, _id, createdBy },
}) => {
  return (
    <li className="model_item">
      <Link to={`models/${_id}`}>
        <img
          style={{ marginBottom: 16, objectFit: "contain" }}
          width={289}
          height={220}
          src={categoryImg}
          alt="car-byd"
        />
        <p style={style} className="model_item_car-brand">
          {categoryName}
        </p>
        <p style={{ textAlign: "left" }} className="model-item__car-price">
          <span className="model-item__car-price-text">{priceText}</span>{" "}
          {modelPrice}
        </p>
      </Link>
      <div style={{ display: "none" }} className="model-item__button-wrapper">
        <button className="action-button">
          <img style={{ width: 25 }} src={cortIcon} alt="buy" />
        </button>
        <button className="action-button">
          <img style={{ width: 25 }} src={likeIcon} alt="like" />
          <span className="count">1</span>
        </button>
      </div>
    </li>
  );
};

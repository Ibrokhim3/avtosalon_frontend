import { Link } from "react-router-dom";

import cortIcon from "../../assets/icons/cart.svg";
import likeIcon from "../../assets/icons/like.svg";

export const ModelItem = ({
  style,
  children,
  modelPrice,
  modelImg,
  priceText,
}) => {
  return (
    <li className="model_item">
      <Link>
        <img
          style={{ marginBottom: 16 }}
          width={289}
          height={220}
          src={modelImg}
          alt="car-byd"
        />
        <p style={style} className="model_item_car-brand">
          {children}
        </p>
        <p style={{ textAlign: "left" }} className="model-item__car-price">
          <span className="model-item__car-price-text">{priceText}</span>{" "}
          {modelPrice}
        </p>
      </Link>
      <div className="model-item__button-wrapper">
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

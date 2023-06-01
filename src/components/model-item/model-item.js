import { Link } from "react-router-dom";

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
    </li>
  );
};

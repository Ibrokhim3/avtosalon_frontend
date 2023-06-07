import { Button, Container, ModelItem } from "../../components";

import bydSongImg from "../../assets/img/05.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { useDispatch, useSelector } from "react-redux";

export const ModelInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { listCategory, loading, error, listCars } = useSelector(
    (state) => state.models
  );

  const selectModel = listCars?.find((item, index) => item._id === id);

  const {
    carName,
    carImg,
    carPrice,
    color,
    desc,
    distance,
    gearbox,
    motor,
    tonirovka,
    year,
    allExp,
  } = selectModel;

  return (
    <div className="model-info-page">
      <Container>
        <Header style={{ marginBottom: 64 }}></Header>
        <div className="model-info-page__wrapper">
          <div className="model-info-page__info-wrapper">
            <h3 className="model-info-page__model-name">{carName}</h3>
            <p className="model-info-page__model-price">
              <span className="model-info-page__model-price">{carPrice}</span>
              &nbsp;so‘m dan
            </p>
            <img
              style={{ marginBottom: 16 }}
              width={348}
              src={carImg}
              alt="car-img"
            />
            <ul className="model-info-page__list">
              <li className="model-info-page__item">
                Marka:&nbsp;
                <span className="model-info-page__span">
                  {carName.split(" ")[0]}
                </span>
              </li>
              <li className="model-info-page__item">
                Tanirovkasi:&nbsp;
                <span className="model-info-page__span">{tonirovka}</span>
              </li>
              <li className="model-info-page__item">
                Motor:&nbsp;
                <span className="model-info-page__span">{motor}</span>
              </li>
              <li className="model-info-page__item">
                Year:&nbsp;<span className="model-info-page__span">{year}</span>
              </li>
              <li className="model-info-page__item">
                Distance:&nbsp;
                <span className="model-info-page__span">{distance}</span>
              </li>
              <li className="model-info-page__item">
                Gearbox:&nbsp;
                <span className="model-info-page__span">{gearbox}</span>
              </li>
              <li className="model-info-page__item">
                Description:&nbsp;
                <span className="model-info-page__span">{desc}</span>
              </li>
              <li className="model-info-page__item">
                Umumiy xarajat:&nbsp;
                <span className="model-info-page__span">
                  {allExp}&nbsp;so'm dan
                </span>
              </li>
            </ul>
          </div>
          <div className="model-info-page__model-wrapper">
            <h3 className="model-info-page__model-name">{carName}</h3>
            <img
              width={900}
              style={{ marginBottom: 16 }}
              className="model-info-page__model-img"
              src={carImg}
              alt="car-img"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

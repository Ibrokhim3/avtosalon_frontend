import { Button, Container, ModelItem } from "../../components";

import bydSongImg from "../../assets/img/05.png";
import { Link } from "react-router-dom";
import { Header } from "../../components/header";

export const ModelInfoPage = () => {
  return (
    <div className="model-info-page">
      <Container>
        <Header style={{ marginBottom: 64 }}></Header>
        <div className="model-info-page__wrapper">
          <div className="model-info-page__info-wrapper">
            <h3 className="model-info-page__model-name">BYD Song</h3>
            <p className="model-info-page__model-price">
              <span className="model-info-page__model-price">329 900 000</span>
              &nbsp;so‘m dan
            </p>
            <img
              style={{ marginBottom: 16 }}
              width={348}
              src={bydSongImg}
              alt="car-img"
            />
            <ul className="model-info-page__list">
              <li className="model-info-page__item">
                Marka:&nbsp;<span className="model-info-page__span">BYD</span>
              </li>
              <li className="model-info-page__item">
                Tanirovkasi:&nbsp;
                <span className="model-info-page__span">Yo‘q</span>
              </li>
              <li className="model-info-page__item">
                Motor:&nbsp;
                <span className="model-info-page__span">Elektr</span>
              </li>
              <li className="model-info-page__item">
                Year:&nbsp;<span className="model-info-page__span">2023</span>
              </li>
              <li className="model-info-page__item">
                Distance:&nbsp;<span className="model-info-page__span">0</span>
              </li>
              <li className="model-info-page__item">
                Gearbook:&nbsp;
                <span className="model-info-page__span">Yo‘q</span>
              </li>
              <li className="model-info-page__item">
                Description:&nbsp;
                <span className="model-info-page__span">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, deserunt. Sint eum fuga quas officiis quod libero
                  exercitationem.
                </span>
              </li>
              <li className="model-info-page__item">
                Umumiy xarajat:&nbsp;
                <span className="model-info-page__span">
                  329 900 000 so'm dan
                </span>
              </li>
            </ul>
          </div>
          <div className="model-info-page__model-wrapper">
            <h3 className="model-info-page__model-name">BYD Song</h3>
            <img
              style={{ marginBottom: 16 }}
              className="model-info-page__model-img"
              src={bydSongImg}
              alt="car-img"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

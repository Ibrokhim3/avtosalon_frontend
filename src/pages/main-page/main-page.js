import { Button, Container, ModelItem } from "../../components";

import bydImg from "../../assets/img/BYD-Atto-3.jpg";
import { Link } from "react-router-dom";
import { Header } from "../../components/header";

export const MainPage = () => {
  return (
    <div className="main-page">
      <Container>
        <Header></Header>
        <p className="main-page__page-title">Modellari</p>
        <ul className="main-page__list">
          <ModelItem style={{ textAlign: "center" }} modelImg={bydImg}>
            BYD
          </ModelItem>
        </ul>
      </Container>
    </div>
  );
};

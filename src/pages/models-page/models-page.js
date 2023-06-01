import { Button, Container, ModelItem } from "../../components";

import bydImg from "../../assets/img/BYD-Atto-3.jpg";
import bydSongImg from "../../assets/img/01.jpg";
import { Link } from "react-router-dom";
import { Header } from "../../components/header";

export const ModelsPage = () => {
  return (
    <div className="models-page">
      <Container>
        <Header>BYD turlari</Header>
        <p className="main-page__page-title">Modellar turlari</p>
        <ul className="main-page__list">
          <ModelItem
            priceText={"Narxi:"}
            style={{ textAlign: "left", marginBottom: 8 }}
            modelPrice={"329 000 000"}
            modelImg={bydSongImg}
          >
            BYD SONG
          </ModelItem>
        </ul>
      </Container>
    </div>
  );
};

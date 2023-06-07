import { Button, Container, ModelItem, ModelItemCar } from "../../components";

import bydImg from "../../assets/img/BYD-Atto-3.jpg";
import bydSongImg from "../../assets/img/01.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modelsAction } from "../../store";

export const ModelsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { listCategory, listCars, loading, error } = useSelector(
    (state) => state.models
  );

  useEffect(() => {
    fetch("http://localhost:2004/avtosalon/get-models/" + id)
      .then((res) => {
        if (res.status !== 200) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        dispatch(modelsAction.setListCars(data));
      })
      .catch((err) => {
        alert(err);
      });
  }, [listCars]);

  return (
    <div className="models-page">
      <Container>
        <Header>BYD turlari</Header>
        <p className="main-page__page-title">Modellar turlari</p>
        <ul className="main-page__list">
          {listCars?.map((item, index) => (
            <ModelItemCar
              like={"like"}
              key={index}
              item={item}
              priceText={"Narxi:"}
              style={{ textAlign: "left", marginBottom: 8 }}
              // modelPrice={item.price}
              // modelImg={item.img}
            ></ModelItemCar>
          ))}
        </ul>
      </Container>
    </div>
  );
};

import { Button, Container, ModelItem } from "../../components";

import bydImg from "../../assets/img/BYD-Atto-3.jpg";
import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import { modelsAction } from "../../store";
import { useEffect } from "react";

export const MainPage = () => {
  const { list, loading, error } = useSelector((state) => state.models);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:2004/avtosalon/get-categories")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        dispatch(modelsAction.setList(data));
      })
      .catch((err) => {
        return console.log(err);
      });
  }, [list]);

  return (
    <div className="main-page">
      <Container>
        <Header></Header>
        <p className="main-page__page-title">Modellari</p>
        <ul className="main-page__list">
          {list?.map((item, index) => (
            <ModelItem
              key={index}
              item={item}
              style={{ textAlign: "center" }}
              modelImg={bydImg}
            >
              BYD
            </ModelItem>
          ))}
        </ul>
      </Container>
    </div>
  );
};

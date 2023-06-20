import { Button, Container, ModelItem, Slider } from "../../components";

import bydSongImg from "../../assets/img/05.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { API_URL } from "../../variables";
import { modelsAction } from "../../store";

export const ModelInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { listCategory, loading, error, listCars } = useSelector(
    (state) => state.models
  );

  let selectModel = listCars?.find((item, index) => item._id === id);

  !localStorage.getItem("model") &&
    localStorage.setItem("model", JSON.stringify(selectModel));

  selectModel = JSON.parse(localStorage.getItem("model"));
  // useEffect(() => {
  //   fetch(`${API_URL}/avtosalon/get-model/` + id)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.json();
  //       }
  //       return Promise.reject(res);
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setModel(data);
  //     })
  //     .catch((err) => {
  //       return console.log(err);
  //     });
  // }, []);

  const {
    carName,
    carImg,
    carImg1,
    carImg2,
    carImg3,
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
                  {/* {carName.split(" ")[0]} */}
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
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              // effect={"cube"}
              // cubeEffect={{
              //   shadow: true,
              //   slideShadows: true,
              //   shadowOffset: 20,
              //   shadowScale: 0.94,
              // }}
            >
              <SwiperSlide>
                <img
                  maxWidth={824}
                  height={444}
                  className="model-info-page__model-img"
                  src={carImg1}
                  alt="car-img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={824}
                  height={444}
                  className="model-info-page__model-img"
                  src={carImg2}
                  alt="car-img2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={824}
                  height={444}
                  className="model-info-page__model-img"
                  src={carImg3}
                  alt="car-img3"
                />
              </SwiperSlide>
            </Swiper>
            {/* <img
              width={900}
              style={{ marginBottom: 16 }}
              className="model-info-page__model-img"
              src={carImg}
              alt="car-img"
            /> */}
            {/* <Slider slides={listCars} /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

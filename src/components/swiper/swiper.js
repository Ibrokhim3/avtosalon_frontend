import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Slider = ({ slides }) => {
  const { id } = useParams();

  const { listCategory, loading, error, listCars } = useSelector(
    (state) => state.models
  );
  const selectModel = listCars?.find((item, index) => item._id === id);

  return (
    <Swiper
      // modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      {/* <SwiperSlide>3</SwiperSlide> */}
    </Swiper>
  );
};

import { SwiperSlide } from "swiper/react";

import "./CardSwiper.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const CardSwiper = ({ item }) => {
  return (
    <div className="divGallery">
      <div className="divCard">
        <h1>{item.nombre} </h1>
        <p>${item.precio}</p>
      </div>
      <img className="divGalleryImg" src={item.imagenUrl} alt={item.nombre} />
    </div>
  );
};

export default CardSwiper;

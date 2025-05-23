import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Swiper1.css";

import { useState, useContext, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BtnGnrc from "./BtnGnrc";
import { useAppContext } from "../contexts/FunctionContext";
import { CarritoContext } from "../contexts/CarritoContext";

const OutfitCards = () => {
  const { publicClothes } = useAppContext();
  const { handleAddToCart } = useContext(CarritoContext);
  const clothes = publicClothes;
  const [index, setIndex] = useState(0);
  /*  const swiperRef = useRef(null); */
  const isMobile = window.innerWidth < 720;

  /* console.log("titleRef ", titleRef); */

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "12vh",
          padding: 6,
          fontSize: "1em",
        }}
      >
        <h2
          style={{
            flex: 1,
            textAlign: "left",
          }}
        >
          {clothes[index].nombre}
        </h2>
        <h3
          style={{
            flex: 1,
            textAlign: "right",
          }}
        >
          {clothes[index].precio}
        </h3>
      </div>

      <div style={{ height: "60vh", width: "50%", margin: "auto" }}>
        {clothes !== false && (
          <Swiper
            modules={[Navigation]}
            navigation
            /*  onSwiper={(swiper) => {
              // swiperRef.current = swiper;
              console.log("activeIndex ", swiper.activeIndex);
            }} */
            onSlideChange={(swiper) => {
              setIndex(swiper.activeIndex);
            }}
            spaceBetween={50}
            slidesPerView={1}
            style={{ height: "100%" }}
          >
            {clothes.map((item) => (
              <SwiperSlide key={item._id}>
                <img
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                  src={item.imagenUrl}
                  alt={item.nombre}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="fatherDiv">
        {isMobile == true && (
          <div id="addBtn" className="childCards">
            <BtnGnrc
              txt="ADD TO CART"
              onClick={() => handleAddToCart(clothes[index])}
            />
          </div>
        )}
        <div className="childCards">
          <h3 style={{ margin: 0 }}>DESCRIPTION</h3>
          {clothes[index].descripcion}
        </div>
        <div className="childCards">
          <h3 style={{ margin: 0 }}>DETAILS</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque
          omnis necessitatibus.
        </div>
        <div className="childCards">
          <h3 style={{ margin: 0 }}>SIZES</h3>
          <div>36 38 40 42</div>
        </div>

        {isMobile == false && (
          <div id="addBtn" className="childCards">
            <BtnGnrc
              txt="ADD TO CART"
              onClick={() => handleAddToCart(clothes[index])}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OutfitCards;

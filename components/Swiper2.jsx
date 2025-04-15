import "./Swiper2.css";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import CardSwiper from "./CardSwiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import imgPrintShoes from "../src/assets/shoes/imgPrintShoes.jpg";
import imgSamba from "../src/assets/shoes/imgSamba.jpg";
import imgRedShoes from "../src/assets/shoes/imgRedShoes.jpg";
import imgDocBlack from "../src/assets/shoes/imgDocBlack.jpg";
import imgFrenchJeans from "../src/assets/bottoms/imgFrenchJeans.jpg";
import imgJeanShorts from "../src/assets/bottoms/imgJeanShorts.jpg";
import imgGucciPant from "../src/assets/bottoms/imgGucciPant.jpg";
import imgMinifaldaJean from "../src/assets/bottoms/imgMinifaldaJean.jpg";
import imgHat from "../src/assets/accessories/imgHat.jpg";
import imgMiuBag from "../src/assets/accessories/imgMiuBag.jpg";
import imgEarrings from "../src/assets/accessories/imgEarrings.jpg";
import { useAppContext } from "../contexts/FunctionContext";
import LoadingPage from "../pages/LoadingPage";

/* const productos = [
  {
    nombre: "Print Shoes",
    precio: (Math.random() * (50 - 20) + 20).toFixed(2),
    imagen: imgPrintShoes,
  },
  {
    nombre: "Miu Miu Cargo Bag",
    precio: (Math.random() * (100 - 60) + 60).toFixed(2),
    imagen: imgMiuBag,
  },
  {
    nombre: "Docs Black",
    precio: (Math.random() * (70 - 30) + 30).toFixed(2),
    imagen: imgDocBlack,
  },
  {
    nombre: "French Jeans",
    precio: (Math.random() * (70 - 30) + 30).toFixed(2),
    imagen: imgFrenchJeans,
  },
  {
    nombre: "Jean Shorts",
    precio: (Math.random() * (70 - 30) + 30).toFixed(2),
    imagen: imgJeanShorts,
  },
  {
    nombre: "Adidas Samba OG",
    precio: (Math.random() * (70 - 30) + 30).toFixed(2),
    imagen: imgSamba,
  },
  {
    nombre: "Gucci Pant",
    precio: (Math.random() * (70 - 30) + 30).toFixed(2),
    imagen: imgGucciPant,
  },
  {
    nombre: "Red Shoes",
    precio: (Math.random() * (70 - 30) + 30).toFixed(2),
    imagen: imgRedShoes,
  },
  {
    nombre: "Jean Miniskirt",
    precio: (Math.random() * (70 - 30) + 30).toFixed(2),
    imagen: imgMinifaldaJean,
  },
  {
    nombre: "Vivienne Earrings",
    precio: (Math.random() * (70 - 30) + 30).toFixed(2),
    imagen: imgEarrings,
  },
  {
    nombre: "Vintage Hat",
    precio: (Math.random() * (70 - 30) + 30).toFixed(2),
    imagen: imgHat,
  },
]; */

const Home = () => {
  const { publicClothes } = useAppContext();
  const ropa = publicClothes;
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
      }}
    >
      <div className="divh2">
        <h2 className="divText">recommendations</h2>
      </div>

      <div className="divSwiper">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => {
            setIndex(swiper.activeIndex);
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {ropa.map(
            (item, i) => (
              console.log("el array de prendas publicas en SWIPER2 es: ", ropa),
              (
                <SwiperSlide key={i + "slide"}>
                  <CardSwiper item={item} />
                </SwiperSlide>
              )
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;

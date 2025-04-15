import React, { useState, useEffect } from "react";
import BtnGnrc from "../components/BtnGnrc";
import "../pages/Closet.css";
import { useAppContext } from "../contexts/FunctionContext";

const Closet = ({ setModalState }) => {
  const { closet, setCloset } = useAppContext();
  return (
    <div className="divClosetContainer">
      <div className="divClosetTitle">My Closet</div>
      <BtnGnrc
        txt="Agregar nueva prenda"
        onClick={() => setModalState({ state: "CREAR" })}
      />
    </div>
  );
};

export default Closet;

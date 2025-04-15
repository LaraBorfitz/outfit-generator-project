import CardsCloset from "../components/CardsCloset";
import Closet from "./Closet";
import { useEffect, useState } from "react";
import FormModal from "./FormModal";
import { useAppContext } from "../contexts/FunctionContext";
import OutfitGenerator from "./closet/OutfitGenerator";

const UserCloset = () => {
  const [modalState, setModalState] = useState({
    state: false,
  });

  return (
    <div>
      <Closet setModalState={setModalState} />
      <CardsCloset setModalState={setModalState} />
      <OutfitGenerator />
      {modalState.state && (
        <FormModal modalState={modalState} setModalState={setModalState} />
      )}
    </div>
  );
};

export default UserCloset;

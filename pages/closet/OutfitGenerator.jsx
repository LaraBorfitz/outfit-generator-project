import { useState } from "react";
import { useAppContext } from "../../contexts/FunctionContext";
import noImg from "../../src/assets/Image-not-found.png";
import { generateOutfit } from "../../src/utils/generateOutfit";
import BtnGrnc from "../../components/BtnGnrc";
import { BASE_URL } from "../../baseUrl";

const OutfitGenerator = () => {
  const { closet } = useAppContext();
  const [generated, setGenerated] = useState({
    top: "",
    bottom: "",
    shoes: "",
  });

  function handleGeneration() {
    const result = generateOutfit(closet);
    setGenerated(result);
  }

  function handleGenerationSummer() {
    const result = generateOutfit(closet, "Primavera/Verano");
    setGenerated(result);
  }

  function handleGenerationWinter() {
    const result = generateOutfit(closet, "Invierno/Otoño");
    setGenerated(result);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Outfit del día</h2>

      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <BtnGrnc
          txt="Generar Outfit Random"
          onClick={() => handleGeneration()}
        />
        <BtnGrnc
          txt="Generar Outfit Primavera/Verano"
          onClick={() => handleGenerationSummer()}
        />
        <BtnGrnc
          txt="Generar Outfit Invierno/Otoño"
          onClick={() => handleGenerationWinter()}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", paddingTop: 20 }}>
        {Object.keys(generated).map((key) => (
          <img
            key={key}
            style={{
              width: 140,
              height: 140,
              marginBottom: 20,
              border: "1px solid gray",
              objectFit: "contain",
            }}
            src={generated[key] ? BASE_URL + generated[key] : noImg}
          />
        ))}
      </div>
    </div>
  );
};

export default OutfitGenerator;

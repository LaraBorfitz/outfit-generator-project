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
  // console.log("op 1> ", generated.top);
  // console.log("op 2> ", generated["top"]);

  function handleGeneration() {
    const result = generateOutfit(closet);
    setGenerated(result);
    console.log("resultado de generatedOutfit: ", result);
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
      <h2>titulo</h2>
      <BtnGrnc txt="Generar Outfit" onClick={() => handleGeneration()} />

      <div style={{ display: "flex", flexDirection: "column", paddingTop: 20 }}>
        {Object.keys(generated).map((key) => (
          <img
            key={key}
            style={{
              width: 140,
              height: 140,
              marginBottom: 20,
              border: "1px solid gray",
            }}
            src={generated[key] ? BASE_URL + generated[key] : noImg}
          />
        ))}
      </div>
    </div>
  );
};

export default OutfitGenerator;

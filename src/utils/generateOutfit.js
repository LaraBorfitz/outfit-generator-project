const getRandomItem = (arr) => {
  const numeroRandom = Math.floor(Math.random() * arr.length);
  return arr[numeroRandom];
};

const filterBySeason = (items, season) => {
  const seasons =
    season === "Primavera/Verano"
      ? ["primavera", "verano"]
      : ["invierno", "otoño"];
  return items.filter((item) => seasons.includes(item.estacion.toLowerCase()));
};

export function generateOutfit(closet, estacionElegida) {
  const top = closet.filter((item) => item.categoria === "Parte de arriba");
  const bottom = closet.filter((item) => item.categoria === "Parte de abajo");
  const shoes = closet.filter((item) => item.categoria === "Calzado");

  let filteredTop = top;
  let filteredBottom = bottom;
  let filteredShoes = shoes;

  if (estacionElegida) {
    filteredTop = filterBySeason(top, estacionElegida);
    filteredBottom = filterBySeason(bottom, estacionElegida);
    filteredShoes = filterBySeason(shoes, estacionElegida);

    console.log("filteredTop ES:", filteredTop);
    console.log("filteredBottom ES: ", filteredBottom);
    console.log("filteredShoes ES: ", filteredShoes);
  }

  const topRandom = getRandomItem(filteredTop.length > 0 ? filteredTop : top);
  const bottomRandom = getRandomItem(
    filteredBottom.length > 0 ? filteredBottom : bottom
  );
  const shoesRandom = getRandomItem(
    filteredShoes.length > 0 ? filteredShoes : shoes
  );

  console.log("topRandom ES:", topRandom);
  console.log("bottomRandom ES: ", bottomRandom);
  console.log("shoesRandom ES: ", shoesRandom);

  const finalResponse = {
    top: topRandom.imageURL || noImg,
    bottom: bottomRandom.imageURL || noImg,
    shoes: shoesRandom.imageURL || noImg,
  };

  return finalResponse;
}

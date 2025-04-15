export function generateOutfit(closet) {
  function getRandomItem(arr) {
    const numeroRandom = Math.floor(Math.random() * arr.length);
    return arr[numeroRandom];
  }

  let top = [];
  let bottom = [];
  let shoes = [];

  closet.map((item) => {
    if (item.categoria === "Parte de arriba") {
      top.push(item);
    } else if (item.categoria === "Parte de abajo") {
      bottom.push(item);
    } else if (item.categoria === "Calzado") {
      shoes.push(item);
    }
  });

  console.log("top ", top);
  console.log("bottom ", bottom);
  console.log("shoes ", shoes);

  const topRandom = getRandomItem(top);

  const estacion = topRandom.estacion;

  const estacionBottom = [];
  const estacionShoes = [];

  bottom.map((item) => {
    if (item.estacion === estacion) {
      estacionBottom.push(item);
    }
  });

  shoes.map((item) => {
    if (item.estacion === estacion) {
      estacionShoes.push(item);
    }
  });

  let randomBottom;
  let randomShoes;

  if (estacionBottom.length == 0) {
    randomBottom = getRandomItem(bottom);
  } else {
    randomBottom = getRandomItem(estacionBottom);
  }

  if (estacionShoes.length == 0) {
    randomShoes = getRandomItem(shoes);
  } else {
    randomShoes = getRandomItem(estacionShoes);
  }

  console.log("topRandom", topRandom);
  console.log("randomBottom", randomBottom);
  console.log("randomShoes", randomShoes);

  const finalResponse = {
    top: topRandom.imageURL || "",
    bottom: randomBottom.imageURL || "",
    shoes: randomShoes.imageURL || "",
  };

  return finalResponse;
}

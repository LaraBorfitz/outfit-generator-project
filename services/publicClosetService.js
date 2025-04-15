export async function getPublicCloset() {
  try {
    const res = await fetch("http://localhost:3002/api/public/ropa");

    if (res.status !== 200) {
      throw new Error("Failed to conect the server");
    }

    const data = await res.json();

    if (!data.ok) {
      throw new Error("Failed to fetch public closet");
    }
    console.log("data es: ", data.ropa);

    return data.ropa;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function postPublicCloset(item) {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch("http://localhost:3001/api/public/items", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch public closet");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const getToken = () => localStorage.getItem("token");

export async function getPrivateCloset() {
  try {
    const res = await fetch("http://localhost:3002/api/client/closet", {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });

    if (res.status !== 200) {
      throw new Error("Failed to conect the server");
    }

    const data = await res.json();

    if (!data.ok) {
      throw new Error("Failed to fetch private closet");
    }

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function postPrivateCloset(item) {
  console.log("item en postPrivateCloset > ", item);

  try {
    const res = await fetch("http://localhost:3002/api/client/addCloset", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!res.ok) {
      throw new Error("Failed to add item to private closet");
    }

    const data = await res.json();

    if (!data.closet) {
      throw new Error("Failed to add item to private closet");
    }

    return data.closet;
  } catch (error) {
    console.log("error en postPrivateCloset > ", error);
    return false;
  }
}

export async function deletePrivateCloset(itemId) {
  try {
    const res = await fetch(
      `http://localhost:3002/api/client/deletecloset/${itemId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete item from private closet");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("error en deletePrivateCloset > ", error);
    return false;
  }
}

export async function updatePrivateCloset(itemId, item) {
  try {
    const res = await fetch(
      `http://localhost:3002/api/client/changecloset/${itemId}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + getToken(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to update item in private closet");
    }

    const data = await res.json();
    console.log("data en updatePrivateCloset > ", data);

    return data;
  } catch (error) {
    console.log("error en updatePrivateCloset > ", error);
    return false;
  }
}

export async function postImgService(image) {
  const newFormData = new FormData();
  newFormData.append("image", image);
  try {
    const res = await fetch("http://localhost:3002/api/upload/image", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      body: newFormData,
    });

    if (!res.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await res.json();
    return data.imageURL;
  } catch (error) {
    console.log(error);
    return false;
  }
}

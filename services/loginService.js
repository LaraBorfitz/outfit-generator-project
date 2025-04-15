export async function postLogin(username, password) {
  try {
    const res = await fetch("http://localhost:3002/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      throw new Error("Failed to login");
    }

    const data = await res.json();
    console.log("postLogin ", data.token);
    //  localStorage.removeItem("token");
    return data.token;
  } catch (error) {
    console.log(error);
    return false;
  }
}

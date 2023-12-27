export async function putData(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.log("whoops: ", error);
  }
}

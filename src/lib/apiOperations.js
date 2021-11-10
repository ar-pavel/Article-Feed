const base_url = "http://localhost:8084/";
const base_url_article = "http://localhost:8084/articles";

export async function fetch_data(id = null, method, token = "", params = {}) {
  console.log("body : ", params);
  const res = await fetch(base_url_article + (id == null ? "" : `/${id}`), {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    ...params,
  });
  const json = res.json();
  // console.log("response:", json);
  return json;
}

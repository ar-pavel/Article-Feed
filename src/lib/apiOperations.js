const base_url = "http://localhost:8084";

export async function fetchData(url, method, token = "", params = {}) {
  console.log("body : ", params);
  const res = await fetch(base_url + url, {
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

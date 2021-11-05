const base_url = "http://localhost:8084/articles";

export async function getArticles(id = null) {
  const res = await fetch(base_url + (id == null ? "" : `/${id}`), {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = res.json();
  // console.log("response:", json);
  return json;
}

export async function updatetArticles(id = null, token, article) {
  console.log("update request with id:", id, ", body:", article);
  const res = await fetch(base_url + `/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(article),
  });
  const data = res.json();

  console.log(data);

  //   console.log("response:", data);
  return data;
}

export async function createArticles(token, article) {
  const res = await fetch(base_url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(article),
  });
  const json = res.json();
  // console.log("response:", json);
  return json;
}

export async function deleteArticle(token, uuid) {
  const res = await fetch(base_url + `/${uuid}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
  const json = res.json();
  // console.log("response:", json);
  return json;
}

export async function getArticles(id = null) {
  const res = await fetch(
    id
      ? `http://localhost:8084/articles/${id}`
      : "http://localhost:8084/articles",
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = res.json();
  // console.log("response:", json);
  return json;
}

export async function updatetArticles(id = null, token, article) {
  console.log("update request with id:", id, ", body:", article);
  const res = await fetch(`http://localhost:8084/articles/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(article),
  });
  const data = res.json();

  //   console.log("response:", data);
  return data;
}

export async function createArticles(token, article) {
  const res = await fetch("http://localhost:8084/articles", {
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

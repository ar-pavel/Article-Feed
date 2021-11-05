const base_url = "http://localhost:8084";

export async function loginUser({ email, password }) {
  const res = fetch(base_url + "/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = (await res).json();

  return data;
}

export async function signupUser(credentials) {
  const res = fetch(base_url + "/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: credentials.authorName,
      password: credentials.password,
      email: credentials.email,
    }),
  });
  const data = (await res).json();

  return data;
}

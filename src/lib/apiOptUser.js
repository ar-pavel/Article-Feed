export async function loginUser({ email, password }) {
  const res = fetch("http://localhost:8084/login", {
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
  const res = fetch("http://localhost:8084/signup", {
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

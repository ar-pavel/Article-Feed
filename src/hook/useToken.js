import { useState } from "react";
import decoder from "jwt-decode";

const useToken = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  const saveToken = (user) => {
    console.log(user);
    const { token } = user;
    localStorage.setItem("token", JSON.stringify(token));
    setToken(token);
  };

  return {
    setToken: saveToken,
    token,
    userName: token ? decoder(token)["username"] : null,
  };
};

export default useToken;

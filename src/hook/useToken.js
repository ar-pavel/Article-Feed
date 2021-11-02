import { useState } from "react";

const useToken = () => {
  const [token, setToken] = useState(() => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  });

  const [userName, setUserName] = useState(() => {
    const nameString = sessionStorage.getItem("userName");
    const userName = JSON.parse(nameString);
    return userName;
  });

  const saveToken = (user) => {
    console.log(user);
    const { token, name } = user;

    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("userName", JSON.stringify(name));
    setToken(token);
    setUserName(name);
  };

  return {
    setToken: saveToken,
    token,
    userName,
  };
};

export default useToken;

import { useState } from "react";

const useToken = () => {
  const [token, setToken] = useState(() => {
    const tokenString = localStorage.getItem("token");
    const userToken = tokenString;
    return userToken;
  });

  const [userName, setUserName] = useState(() => {
    const nameString = localStorage.getItem("userName");
    const userName = nameString;
    return userName;
  });

  const saveToken = (user) => {
    console.log(user);
    const { token, name } = user;

    localStorage.setItem("token", token);
    localStorage.setItem("userName", name);
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

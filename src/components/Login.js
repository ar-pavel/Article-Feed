import React from "react";
import { useState } from "react";
import { loginUser } from "../lib/apiOptUser";
import { Redirect } from "react-router";
import useToken from "../hook/useToken";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useToken();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    try {
      const data = await loginUser({ email, password });
      // console.log("Response from api:", data);
      setToken(data);
      // alert("login successfull")
    } catch (error) {
      console.log(error.message);
      alert("invalid credentials");
    }
  };

  return token ? (
    <Redirect to="/" />
  ) : (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Author Login </h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Email</p>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </fieldset>
        <div>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

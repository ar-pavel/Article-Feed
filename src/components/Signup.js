import React from "react";
import { useState } from "react";
import { signupUser } from "../lib/apiOptUser";
import useToken from "../hook/useToken";
import { Redirect } from "react-router";

const Signup = () => {
  const [authorName, setAuthorName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { token, setToken } = useToken();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(authorName, password);
    try {
      const data = await signupUser({ authorName, password, email });
      // console.log("Response from api:", data);
      setToken(data);
      alert("signup successfully!");
    } catch (error) {
      console.log(error);
      alert("invalid informations");
    }
  };

  return token ? (
    <Redirect to="/" />
  ) : (
    <div className="flex-display-column">
      <h1 className="title">Author SignUp </h1>
      <div className="flex-display-column">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <p className="flex-display space-between">
              <label>User Name </label>
              <input
                type="text"
                value={authorName}
                onChange={(event) => setAuthorName(event.target.value)}
              ></input>
            </p>
            <p className="flex-display space-between">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </p>
            <p className="flex-display space-between">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </p>
          </fieldset>
          <br />
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Signup;

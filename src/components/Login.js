import React from "react";
import { useState } from "react";
import {loginUser} from "../lib/apiOptUser";
import PropTypes from 'prop-types';

const Login = ({ setToken }) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
       // console.log(email, password);
        try {
            const data =  await loginUser({ email, password });
            // console.log("Response from api:", data);
            setToken(data);
            alert("login successfull")
        } catch (error) {
            console.log(error.message)
            alert("invalid credentials")
        }
    };
    

    return (<div style={{display: "flex", flexDirection: "column",alignItems: "center"}}>
       <h1>Author Login </h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
            <label>
                <p>Email</p>
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </label>
            </fieldset>
            <div>
                <br />
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>);

    
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };

export default Login;
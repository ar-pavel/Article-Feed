import React from "react";
import { useState } from "react";
import {signupUser} from "../lib/apiOptUser";
import PropTypes from 'prop-types';

const Signup = ({ setToken }) => {
    
    const [authorName, setAuthorName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
       // console.log(authorName, password);
        try {
            const data =  await signupUser({ authorName, password , email});
            console.log("Response from api:", data);
            setToken(data.token);
            alert("signup successfully!");
        } catch (error) {
            console.log(error)
            alert("invalid informations")
        }
    };

    const style = { 
            main: {display: "flex", flexDirection: "column",alignItems: "center"},
            flex: {display: "flex", flexDirection: "row", justifyContent: "space-between"}
    };
    

    return (<div style={style.main}>
        <form onSubmit={handleSubmit}>
        <fieldset>
            <p style= {style.flex} >
                <label>User Name</label>
                <input type="text" value={authorName} onChange={event => setAuthorName(event.target.value)}></input>
            </p>
            <p style= {style.flex}>
                <label>Email</label>
                <input type="email" value={email} onChange={event => setEmail(event.target.value)}></input>
            </p>
            <p style= {style.flex}>
                <label>Password</label>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)}></input>
            </p>
        </fieldset>
            <br />
            <input type="submit"></input>
        </form>
    </div>);

}

Signup.propTypes = {
    setToken: PropTypes.func.isRequired
  };

export default Signup;
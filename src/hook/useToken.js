import {useState} from 'react'

// using session storage to store the token 
const useToken = () => {

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
         // optional chaining operator '?.' for avoiding error in accessing the token property before storing, 
        // in that case the value of sessionStorage.getItem('token') will be undefined
        return userToken?.token;
    };
    
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
        console.log("token to saved:", userToken)
        console.log("token saved:", token)
    }

    return {
        setToken: saveToken,
        token
    }

}

export default useToken;
import {useState} from 'react'

const useToken = () => {

    const [token, setToken] = useState(()=> { 
            const tokenString = sessionStorage.getItem('token');
            const userToken = JSON.parse(tokenString);
            return userToken;
        })
   

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
        //console.log("token to saved:", userToken)
        //console.log("token saved:", token)
    }

    return {
        setToken: saveToken,
        token
    }

}

export default useToken;
import { Link } from "react-router-dom";
import useToken from "../hook/useToken";

const Navbar = ({left, right})=>{

    const {userName} = useToken();

    const style = {
        flex: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }
    };

    return(<> 
        <div style={style.flex}>
            <div style={style.flex}>
                {left}
                {right}
            </div>
            <div>
                {userName? <p>{userName}</p> : <Link style={{textDecoration: "none"}} to={'/login'} ><p>login</p> </Link>}
            </div>
        </div>
        
    </>);

}

export default Navbar;
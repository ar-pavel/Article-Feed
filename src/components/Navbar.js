import { useState } from "react";
import { Link } from "react-router-dom";
import useToken from "../hook/useToken";
import ConstructArticle from "./ConstructArticle";

const Navbar = ({ left, right }) => {
  const { userName } = useToken();
  const [status, setStatus] = useState(false);

  const style = {
    flex: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    button: {
      margin: "10px",
    },
  };

  const handleStatus = () => {
    setStatus(true);
  };

  return (
    <>
      <div style={style.flex}>
        <div style={style.flex}>
          {left}
          {right}
        </div>
        <div>
          {userName ? (
            <div style={style.flex}>
              <button style={style.button} onClick={handleStatus}>
                Add Article
              </button>
              <p>{userName}</p>
            </div>
          ) : (
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              <p>login</p>
            </Link>
          )}
        </div>
      </div>
      {status && <ConstructArticle changeStatus={setStatus} />}
    </>
  );
};

export default Navbar;

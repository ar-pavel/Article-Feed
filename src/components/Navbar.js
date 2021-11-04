import { useState } from "react";
import { Link } from "react-router-dom";
import useToken from "../hook/useToken";
import ConstructArticle from "./ConstructArticle";

const Navbar = ({ left, right }) => {
  const { userName } = useToken();
  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(true);
  };

  return (
    <div className="nav-container">
      <div className="flex-display space-between">
        <div className="flex-display space-between">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/icon.png"}
            height={50}
            width={50}
            alt="LOGO"
          />
          {left}
          {right}
        </div>
        <div>
          {userName ? (
            <div className="flex-display space-between">
              <button className="article-add-button" onClick={handleStatus}>
                Add Article
              </button>
              <p>{userName}</p>
            </div>
          ) : (
            <Link className="no-decoration-text" to={"/login"}>
              <p>login</p>
            </Link>
          )}
        </div>
      </div>
      {status && <ConstructArticle changeStatus={setStatus} />}
    </div>
  );
};

export default Navbar;

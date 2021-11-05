import { useState } from "react";
import { Link } from "react-router-dom";
import useToken from "../hook/useToken";
import logout from "../lib/logOut";
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
              <button
                className="article-add-button flex-display space-between"
                onClick={handleStatus}
              >
                <img
                  className="add-logo"
                  src={process.env.PUBLIC_URL + "/add.png"}
                  height={20}
                  width={20}
                  alt="LOGO"
                />
                <p> Add Article</p>
              </button>
              <p
                onMouseOver={(e) => (e.target.textContent = "🚪 Log-out")}
                onMouseLeave={(e) => (e.target.textContent = `👤 ${userName}`)}
                className="user"
                type="button"
                onClick={(e) => logout()}
              >
                👤 {userName}
              </p>
            </div>
          ) : (
            <Link className="no-decoration-text" to={"/login"}>
              <p>👤 login</p>
            </Link>
          )}
        </div>
      </div>
      {status && <ConstructArticle changeStatus={setStatus} />}
    </div>
  );
};

export default Navbar;

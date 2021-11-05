import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useToken from "../hook/useToken";
import { getArticles } from "../lib/apiOptArticles";
import ConstructArticle from "./ConstructArticle";
import Navbar from "./Navbar";

const Article = () => {
  let { uuid } = useParams();
  const [article, setArticle] = useState({
    title: "",
    description: "",
    author: "",
  });
  const { userName } = useToken();

  const [status, setStatus] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const data = await getArticles(uuid);
      setArticle(data);
    };
    fetch();
  }, [uuid]);

  const handleEdit = () => {
    setStatus(true);
  };

  return (
    <>
      <Navbar
        left={
          <>
            <Link to={`/`} className="no-decoration-text">
              <h1 className="nav-header">Article View</h1>
            </Link>
          </>
        }
      />

      <div className="article-view">
        <div className="flex-display space-between">
          <h2 className="title"> {article.title}</h2>

          {userName === article.author ? (
            <button
              className="article-edit-button flex-display space-between"
              disabled={status}
              onClick={handleEdit}
            >
              <img
                className="add-logo"
                src={process.env.PUBLIC_URL + "/edit.png"}
                height={15}
                width={15}
                alt="LOGO"
              />
              <p> Edit</p>
            </button>
          ) : null}
        </div>
        <div>
          <p>
            By <Link to="#"> {article.author} </Link>
          </p>
          {/*This section is just a placeholder*/}
          <p>
            <span className="flex-display rand">
              <span className="timestamp">
                <span>Last Validated on</span>
                <span>March 30, 2020</span>
              </span>
              <span className="timestamp">
                <span>Originally Published on</span>
                <span>March 26, 2020</span>
              </span>
              <span>
                <span>161.5k</span>
                <span> views</span>
              </span>
            </span>
          </p>
        </div>
        <div className="description">{article.description}</div>
      </div>

      {status && (
        <ConstructArticle article={article} changeStatus={setStatus} />
      )}
    </>
  );
};

export default Article;

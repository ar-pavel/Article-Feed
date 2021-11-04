import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../lib/apiOptArticles";
import Navbar from "./Navbar";

const Feed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getArticles();
      setArticles(data);
    };
    fetch();
  }, []);

  return (
    <div>
      <Navbar
        left={
          <>
            <Link to={`/`} className="no-decoration-text">
              <h1 className="nav-header">Article Feed</h1>
            </Link>
          </>
        }
      />
      <ul className="article-list-view">
        {articles.map((article) => (
          <li className="article-card" key={article.uuid}>
            <div className="flex-display">
              <div className="title">
                <Link to={`/${article.uuid}`} className="no-decoration-text">
                  <h2> {article.title}</h2>
                </Link>
              </div>
              <div className="author">{article.author}</div>
            </div>
            <div className="description">
              {article.description.substring(0, 300) + "..."}
              <Link to={`/${article.uuid}`}>{"Read More"}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;

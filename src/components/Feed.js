import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UpdaterContex from "../hook/updaterContext";
import usePagination from "../hook/usePagination";
import { getArticles } from "../lib/apiOptArticles";
import Navbar from "./Navbar";

const Feed = () => {
  const [articles, setArticles] = useState([]);

  const { updateStatus } = useContext(UpdaterContex);

  const {
    currentPage,
    startingIndex,
    endingIndex,
    totalPageCount,
    prevPage,
    nextPage,
    setPage,
  } = usePagination({ contentPerPage: 3, contentCount: articles.length });

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getArticles();
        setArticles(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      console.log("update status : " + updateStatus);
      console.log("totoal page count : " + totalPageCount);
    };
    fetch();
  }, [updateStatus, articles.length]);

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
        {articles.slice(startingIndex, endingIndex).map((article) => (
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
              {article.description.substring(0, 100) + "..."}
              <Link to={`/${article.uuid}`}>{"Read More"}</Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex-display pagination-container">
        <p className="text">
          {startingIndex + 1} - {Math.min(endingIndex, articles.length)} of{" "}
          {articles.length}
        </p>
        <button
          onClick={prevPage}
          className={`page ${currentPage === 1 && "disabled"}`}
        >
          &larr;
        </button>

        {[...Array(totalPageCount).keys()].map((idx) => (
          <button
            onClick={() => setPage(idx + 1)}
            key={idx}
            className={`page ${currentPage === idx + 1 ? "active" : ""}`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          className={`page ${currentPage === totalPageCount && "disabled"}`}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Feed;

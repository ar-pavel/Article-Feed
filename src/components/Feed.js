import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UpdaterContex from "../hook/updaterContext";
import usePagination from "../hook/usePagination";
import { fetch_data } from "../lib/apiOperations";
import ArticleCard from "./ArticleCard";
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
        const data = await fetch_data(null, "GET");
        setArticles(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      console.log("update status : " + updateStatus);
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
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
      <div className="flex-display pagination-container">
        <p className="pag-text">
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

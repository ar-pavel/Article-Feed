import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
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

  // will be transafarred to ceprate CSS file
  const style = {
    title: {
      color: "#333",
      flex: 1,
      fontSize: 20,
      lineHeight: 1.25,
      fontWeight: 500,
      letterSpacing: "-.5px",
    },
    author: {
      color: "#666",
      display: "block",
      fontSize: 15,
      marginTop: "2rem",
      marginLeft: ".5rem",
    },
    description: {
      color: "#333",
      fontSize: "16px",
      marginTop: "1rem",
      lineHeight: 1.5,
      fontFamily: "Arial",
    },
  };

  const handleEdit = () => {
    setStatus(true);
  };

  return (
    <>
      <Navbar left={<h1>Article View</h1>} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          fontFamily: "system-ui",
        }}
      >
        <div style={style.title}>
          <h2> {article.title}</h2>
        </div>
        <div style={style.author}>
          {userName === article.author ? (
            <button disabled={status} onClick={handleEdit}>
              🖊️ Edit
            </button>
          ) : (
            <p>{article.author}</p>
          )}
        </div>
      </div>
      <div style={style.description}>{article.description}</div>

      {status && (
        <ConstructArticle article={article} changeStatus={setStatus} />
      )}
    </>
  );
};

export default Article;

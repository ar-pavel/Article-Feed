import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  console.log("requested with : " + JSON.stringify(article));
  return article !== undefined ? (
    <>
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
    </>
  ) : null;
};

export default ArticleCard;

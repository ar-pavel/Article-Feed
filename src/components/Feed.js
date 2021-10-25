import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../lib/apiOptArticles";

function Feed() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let mounted = true;
        getArticles()
            .then(articles => {
                if (mounted) {
                    setArticles(articles)
                }
            })
        return () => mounted = false;
    }, []);


    const style = {
        title: { color: '#333', flex: 1, fontSize: 20, lineHeight: 1.25, fontWeight:500, letterSpacing: "-.5px" },
        author: { color: "#666", display: "block", fontSize: 15, marginTop: "2rem" , marginLeft: ".5rem"},
        description: {color: "#333", fontSize: "16px", marginTop: ".5rem", lineHeight: 1.5, fontFamily: "Arial"}
    }
    
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <h1>Article Feed</h1>
            </div>
            <ul>
                {articles.map(article =>
                    <li  key={article.uuid}>
                        <div style={{display: "flex", flexDirection: "row", fontFamily: "system-ui"}} >
                            <div style={style.title}>
                              <Link to={`/${article.uuid}`} style={{ color: "inherit", textDecoration: "none"}} > <h2> {article.title}</h2> </Link> 
                            </div>
                            <div style={style.author} >{article.author}</div>
                        </div>
                        <div style={style.description} >{article.description.substring(0, 300) + "..."}</div>
                        
               </li>)}
            </ul>
        </div>
  )
}
    
export default Feed;
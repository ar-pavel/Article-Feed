import React, { useState } from "react";
import useToken from "../hook/useToken";
import { createArticles, updatetArticles } from "../lib/apiOptArticles";
import Modal from "./Modal";

const ConstructArticle = ({ article = null, changeStatus }) => {
  const [title, setTitle] = useState(article ? article.title : "");

  const [description, setDescription] = useState(
    article ? article.description : ""
  );

  const { token } = useToken();

  const [show, setShow] = useState(true);

  const hideModal = () => {
    setShow(false);
    changeStatus(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (article) {
        // update article

        const res = await updatetArticles(article.uuid, token, {
          title,
          description,
        });
        console.log(res);
      } else {
        //create article

        const res = await createArticles(token, { title, description });
        console.log(res);
      }
      hideModal();
    } catch (error) {
      console.log(error.message);
      alert("error!");
    }
  };

  return (
    <div>
      <Modal show={show} handleClose={hideModal}>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>{article ? "Edit Article" : "Add Article"}</legend>
            <label>
              <p>Title</p>
              <input
                type="text"
                placeholder="add a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </label>
            <label>
              <p>Descriptions</p>
              <textarea
                rows="5"
                cols="50"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default ConstructArticle;

import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ handleClose, show, children }) => {
  const style = {
    modal: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: " 100%",
      background: "rgba(0, 0, 0, 0.6)",
    },

    main: {
      padding: "10px",
      position: "fixed",
      background: "white",
      width: "80 %",
      height: "auto",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  };

  return show
    ? ReactDOM.createPortal(
        <div style={style.modal}>
          <section style={style.main}>
            {children}
            <button
              style={{ float: "right" }}
              type="button"
              onClick={handleClose}
            >
              Close
            </button>
          </section>
        </div>,
        document.body
      )
    : null;
};

export default Modal;

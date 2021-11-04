import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ handleClose, show, children }) => {
  return show
    ? ReactDOM.createPortal(
        <div className="modal-view">
          <section className="modal-main">
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

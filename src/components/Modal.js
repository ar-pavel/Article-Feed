
const Modal = ({ handleClose, show, children }) => {

    const style = {
        modal: {
            position: "fixed",
            top: 0,
            left: 0,
            width:"100%",
            height:" 100%",
            background: rgba(0, 0, 0, 0.6)
        },
        
        main: {
            position:"fixed",
            background: "white",
            width: 80%,
            height: "auto",
            top:"50%",
            left:"50%",
            transform: "translate(-50%,-50%)",
        },
        
        displayBlock: {
            display: "block"
        },
        
        displayNone: {
            display: "none"
        }
    }
    
    const showHide = show ? style.displayBlock : style.displayNone;
    
    return (
      <div style={showHide}>
        <section style={style.main}>
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
};

export default Modal;
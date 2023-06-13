import "./Modal.css";

const Modal = ({active, setActive, title, children}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
        <div className="modal__dashboard">
          <h3 className="modal__title">{title}</h3>
          <div className="modal__cross" onClick={() => setActive(false)}>
            <img className="modal__cross-icon" src={`${process.env.PUBLIC_URL}/icons/cross.svg`}/>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal;
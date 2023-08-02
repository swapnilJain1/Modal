import "./styles.css";

export const Modal = ({ setIsShow }) => {
  const handleClose = (e) => {
    const hasClass = e.target.classList.contains("modal-close");
    hasClass && setIsShow(false);
  };
  return (
    <div className="modal modal-close" onClick={handleClose}>
      <div className="modal-container">
        <h2>Do you want to continue?</h2>
        <button>Yes</button>
        <button className="close-button modal-close">x</button>
        <button className="modal-close">No </button>
      </div>
    </div>
  );
};

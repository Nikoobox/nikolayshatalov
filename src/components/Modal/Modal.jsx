import React from "react";
import Modal from "react-modal";
import { HiOutlineX } from "react-icons/hi";
import "./modal.scss";

const customStyles = {
  overlay: {
    transition: "all 1s ease",
    zIndex: 99999,
    background: "#0d1d279e",
  },
  content: {
    margin: "auto",
    maxWidth: 720,
    height: "95vh",
    padding: 0,
  },
};

const MyModal = ({
  open,
  setOpen,
  children,
  renderTitle,
  renderActionButtons,
}) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      isOpen={open}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modal-inner">
        <div className="modal-head">
          {renderTitle && <div className="modal-title">{renderTitle()}</div>}
          <div className="close-btn" onClick={handleClose}>
            <HiOutlineX />
          </div>
        </div>
        <div className="children-wrapper">
          {children}
          {renderActionButtons && (
            <div className="action-buttons-wrapper">
              {renderActionButtons()}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;

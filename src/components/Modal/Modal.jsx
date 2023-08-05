import React from "react";
import Modal from "react-modal";
import { HiOutlineX } from "react-icons/hi";
import "./modal.scss";

const MyModal = ({
  open,
  setOpen,
  children,
  renderTitle,
  renderActionButtons,
  height,
  maxWidth,
  width,
  isFullScreen,
}) => {
  const handleClose = () => setOpen(false);

  const customStyles = {
    overlay: {
      transition: "all 1s ease",
      zIndex: 99999,
      background: "#0d1d279e",
    },
    content: {
      margin: "auto",
      maxWidth: maxWidth || 720,
      height: height || "95vh",
      padding: 0,
      width: width || "auto",
      ...(isFullScreen ? { left: 0 } : {}),
    },
  };

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

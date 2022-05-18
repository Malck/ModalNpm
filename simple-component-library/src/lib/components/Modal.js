import React from 'react';
import "./Modal.css"

function Modal({ message, onCloseModal }) {
    return (
      <>
        <div className="modal"></div>
        <div className="modal_body">
          <p className="modal_message">{message}</p>
          <p className="modal_icon" onClick={onCloseModal}>
             🗙
          </p>
        </div>
      </>
    );
}
  
export default Modal;
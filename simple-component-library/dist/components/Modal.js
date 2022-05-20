import React from 'react';
import "./Modal.css";

function Modal({
  message,
  onCloseModal
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: onCloseModal
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal_body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "modal_message"
  }, message), /*#__PURE__*/React.createElement("p", {
    className: "modal_icon",
    onClick: onCloseModal
  }, /*#__PURE__*/React.createElement("i", {
    class: "fa-solid fa-xmark"
  })))));
}

export default Modal;
import React from "react";
import classes from "./UserNameModal.module.css";
import ReactDom from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal} style={props.style}>
      <div>{props.body}</div>
    </div>
  );
};

const backdropContainer = document.getElementById("backdrop");
const modalOverlay = document.getElementById("modal-overlay");

const UserNameModal = (props) => {
  return (
    <div className={classes.container}>
      {ReactDom.createPortal(
        <BackDrop onClick={props.onClick} />,
        backdropContainer || document.body
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          header={props.header}
          body={props.body}
          onClick={props.onClick}
          style={props.style}
        />,
        modalOverlay || document.body
      )}
    </div>
  );
};

export default UserNameModal;

import React, { useState } from "react";
import { Buttons } from "components/formFields";
import Modal from "react-bootstrap/Modal";
import QRCode from "qrcode.react";
import Style from "./modal.module.scss"

export default function QRCodeModal({title}) {
  const [show, setShow] = useState(false);
  const [isShowQRCode, setShowQRCode] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleQRCodeGenerator() {
    setShowQRCode(true);
  }

  const handleClick = () => {
    handleQRCodeGenerator();
    handleShow();
  };
  return (
    <>
      <Buttons
        variant="outline-dark"
        type={"button"}
        onClick={handleClick}
        name={"Gerar QR Code"}
      />

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={Style.container__modal}>
            {isShowQRCode && <QRCode value />}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Buttons variant="outline-secondary" onClick={handleClose} name={"Fechar"} />
          <Buttons variant="outline-primary" onClick={handleClose} name={"Compartilhar"} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

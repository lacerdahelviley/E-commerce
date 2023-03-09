import React, { useState } from "react";
import { Buttons } from "components/formFields";
import Modal from "react-bootstrap/Modal";
import Style from "./modal.module.scss";
import QRCodeGenerator from "components/qrCodeGenerator";
import VehicleData from "components/vehicleData";

export default function CardModal({ show, setShow, veiculo, props }) {
  useState(false);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h1 className={Style.header_title}>{veiculo.nome}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={Style.imageContainer} >
            <img
              className={Style.img}
              src={veiculo.imagem}
              alt="Imagem do veículo"
            />
          </div>
          <VehicleData veiculo={veiculo} />
        </Modal.Body>
        <Modal.Footer>
          <div className={Style.container__button}>
            <Buttons
              onClick={handleClose}
              variant={"outline-danger"}
              name={"Fechar"}
            />
            <QRCodeGenerator className={Style.button} title={veiculo.nome} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

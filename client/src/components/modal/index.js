import VehicleData from "components/vehicleData";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Style from "./modal.module.scss";

export default function CardModal({ show, setShow, veiculo }) {
  useState(false);
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h1 className={Style.header_title}>{veiculo.nome}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className={Style.img}
            src={veiculo.imagem}
            alt="Imagem do veículo"
          />
          <VehicleData veiculo={veiculo} />
            <div className={Style.container__button}>
              <button className={Style.button}>Gerar QR Code</button>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

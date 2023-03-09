import React from "react";
import QRCodeModal from "../modal/qrCodeModal";

export default function QRCodeGenerator({ handleChange, title }) {

  return (
    <>
        <QRCodeModal title={title} handleChange={handleChange}/>
    </>
  );
}

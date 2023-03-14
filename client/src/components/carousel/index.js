import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import frota from "components/img/Frota-TORA-Transportes.jpg";
import banner from "components/img/BannerTora(2).jpg";
import destaque from "components/img/ToraDestaque.png";
import { Buttons } from "components/formFields";
import Style from "./carousel.module.scss";

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={frota} alt="First slide" />
        <Carousel.Caption>
          <div className={Style.buttons__container}>
            <Buttons variant={"success"} name={"CONHEÇA NOSSA FROTA"} />
            <Buttons variant={"outline-light"} name={"CONHEÇA NOSSA EMPRESA"} />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner} alt="Second slide" />

        <Carousel.Caption>
          <div className={Style.buttons__container}>
            <Buttons variant={"success"} name={"CONHEÇA NOSSA FROTA"} />
            <Buttons variant={"outline-light"} name={"CONHEÇA NOSSA EMPRESA"} />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={destaque} alt="Third slide" />

        <Carousel.Caption>
          <div className={Style.buttons__container}>
            <Buttons variant={"success"} name={"CONHEÇA NOSSA FROTA"} />
            <Buttons variant={"outline-light"} name={"CONHEÇA NOSSA EMPRESA"} />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

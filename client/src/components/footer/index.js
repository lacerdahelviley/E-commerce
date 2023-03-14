import Card from "react-bootstrap/Card";
import footer from "components/img/footer-img.png";
import Style from "./footer.module.scss";
import tora from "components/img/ToraLogo.png";

export default function Footer() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={footer} alt="Card image" />
      <Card.ImgOverlay>
        <div className={Style.container}>
          <div className={Style.logo__container}>
            <div className={Style.img__container}>
              <Card.Img src={tora} alt="Logo Tora" className={Style.logo} />
            </div>
            <div>
              <Card.Text className={Style.text__logo__container}>
                Uma empresa do Grupo Tora, um dos maiores operadores logísticos
                do país. Adquira o seu seminovo com qualidade, segurança e as
                melhores condições do mercado.
              </Card.Text>
            </div>
          </div>
          <div>
            <Card.Text className={Style.text__logo__container}>
              Last updated 3 mins ago
            </Card.Text>
          </div>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

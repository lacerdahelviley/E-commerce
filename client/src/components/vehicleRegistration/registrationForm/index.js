import React from "react";
import Style from "./registrationForm.module.scss";
import {
  ColFields,
  ImageSelector,
  TextArea,
  Buttons,
  Title,
  FormFields,
} from "../../formFields";

export default function RegistrationForm() {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.form__container}>
          <label className={Style.form__title__field}>
            <Title title={"Cadastro de veículos"} Style={Style} />
            <form className={Style.form__field}>
              <div className={Style.form}>
                <FormFields placeholder={"Nome do Veiculo"} />
                <FormFields placeholder={"Fabricante"} />
                <FormFields placeholder={"Modelo"} />
                <FormFields placeholder={"Ano"} />
              </div>
              <div className={Style.form}>
                <div className={Style.form__media}>
                  <FormFields placeholder={"Câmbio"} />
                  <ColFields
                    placeholder={"Potência"}
                    Style={Style}
                    unidadeMedida={"CV"}
                  />
                </div>
                <div className={Style.form__media}>
                  <ColFields
                    placeholder={"Torque"}
                    Style={Style}
                    unidadeMedida={"N.m"}
                  />
                  <FormFields placeholder={"KM"} />
                </div>
              </div>
              <div className={Style.form}>
                <FormFields placeholder={"Cor"} />
                <FormFields placeholder={"Cabine"} />
                <FormFields placeholder={"Relação diferencial"} />
                <FormFields placeholder={"Suspensão"} />
              </div>
              <div className={Style.form}>
                <div className={Style.form__media}>
                  <FormFields placeholder={"Entre-eixos"} />
                  <FormFields placeholder={"Placa do veículo"} />
                  <ColFields
                    placeholder={"Cap. máx. combustível"}
                    Style={Style}
                    unidadeMedida={"L"}
                  />
                </div>
                  <ColFields
                    placeholder={"Valor"}
                    Style={Style}
                    unidadeMedida={"R$"}
                  />
              </div>
              <div className={Style.form__media__textarea}>
                <TextArea
                  placeholder={"Informações opcionais"}
                  label={"Informações opcionais"}
                  Style={Style}
                />
                <TextArea
                  placeholder={"Informações adicionais"}
                  label={"Informações adicionais"}
                  Style={Style}
                />
              </div>

              <div className={Style.buttons__field}>
                <ImageSelector label={"Selecionar múltiplas imagens"} />
                <Buttons
                  type={"reset"}
                  variant={"outline-danger"}
                  name={"Limpar"}
                />{" "}
                <Buttons
                  type={"submit"}
                  variant={"outline-success"}
                  name={"Cadastrar"}
                  onClick={console.log("Funfou")}
                />
              </div>
            </form>
          </label>
        </div>
      </div>
    </>
  );
}

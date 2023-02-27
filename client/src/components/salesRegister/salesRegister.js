import React from "react";
import Style from "./salesRegister.module.scss";
import {
  Title,
  FormFields,
  ColFields,
  TextArea,
  ImageSelector,
  Buttons,
} from "components/formFields";

export default function SalesRegistration() {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.form__container}>
          <label className={Style.form__title__field}>
            <Title title={"Cadastro de vendas"} Style={Style} />
            <form className={Style.form__field}>
              <div className={Style.search}>
                <FormFields placeholder={"Placa do veículo"} />
              </div>
              <div className={Style.search}>
                <Buttons
                  type={"submit"}
                  variant={"outline-primary"}
                  name={"Pesquisar"}
                />
              </div>
              <div className={Style.form}>
                <FormFields disabled={true} placeholder={"Nome do Veiculo"} />
                <FormFields disabled={true} placeholder={"Fabricante"} />
                <FormFields disabled={true} placeholder={"Modelo"} />
                <FormFields disabled={true} placeholder={"Ano"} />
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

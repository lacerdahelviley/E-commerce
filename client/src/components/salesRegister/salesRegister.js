import React, { useState } from "react";
import Style from "./salesRegister.module.scss";
import {
  Title,
  FormFields,
  ColFields,
  TextArea,
  ImageSelector,
  Buttons,
} from "components/formFields";
import QRCodeGenerator from "components/qrCodeGenerator";
import veiculos from 'components/json/veiculos.json';

export default function SalesRegistration() {
  const [dados, setDados] = useState(veiculos);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };
  return (
    <>
      <div className={Style.container}>
        <div className={Style.form__container}>
          <label className={Style.form__title__field}>
            <Title title={"Cadastro de vendas"} Style={Style} />
            <form className={Style.form__field}>
              <div className={Style.search}>
                <FormFields
                  placeholder={"Placa do veículo"}
                  onChange={handleChange} value={dados.placa}
                />
              </div>
              <div className={Style.search}>
                <Buttons
                  type={"submit"}
                  variant={"outline-primary"}
                  name={"Pesquisar"}
                />
              </div>
              <div className={Style.form}>
                <FormFields disabled={true} onChange={handleChange} value={dados.nome} placeholder={"Nome do Veiculo"} />
                <FormFields disabled={true} onChange={handleChange} value={dados.marca} placeholder={"Fabricante"} />
                <FormFields disabled={true} onChange={handleChange} value={dados.modelo} placeholder={"Modelo"} />
                <FormFields disabled={true} onChange={handleChange} value={dados.ano} placeholder={"Ano"} />
              </div>
              <div className={Style.form}>
                <div className={Style.form__media}>
                  <FormFields placeholder={"Câmbio"} onChange={handleChange} value={dados.cambio}/>
                  <ColFields
                  onChange={handleChange} value={dados.potencia}
                    placeholder={"Potência"}
                    Style={Style}
                    unidadeMedida={"CV"}
                  />
                </div>
                <div className={Style.form__media}>
                  <ColFields
                  onChange={handleChange} value={dados.torque}
                    placeholder={"Torque"}
                    Style={Style}
                    unidadeMedida={"N.m"}
                  />
                  <FormFields placeholder={"KM"} onChange={handleChange} value={dados.km} />
                </div>
              </div>
              <div className={Style.form}>
                <FormFields placeholder={"Cor"} onChange={handleChange} value={dados.cor}/>
                <FormFields placeholder={"Cabine"} onChange={handleChange} value={dados.cabine}/>
                <FormFields placeholder={"Relação diferencial"} onChange={handleChange} value={dados.relacaoDiferencial}/>
                <FormFields placeholder={"Suspensão"} onChange={handleChange} value={dados.tipo_suspensao} />
              </div>
              <div className={Style.form}>
                <div className={Style.form__media}>
                  <FormFields placeholder={"Entre-eixos"} onChange={handleChange} value={dados.entreEixos} />
                  <ColFields
                  onChange={handleChange} value={dados.CapMaxCombustivel}
                    placeholder={"Cap. máx. combustível"}
                    Style={Style}
                    unidadeMedida={"L"}
                  />
                </div>
                <ColFields
                onChange={handleChange} value={dados.valor}
                  placeholder={"Valor"}
                  Style={Style}
                  unidadeMedida={"R$"}
                />
              </div>
              <div className={Style.form__media__textarea}>
                <TextArea
                onChange={handleChange} value={dados.infoOpicionais}
                  placeholder={"Informações opcionais"}
                  label={"Informações opcionais"}
                  Style={Style}
                />
                <TextArea
                onChange={handleChange} value={dados.infoAdicionais}
                  placeholder={"Informações adicionais"}
                  label={"Informações adicionais"}
                  Style={Style}
                />
              </div>
              <div className={Style.buttons__field}>
                <ImageSelector label={"Selecionar múltiplas imagens"} onChange={handleChange} value={dados.imagem} />
                <Buttons
                  type={"reset"}
                  variant={"outline-danger"}
                  name={"Limpar"}
                />{" "}
                <Buttons
                  type={"submit"}
                  variant={"outline-success"}
                  name={"Cadastrar"}
                  // onClick={}
                />{" "}
                <QRCodeGenerator handleChange={handleChange} title={"Resumo da venda"} />
              </div>
            </form>
          </label>
        </div>
      </div>
    </>
  );
}

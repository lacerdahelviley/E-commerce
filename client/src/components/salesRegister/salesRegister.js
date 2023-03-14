import React, { useState, useEffect } from "react";
import axios from "axios";
import Style from "./salesRegister.module.scss";
import {
  Title,
  FormFields,
  TextArea,
  ImageSelector,
  Buttons,
} from "components/formFields";
import QRCodeGenerator from "components/qrCodeGenerator";

export default function SalesRegistration() {
  const [veiculos, setVeiculos] = useState([]);
  const [dados, setDados] = useState(veiculos);

  useEffect(() => {
    axios
      .get("http://localhost:4000/veiculos/")
      .then((res) => {
        setVeiculos(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const buscarVeiculoPorPlaca = async () => {
    const placa = dados.Placa.toUpperCase();
    await axios
      .get(`http://localhost:4000/veiculo/list/${placa}`)
      .then((res) => {
        setDados(res.data);
      })
      .catch((error) => {
        console.error(error, "ERRORRRRR");
      });
  };

  const [formValues, setFormValues] = useState({
    placa: "",
    nome: "",
    marca: "",
    modelo: "",
    ano: "",
    cambio: "",
    potencia: "",
    torque: "",
    km: "",
    cor: "",
    cabine: "",
    relacaoDiferencial: "",
    tipo_suspensao: "",
    entreEixos: "",
    capMaxCombustivel: "",
    valor: "",
    infoOpicionais: "",
    infoAdicionais: "",
    imagem: "",
    status: "",
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const status = formValues.status = 1
      const bodyCadastro = { ...formValues, ...dados, status };
      const res = await axios.post(
        "http://localhost:4000/veiculo/venda",
        JSON.stringify(bodyCadastro),
        config
      );
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

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
            <form className={Style.form__field} onSubmit={handleSubmit}>
              <div className={Style.search}>
                <FormFields
                  placeholder={"Placa do veículo"}
                  name={"Placa"}
                  onChange={handleChange}
                />
              </div>
              <div className={Style.search}>
                <Buttons
                  type={"button"}
                  variant={"outline-primary"}
                  name={"Pesquisar"}
                  onClick={buscarVeiculoPorPlaca}
                />
              </div>
              <div className={Style.form}>
                <FormFields
                  disabled={true}
                  onChange={handleChange}
                  value={dados.nome}
                  placeholder={"Nome do Veiculo"}
                />
                <FormFields
                  disabled={true}
                  onChange={handleChange}
                  value={dados.marca}
                  placeholder={"Fabricante"}
                />
                <FormFields
                  disabled={true}
                  onChange={handleChange}
                  value={dados.modelo}
                  placeholder={"Modelo"}
                />
                <FormFields
                  disabled={true}
                  onChange={handleChange}
                  value={dados.ano}
                  placeholder={"Ano"}
                />
              </div>
              <div className={Style.form}>
                <div className={Style.form__media}>
                  <FormFields
                    placeholder={"Câmbio"}
                    value={formValues.cambio}
                    onChange={(e) =>
                      setFormValues({ ...formValues, cambio: e.target.value })
                    }
                  />
                  <FormFields
                    placeholder={"Potência  (CV)"}
                    value={formValues.potencia}
                    onChange={(e) =>
                      setFormValues({ ...formValues, potencia: e.target.value })
                    }
                  />
                </div>
                <div className={Style.form__media}>
                <FormFields
                    placeholder={"Torque  (kgf.m)"}
                    value={formValues.torque}
                    onChange={(e) =>
                      setFormValues({ ...formValues, torque: e.target.value })
                    }
                  />
                  <FormFields
                    placeholder={"KM"}
                    value={formValues.km}
                    onChange={(e) =>
                      setFormValues({ ...formValues, km: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className={Style.form}>
                <FormFields
                  placeholder={"Cor"}
                  value={formValues.cor}
                  onChange={(e) =>
                    setFormValues({ ...formValues, cor: e.target.value })
                  }
                />
                <FormFields
                  placeholder={"Cabine"}
                  value={formValues.cabine}
                  onChange={(e) =>
                    setFormValues({ ...formValues, cabine: e.target.value })
                  }
                />
                <FormFields
                  placeholder={"Relação diferencial"}
                  value={formValues.relacaoDiferencial}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      relacaoDiferencial: e.target.value,
                    })
                  }
                />
                <FormFields
                  placeholder={"Suspensão"}
                  value={formValues.tipo_suspensao}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      tipo_suspensao: e.target.value,
                    })
                  }
                />
              </div>
              <div className={Style.form}>
                <div className={Style.form__media}>
                  <FormFields
                    placeholder={"Entre-eixos  (mm)"}
                    value={formValues.entreEixos}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        entreEixos: e.target.value,
                      })
                    }
                  />
                  <FormFields
                    placeholder={"Tanque   (L)"}
                    value={formValues.capMaxCombustivel}
                    onChange={(e) =>
                      setFormValues({ ...formValues, capMaxCombustivel: e.target.value })
                    }
                  />
                </div>
                <FormFields
                    placeholder={"Valor   (R$)"}
                    value={formValues.valor}
                    onChange={(e) =>
                      setFormValues({ ...formValues, valor: e.target.value })
                    }
                  />
              </div>
              <div className={Style.form__media__textarea}>
                <TextArea
                  value={formValues.infoOpicionais}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      infoOpicionais: e.target.value,
                    })
                  }
                  placeholder={"Informações opcionais"}
                  label={"Informações opcionais"}
                  Style={Style}
                />
                <TextArea
                  value={formValues.infoAdicionais}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      infoAdicionais: e.target.value,
                    })
                  }
                  placeholder={"Informações adicionais"}
                  label={"Informações adicionais"}
                  Style={Style}
                />
              </div>
              <div className={Style.buttons__field}>
                <ImageSelector
                  label={"Selecionar múltiplas imagens"}
                  value={formValues.imagem}
                  onChange={(e) =>
                    setFormValues({ ...formValues, imagem: e.target.value })
                  }
                />
                <Buttons
                  type={"reset"}
                  variant={"outline-danger"}
                  name={"Limpar"}
                />{" "}
                <Buttons
                  type={"submit"}
                  variant={"outline-success"}
                  name={"Cadastrar"}
                  // onSubmit={console.log("Clicked me")}
                />{" "}
                <QRCodeGenerator
                  handleChange={handleChange}
                  title={"Resumo da venda"}
                />
              </div>
            </form>
          </label>
        </div>
      </div>
    </>
  );
}

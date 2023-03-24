import React, { useState } from "react";
import Style from "./registrationForm.module.scss";
import {
  ImageSelector,
  TextArea,
  Buttons,
  Title,
  FormFields,
} from "components/formFields";
import axios from "axios";

export default function RegistrationForm() {
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
    status: "0",
  });

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const handleImagesChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setFormValues({
      ...formValues,
      imagens: selectedImages,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      // formData.append("placa", formValues.placa);
      // formData.append("nome", formValues.nome);
      // formData.append("marca", formValues.marca);
      // formData.append("modelo", formValues.modelo);
      // formData.append("ano", formValues.ano);
      // formData.append("cambio", formValues.cambio);
      // formData.append("potencia", formValues.potencia);
      // formData.append("torque", formValues.torque);
      // formData.append("km", formValues.km);
      // formData.append("cor", formValues.cor);
      // formData.append("cabine", formValues.cabine);
      // formData.append("relacaoDiferencial", formValues.relacaoDiferencial);
      // formData.append("tipo_suspensao", formValues.tipo_suspensao);
      // formData.append("entreEixos", formValues.entreEixos);
      // formData.append("capMaxCombustivel", formValues.capMaxCombustivel);
      // formData.append("valor", formValues.valor);
      // formData.append("infoOpicionais", formValues.infoOpicionais);
      // formData.append("infoAdicionais", formValues.infoAdicionais);
      // formData.append("status", formValues.status);
      const teste = [];
      for (let i = 0; i < formValues.imagens.length; i++) {
        teste.push(formValues.imagens[i]);
      }
      const teste2 = [{
        fieldname: "imagem",
        originalname: "Civic-teste2.jpg",
        encoding: "7bit",
        mimetype: "image/jpeg",
        destination: "uploads/",
        filename: "1679680427393-Civic-teste2.jpg",
        path: "uploads\\1679680427393-Civic-teste2.jpg",
        size: 51450,
      }]
      formData.append("files", teste2 );
      console.log(formData);
      await axios.post(
        "http://localhost:4000/veiculo/cadastro",
        formValues,
        formData,
        config
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className={Style.container}>
        <div className={Style.form__container}>
          <label className={Style.form__title__field}>
            <Title title={"Cadastro de veículos"} Style={Style} />
            <form
              className={Style.form__field}
              encType={"multipart/form-data"}
              onSubmit={handleSubmit}
            >
              <div className={Style.form}>
                <FormFields
                  type={"text"}
                  name={"NomeVeiculo"}
                  value={formValues.nome}
                  onChange={(e) =>
                    setFormValues({ ...formValues, nome: e.target.value })
                  }
                  placeholder={"Nome do Veiculo"}
                />
                <FormFields
                  name={"Fabricante"}
                  placeholder={"Fabricante"}
                  type={"text"}
                  value={formValues.marca}
                  onChange={(e) =>
                    setFormValues({ ...formValues, marca: e.target.value })
                  }
                />
                <FormFields
                  name={"Modelo"}
                  placeholder={"Modelo"}
                  type={"text"}
                  value={formValues.modelo}
                  onChange={(e) =>
                    setFormValues({ ...formValues, modelo: e.target.value })
                  }
                />
                <FormFields
                  name={"Ano"}
                  placeholder={"Ano"}
                  type={"number"}
                  value={formValues.ano}
                  onChange={(e) =>
                    setFormValues({ ...formValues, ano: e.target.value })
                  }
                />
              </div>
              <div className={Style.form}>
                <div className={Style.form__media}>
                  <FormFields
                    name={"Câmbio"}
                    placeholder={"Câmbio"}
                    type={"text"}
                    value={formValues.cambio}
                    onChange={(e) =>
                      setFormValues({ ...formValues, cambio: e.target.value })
                    }
                  />
                  <FormFields
                    name={"Potência"}
                    placeholder={"Potência (CV)"}
                    type={"text"}
                    value={formValues.potencia}
                    onChange={(e) =>
                      setFormValues({ ...formValues, potencia: e.target.value })
                    }
                  />
                </div>
                <div className={Style.form__media}>
                  <FormFields
                    name={"Torque"}
                    placeholder={"Torque (kgf.m)"}
                    type={"text"}
                    value={formValues.torque}
                    onChange={(e) =>
                      setFormValues({ ...formValues, torque: e.target.value })
                    }
                  />
                  <FormFields
                    name={"KM"}
                    type={"number"}
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
                  name={"Cor"}
                  placeholder={"Cor"}
                  type={"text"}
                  value={formValues.cor}
                  onChange={(e) =>
                    setFormValues({ ...formValues, cor: e.target.value })
                  }
                />
                <FormFields
                  name={"Cabine"}
                  placeholder={"Cabine"}
                  type={"text"}
                  value={formValues.cabine}
                  onChange={(e) =>
                    setFormValues({ ...formValues, cabine: e.target.value })
                  }
                />
                <FormFields
                  type={"text"}
                  name={"RelacaoDiferencial"}
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
                  name={"Suspensão"}
                  type={"text"}
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
                    name={"EntreEixos"}
                    placeholder={"Entre-eixos (mm)"}
                    type={"number"}
                    value={formValues.entreEixos}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        entreEixos: e.target.value,
                      })
                    }
                  />
                  <FormFields
                    name={"Placa"}
                    placeholder={"Placa do veículo"}
                    type={"text"}
                    value={formValues.placa.toUpperCase()}
                    onChange={(e) =>
                      setFormValues({ ...formValues, placa: e.target.value })
                    }
                  />
                  <FormFields
                    name={"Cap. max. combustível"}
                    placeholder={"Cap. combustível (L)"}
                    type={"number"}
                    value={formValues.capMaxCombustivel}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        capMaxCombustivel: e.target.value,
                      })
                    }
                  />
                </div>
                <FormFields
                  name={"Valor"}
                  placeholder={"Valor (R$)"}
                  type={"text"}
                  value={formValues.valor}
                  onChange={(e) =>
                    setFormValues({ ...formValues, valor: e.target.value })
                  }
                />
              </div>
              <div className={Style.form__media__textarea}>
                <TextArea
                  name={"InfoAd"}
                  placeholder={"Informações opcionais"}
                  label={"Informações opcionais"}
                  Style={Style}
                  value={formValues.infoOpicionais}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      infoOpicionais: e.target.value,
                    })
                  }
                />
                <TextArea
                  name={"InfoOp"}
                  placeholder={"Informações adicionais"}
                  label={"Informações adicionais"}
                  Style={Style}
                  value={formValues.infoAdicionais}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      infoAdicionais: e.target.value,
                    })
                  }
                />
              </div>

              <div className={Style.buttons__field}>
                <ImageSelector
                  label={"Selecionar múltiplas imagens"}
                  onChange={handleImagesChange}
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
                />
              </div>
            </form>
          </label>
        </div>
      </div>
    </>
  );
}

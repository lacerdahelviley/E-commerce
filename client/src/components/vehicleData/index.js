import React from 'react'
import Style from './vehicleData.module.scss'

export default function VehicleData({veiculo}) {
  return (
    <div className={Style.containerDadosVeiculos}>
            <div className={Style.dadosVeiculosColuna}>
              <label>
                <strong className={Style.strong}>Marca:</strong> <p>{veiculo.marca}</p>
              </label>
              <label>
                <strong className={Style.strong}>Modelo:</strong> <p>{veiculo.potencia}</p>
              </label>
              <label>
                <strong className={Style.strong}>Ano:</strong> <p>{veiculo.ano}</p>
              </label>
              <label>
                <strong className={Style.strong}>Câmbio:</strong> <p>{veiculo.cambio}</p>
              </label>
              <label>
                <strong className={Style.strong}>Suspensao:</strong> <p>{veiculo.tipo_suspensao}</p>
              </label>
              <label>
                <strong className={Style.strong}>Potência:</strong> <p>{veiculo.potencia}</p>
              </label>
            </div>
            <div className={Style.dadosVeiculosColuna}>
              <label>
                <strong className={Style.strong}>Cor:</strong> <p>{veiculo.cor}</p>
              </label>
              <label>
                <strong className={Style.strong}>Cabine:</strong> <p>{veiculo.cabine}</p>
              </label>
              <label>
                <strong className={Style.strong}>KM:</strong> <p>{veiculo.km}</p>
              </label>
              <label>
                <strong className={Style.strong}>Combustível:</strong> <p>{veiculo.combustivel}</p>
              </label>
              <label>
                <strong className={Style.strong}>Valor:</strong> <p>{veiculo.valor}</p>
              </label>
            </div>
          </div>
  )
}

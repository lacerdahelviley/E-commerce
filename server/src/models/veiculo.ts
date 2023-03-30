interface Veiculo {
    id: number,
    placa: string,
    nome: string,
    marca: string,
    modelo: string,
    ano: number,
    cambio: string,
    potencia: number,
    torque: number,
    km: number,
    cor: string,
    cabine: string,
    relacaoDiferencial: string,
    tipo_suspensao: string,
    entreEixos: number,
    capMaxCombustivel: number,
    valor: number,
    infoOpcionais: string,
    infoAdicionais: string,
    imagem: {
        name: string;
        base64: string;
    },
}
export default Veiculo


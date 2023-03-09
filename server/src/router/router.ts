import express from 'express';
import db from '../config/database';

const Router = express.Router();

// METODO POST //
Router.post('/veiculo', (req, res) => {
    const veiculo = req.body;
    console.log(veiculo)
    const { placa, nome, marca, modelo, ano, cambio, potencia, torque, km, cor, cabine, relacaoDiferencial, tipo_suspensao, entreEixos, capMaxCombustivel, valor, infoOpicionais, infoAdicionais, imagem } = veiculo;
    if (!placa || !nome || !marca || !modelo || !ano || !cambio || !potencia || !torque || !km || !cor || !cabine || !relacaoDiferencial || !tipo_suspensao || !entreEixos || !capMaxCombustivel || !valor || !infoOpicionais || !infoAdicionais) {
        return res.status(400).json({ error: "Dados inválidos!" });
    }

    db('veiculos').insert({
        placa,
        nome,
        marca,
        modelo,
        ano,
        cambio,
        potencia,
        torque,
        km,
        cor,
        cabine,
        relacaoDiferencial,
        tipo_suspensao,
        entreEixos,
        capMaxCombustivel,
        valor,
        infoOpicionais,
        infoAdicionais,
        imagem
    })
        .then(function (insertedRows) {
            const id = insertedRows[0];
            return res.status(201).json({ id, ...veiculo });
        })
        .catch(function (err) {
            console.error(err.message);
            return res.status(500).json({ error: "Erro ao inserir o veículo." });
        });
});

// METODO GET
Router.get('/veiculos', async (req, res) => {
    try {
        const veiculos = await db.select('*').table('veiculos');
        res.status(200).json(veiculos);
    } catch (error) {
        res.status(500).json({ error: 'Não foi possível buscar os veículos.' });
    }
});

// METODO GET POR ID
Router.get('/veiculos/:id', async (req, res) => {
    const placa: string = req.params.id
    db('veiculos').where({ placa }).first().then((veiculo) => {
        if (!veiculo) {
            return res.status(404).json({ error: "Veículo não encontrado." })
        }
        return res.status(200).json(veiculo)
    })
        .catch((err) => {
            console.error(err);
            return res.status(500).json({ error: "Erro ao buscar o veículo." })
        })
});

// METODO PUT
Router.put('/veiculo/:id', async (req, res) => {
    const placaVeiculo: string = req.params.id;
    const veiculo = req.body;
    const { placa, nome, marca, modelo, ano, cambio, potencia, torque, km, cor, cabine, relacaoDiferencial, tipo_suspensao, entreEixos, capMaxCombustivel, valor, infoOpicionais, infoAdicionais, imagem } = veiculo;
    if (!placa || !nome || !marca || !modelo || !ano || !cambio || !potencia || !torque || !km || !cor || !cabine || !relacaoDiferencial || !tipo_suspensao || !entreEixos || !capMaxCombustivel || !valor || !infoOpicionais || !infoAdicionais || !imagem) {
        return res.status(400).json({ error: "Dados inválidos!" });
    }
    db("veiculos").where({ placa }).update({
        placa: placa,
        nome: nome,
        marca: marca,
        modelo: modelo,
        ano: ano,
        cambio: cambio,
        potencia: potencia,
        torque: torque,
        km: km,
        cor: cor,
        cabine: cabine,
        relacaoDiferencial: relacaoDiferencial,
        tipo_suspensao: tipo_suspensao,
        entreEixos: entreEixos,
        capMaxCombustivel: capMaxCombustivel,
        valor: valor,
        infoOpicionais: infoOpicionais,
        infoAdicionais: infoAdicionais,
        imagem: imagem
    })
        .then(() => {
            return res.status(200).json({ placaVeiculo, ...veiculo })
        })
        .catch((err) => {
            console.error(err.message);
            return res.status(500).json({ error: "Erro ao atualizar o veículo." })
        })
})

//METODO DELETE
Router.delete('/veiculo/:id', async (req, res) => {
    const placa: string = req.params.id;
    db("veiculos").where({ placa }).del()
        .then(() => {
            res.status(200).json({ message: `Veiculo com a placa ${placa} deletado com sucesso.` })
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Erro ao deletar o veículo." })
        })
})
export default Router;

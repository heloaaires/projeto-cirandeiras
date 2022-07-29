const RitmosModel = require('../models/ritmosModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const create = async (req, res) => {
    try {

        const authHeader = req.get("authorization")
    
        if (!authHeader) {
          return res.status(401).send("Você não tem autorização.")
        }
    
        const token = authHeader.split(" ")[1];
    
        await jwt.verify(token, SECRET, async function (err) {
          if (err) {
            return res.status(403).send("Acesso negado.")
          }
        })

        const { nome, origem, regiao, surgimento, instrumentos, brincadeira, descricao } = req.body

        const newRitmo = new RitmosModel({
            nome, origem, regiao, surgimento, instrumentos, brincadeira, descricao
        })

        const savedRitmo = await newRitmo.save()
        res.status(201).json(savedRitmo);

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getAll = async (req, res) => {
    try {

    const { origem, regiao } = req.query
    const filter = {}

    if (origem) filter.origem = origem

    const allRitmos = await RitmosModel.find(filter)

    if (regiao) {

        const ritmosRegiao = await RitmosModel.find(filter)
        return res.status(200).json(ritmosRegiao)

    }

    res.status(200).json(allRitmos)

    } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
    }
}

const updateById = async (req, res) => {
    try {
        const authHeader = req.get("authorization")
    
        if (!authHeader) {
          return res.status(401).send("Você não tem autorização.")
        }
    
        const token = authHeader.split(" ")[1];
    
        await jwt.verify(token, SECRET, async function (err) {
          if (err) {
            return res.status(403).send("Acesso negado.")
          }
        })
    
    const { nome, origem, regiao, surgimento, instrumentos, brincadeira, descricao } = req.body
    const { id } = req.params

    const findId = await RitmosModel.findById(id)

        if(findId == null) {
            return res.status(404).send('Esse ID não existe.')

        }

    await RitmosModel.findByIdAndUpdate(req.params.id, {
        nome,
        origem,
        regiao,
        surgimento,
        instrumentos,
        brincadeira,
        descricao,
        })

        const ritmoUpdated = await RitmosModel.findById(req.params.id)
        res.status(200).json(ritmoUpdated);
                
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
      }
    }

    const deleteById = async (req, res) => {
        try {

        const authHeader = req.get("authorization")
    
        if (!authHeader) {
          return res.status(401).send("Você não tem autorização.")
        }
    
        const token = authHeader.split(" ")[1]
    
        await jwt.verify(token, SECRET, async function (err) {
          if (err) {
            return res.status(403).send("Acesso negado.")
          }
        });

        const findRitmo = await RitmosModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'O ritmo foi deletado.' })

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: error.message })

        }
    }

    module.exports = {
        create,
        getAll,
        updateById,
        deleteById
    }
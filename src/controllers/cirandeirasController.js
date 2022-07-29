const CirandeirasModel = require('../models/cirandeirasModel')
const RitmosModel = require('../models/ritmosModel')

const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');

const create = async (req, res) => {
    try {
        const authHeader = req.get("authorization");
    
        if (!authHeader) {
          return res.status(401).send("Você não tem autorização.");
        }
    
        const token = authHeader.split(" ")[1];
    
        await jwt.verify(token, SECRET, async function (err) {
          if (err) {
            return res.status(403).send("Acesso negado.");
          }
        });

        const { ritmo, nome, idade, estado, trajetoria, lutaColetiva, episodio } = req.body

        if (!ritmo) {
            return res.status(400).json({ message: 'É obrigatório o ID do ritmo.' })
        }

        const findRitmo = await RitmosModel.find({ _id: ritmo }).find()
        if (!findRitmo) {
            return res.status(404).json({ message: 'Ritmo não encontrado.' })
        }

        const newCirandeira = new CirandeirasModel(
            { nome, idade, estado, ritmo, trajetoria, lutaColetiva, episodio}
            );


        const savedCirandeira = await newCirandeira.save()
        res.status(201).json(savedCirandeira)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getAll = async (req, res) => {

    try {

        const { ritmo, estado } = req.query
        const filter = {}

        if (estado) filter.estado = estado

        const allCirandeiras = await CirandeirasModel.find(filter).populate('ritmo')

        if (ritmo) {
            const cirandeirasFiltradasPorRitmo = allCirandeiras.filter(cirandeira => {
                return cirandeira.ritmo.nome.includes(ritmo)

            })

            return res.status(200).json(cirandeirasFiltradasPorRitmo)

        }

        res.status(200).json(allCirandeiras)


    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getById = async (req, res) => {
    try {
        const cirandeiraById = await CirandeirasModel.findById(req.params.id)
        res.status(200).json(cirandeiraById)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateById = async (req, res) => {
    try {
        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('Você não tem autorização.')
        }

        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function (err) {

            if (err) {
                return res.status(403).send('Accesso negado.')
            }
        });

        const { ritmo, nome, idade, estado, trajetoria, lutaColetiva, episodio } = req.body
        const { id } = req.params

        const findId = await CirandeirasModel.findById(id)

        if(findId == null) {
            return res.status(404).send('Esse ID não existe.')

        }

        await CirandeirasModel.findByIdAndUpdate(req.params.id, {
            ritmo,
            nome,
            idade,
            estado,
            trajetoria,
            lutaColetiva,
            episodio
        });

        const cirandeiraUpdated = await CirandeirasModel.findById(req.params.id)
              res.status(200).json(cirandeiraUpdated);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

const deleteById = async (req, res) => {
    try {
        const authHeader = req.get('authorization');
        if (!authHeader) {
            return res.status(401).send('Você não tem autorização.');
        }

        const token = authHeader.split(' ')[1];

        await jwt.verify(token, SECRET, async function (erro) {

            if (erro) {
                return res.status(403).send('Accesso negado.');
            }
        });

        const { id } = req.params;
        const findId = await CirandeirasModel.findById(id);

        if (findId == null) {
            return res.status(404).send('Esse ID não existe.');
        }

        await findId.remove();

        res.status(200).send('Cirandeira deletada.');

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}
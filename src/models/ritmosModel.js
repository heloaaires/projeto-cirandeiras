const mongoose = require('mongoose')


const ritmosSchema = mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    nome: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    origem: {
        type: [String],
        default: "Não informada.",
        lowercase: true
    },

    regiao: {
        type: String,
        required: true,
        lowercase: true
    },

    surgimento: {
        type: String,
        default: "Não informado."
    }, 

    instrumentos: {
        type: [String],
        required: true,
        lowercase: true
    },

    brincadeira: {
        type: String,
        required: true,
        
    },

    descricao: {
        type: String,
        required: true

    }

}, { timestamps: true})

const Model = mongoose.model('ritmos', ritmosSchema)
module.exports = Model

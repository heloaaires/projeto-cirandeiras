const mongoose = require('mongoose')

const cirandeirasSchema = mongoose.Schema({

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

    idade: {
        type: Number
    },

    estado: {
        type: String,
        required: true,
        lowercase: true
    },

    ritmo:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'ritmos'
    },

    trajetoria: {
    type: String,
    
    },

    lutaColetiva:{
        type: String
    },

    episodio: {
        type: String,
    },

}, { timestamps: true })

const Model = mongoose.model('cirandeiras', cirandeirasSchema)
module.exports = Model

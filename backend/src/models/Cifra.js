const { Schema, model } = require('mongoose');

const CifraSchema = new Schema({
    numero: {
        type: String,
        required: true
    },
    tom: {
        type: String,
        required: true
    },
    letra: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Cifra', CifraSchema);
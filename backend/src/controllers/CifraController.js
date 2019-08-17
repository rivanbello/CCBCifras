const Cifra = require('../models/Cifra');

module.exports = {
    async index(req, res) {
        const { id } = req.headers;
        var cifra = '';

        if(id) {
            cifra = await Cifra.findById(id);
        } else {
            cifra = await Cifra.find({});
        }

        return res.json(cifra);
    },

    async store(req, res) {
        const { numero, tom, letra } = req.body;  

        console.log(numero);
        console.log(tom);
        console.log(letra);
        const cifra = await Cifra.create({
            numero,
            tom,
            letra
        });

        return res.json(cifra);
    }
}
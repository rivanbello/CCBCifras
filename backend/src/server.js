const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const routes = require('./routes');

const app = express();

//Banco de dados
mongoose.connect('mongodb+srv://tindev:tindev@cluster0-cjbfi.mongodb.net/tindev?retryWrites=true&w=majority', { 
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
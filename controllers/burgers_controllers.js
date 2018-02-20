const express = require('express');
const burger = require('../models/burger.js');
const app = express();
// const router = express.Router();

app.get('/', (req, res) => {
    burger.getAll((burgersData) => {
        console.log(burgersData);
        res.render('index', {
            burgersData
        });
    });
});

app.post('/', (req, res) => {
    burger.create(req.body.burgerName, () => {
        res.redirect('/');
    });
});

app.delete('', (req, res) => {

});

module.exports = app;
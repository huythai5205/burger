const express = require('express');
const burger = require('../models/burger.js');
// const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    burger.getAll((burgersData) => {
        console.log(burgersData);
        res.render('index', {
            burgersData
        });
    });
});

router.post('/create', (req, res) => {
    burger.create(req.body.burgerName, () => {
        res.redirect('/');
    });
});

router.put('/update', (req, res) => {
    console.log(req.body);
    burger.update(req.body.burgerId, () => {
        res.redirect('/');
    })
});

module.exports = router;
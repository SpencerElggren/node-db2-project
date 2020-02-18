const express = require('express');
const router = express.Router();

router.get('/' , (req, res) => {
    db('cars')
        .then(cars => res.status(500).json(cars))
})

router.get('/:id', (req,res) => {
    const id = req.params;
    db('cars')
        .where({id})
        .first()
        .then(cars => res.status(500).json(cars))
});

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars')
        .insert(carData)
        .then(r => res.status(201).json(r))
});

module.exports = router;
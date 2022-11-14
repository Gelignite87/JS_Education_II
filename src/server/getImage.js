const express = require('express');
const images = express.Router();
const fs = require('fs');

images.get('/:id', (req, res) => {
    fs.readFile(`./src/files/images/${req.params.id}`, (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.statusCode = 200;
            res.send(data);
        }
    });
});

module.exports = images;
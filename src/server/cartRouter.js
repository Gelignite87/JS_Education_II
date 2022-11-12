const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    fs.readFile('./src/files/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});
router.post('/', (req, res) => {
    fs.readFile('./src/files/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            const userCart = JSON.parse(data);
            const add = (userCart, req) => {
                userCart.contents.push(req.body);
                return JSON.stringify(userCart, null, 4);
            };
            fs.writeFile('./src/files/db/userCart.json', add(userCart, req), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            })
        }
    });
});
router.put('/:id', (req, res) => {
    fs.readFile('./src/files/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            const userCart = JSON.parse(data);
            const change = (userCart, req) => {
                this.find = userCart.contents.find(el => el.id_product === +req.params.id);
                this.find.quantity += req.body.quantity;
                return JSON.stringify(userCart, null, 4);
            };
            fs.writeFile('./src/files/db/userCart.json', change(userCart, req), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send(`{"result": 1, "quantity": ${this.find.quantity}}`);
                }
            })
        };
    })
});
router.delete('/:id', (req, res) => {
    fs.readFile('./src/files/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            const userCart = JSON.parse(data);
            const del = (userCart, req) => {
                let cartItem = userCart.contents.find(data => data.id_product === req.body.id_product);
                userCart.contents.splice(userCart.contents.indexOf(cartItem), 1);
                return JSON.stringify(userCart, null, 4);
            };
            fs.writeFile('./src/files/db/userCart.json', del(userCart, req), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            })
        }
    });
});

module.exports = router;

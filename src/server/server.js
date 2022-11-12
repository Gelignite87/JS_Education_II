const express = require('express');
const app = express();
const fs = require('fs');
const router = require('./cartRouter');
const images = require('./getImage');

app.use(express.json());
app.use('/', express.static('./dist/'));
app.use('/api/cart', router);
app.use('/images', images);

app.get('/api/products', (req, res) => {
  fs.readFile('./src/server/db/products.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

const moment = require('moment');
lastData = () => console.log(`Время на сервере: ${moment().format('dddd DD.MM.YY H:mm')} port ${port}`);
setInterval(lastData, 300000);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
  lastData();
});

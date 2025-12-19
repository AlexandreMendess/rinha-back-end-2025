var express = require('express');
let port = 3000;
var app = module.exports = express();

const paymentsRoutes = require('./routes/payments-route');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello this initial route for application');
})

app.use(paymentsRoutes);

app.listen(port);
console.log(`Listening application in ${port}`);
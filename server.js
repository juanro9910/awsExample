
const express = require('express');

const app = express();

app.get('/', (req,res) => res.send('<h1>Cloud Computing desde Nodejs para el previo de la profesora LUZ KARIME</h1>'))


app.listen(8080);
console.log('server on port 8080');
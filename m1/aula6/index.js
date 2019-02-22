const express = require('express');
const app = express();

app.get('/teste', (req, res) => {
  res.send('Hello Alternative');
});

app.use('/user', (req, res, next) => {
  console.log('Acessou');
  next();
});

app.get('/user', (req, res) => {
  res.send('Usuário: Felipe');
});

app.get('/user/nome', (req, res) => {
  res.send('Usuário: Felipe Silva');
});

app.listen(3002);
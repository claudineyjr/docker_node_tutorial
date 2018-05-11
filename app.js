var app = require('express')();
var port = process.env.port || 3000;

app.listen(process.env.port || 3000, (req, res) => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (req, res) => {
  res.send(process.env);
});
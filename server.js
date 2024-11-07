const express = require('express');
const app = express(); 

const PORT = process.env.PORT || 3000; 

// Serve arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

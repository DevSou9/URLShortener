const express = require('express');
const app = express();
const { shortenURL } = require('./controllers/saveURLs');
const { redirectToOriginalURL } = require('./controllers/getURLs');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')
// Rota para encurtar URL
// Exemplo: http://localhost:3000/shorten?url=https://example.com
app.get('/shorten', shortenURL);

// Rota para redirecionar para a URL original
// Exemplo: http://localhost:3000/redirect/?shortUrl=https://dev.com/5zmKq
app.get('/redirect', redirectToOriginalURL);

app.get('/', (req, res) =>{
  res.render('index.pug')
})




// Iniciando o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Importa o Express
import express from 'express';

// Cria aplicação
const app = express();
// Define a porta
const PORT = 3000;

// Cria uma rota GET
app.get('/', (req, res) => {
    res.json({ message: 'Task Manager API'});
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
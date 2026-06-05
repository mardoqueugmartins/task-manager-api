
import express from 'express';
import { getAllTasks, createTask } from './services/task.service';

// Cria aplicação
const app = express();
// Define a porta
const PORT = 3000;

// Cria uma rota GET
app.get('/', (req, res) => {
    res.json({ message: 'Task Manager API'});
});

app.get('/tasks', (req, res) => {
    const tasks = getAllTasks();
    res.json(tasks);
})

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
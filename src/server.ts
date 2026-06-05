
import express from 'express';
import { getAllTasks, createTask } from './services/task.service';
import { title } from 'node:process';

// Cria aplicação
const app = express();
app.use(express.json());
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

app.post('/tasks', (req, res) => {
    const task = createTask(
        req.body.title,
        req.body.description
    );
    res.json(task);
})

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
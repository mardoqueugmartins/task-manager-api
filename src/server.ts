import express from 'express';
import { getAllTasks, createTask, getTaskById, updateTask } from './services/task.service';
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

app.get('/tasks/:id', (req, res) => {

    const id = Number(req.params.id);
    const task = getTaskById(id);
    if (!task) {
        return res.status(404).json({
            message: 'Task not found'
        });
    }
    res.json(task);

});

app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const task = updateTask(
      id,
      req.body.title,
      req.body.description
    );

    if (!task) {
        return res.status(404).json({
            message: 'Task not found'
        });
    }

    res.json(task);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
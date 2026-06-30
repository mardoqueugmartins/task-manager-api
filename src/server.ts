import express from 'express';
import { getAllTasks, createTask, getTaskById, updateTask, deleteTask } from './services/task.service';
import cors from 'cors';

// Cria aplicação
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://task-manager.vercel.app",
    ],
  }),
);
app.use(express.json());
// Define a porta
const PORT = process.env.PORT || 3000;

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

// Pega a tarefa pelo ID
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

// Atualiza a tarefa
app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const updateData = {
        title: req.body.title,
        description: req.body.description
    };
      
    const task = updateTask(id, updateData);

    if (!task) {
        return res.status(404).json({
            message: 'Task not found'
        });
    }

    res.json(task);
});

app.patch('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    
    const updateData = {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
    };

    const task = updateTask(id, updateData);

    if (!task) {
        return res.status(404).json({
            message: 'Task not found'
        });
    }

    res.json(task);
});

// Deleta a tarefa
app.delete('/tasks/:id', (req, res) => {

    const id = Number(req.params.id);
    const task = deleteTask(id);

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
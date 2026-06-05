import type { Task } from '../models/task.model';

// Armazena as tarefas em memórias
const tasks: Task[] = [];

// Retorna todas as tarefas cadastradas
const getAllTasks = () => {
    return tasks;
};

// Cria e retorna uma nova tarefa
const createTask = (
    title: string,
    description: string
) => {
    const newTask: Task = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
};

tasks.push(newTask);
    return newTask;

};

export { getAllTasks,  createTask };





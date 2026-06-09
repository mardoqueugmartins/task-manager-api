import type { Task } from '../models/task.model';

/**
 * Armazena temporariamente as tarefas em memória.
 * Os dados serão perdidos quando o servidor for reiniciado.
 */
const tasks: Task[] = [];

/**
 * Retorna todas as tarefas cadastradas.
 *
 * @returns Lista de tarefas.
 */
const getAllTasks = () => {
    return tasks;
};

/**
 * Cria uma nova tarefa e a adiciona à lista de tarefas.
 *
 * @param title Título da tarefa.
 * @param description Descrição da tarefa.
 * @returns A tarefa criada.
 */
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

/**
 * Busca uma tarefa pelo seu ID.
 * Retorna a tarefa encontrada ou undefined caso ela não exista.
 */
const getTaskById = (id: number) => {
    return tasks.find(task => task.id === id)
}

/**
 * Atualiza uma tarefa existente.
 *
 * @param id ID da tarefa.
 * @param title Novo título.
 * @param description Nova descrição.
 * @returns A tarefa atualizada ou undefined caso não exista.
 */
const updateTask = (
    id: number,
    title: string,
    description: string
) => {
    const task = getTaskById(id);

    if (!task) {
        return undefined;
    }

    task.title = title;
    task.description = description;
    task.updatedAt = new Date();

    return task;
}

const deleteTask = (id: number) => {
    const task = getTaskById(id);

    if (!task) {
        return undefined;
    }

  const index = tasks.findIndex(
        task => task.id === id
    );

    tasks.splice(index, 1);

    return task;
}

export { getAllTasks,  createTask, getTaskById, updateTask, deleteTask };





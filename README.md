# Task Manager API

REST API for task management built with Node.js, Express and TypeScript. This project was created for learning backend development concepts such as REST APIs, TypeScript, service layers and API testing.

## Current Features

* Create tasks
* List all tasks

## Available Endpoints

### Get all tasks

GET /tasks

### Create a task

POST /tasks

Request Body:
```
{
  "title": "Study React",
  "description": "Study components for 2 hours"
}
```

## Technologies

* Node.js
* Express.js
* TypeScript

## Getting Started

```bash
git clone https://github.com/mardoqueugmartins/task-manager-api.git

cd task-manager-api

npm install

npm run dev
```

## Project Status

In Development

## Future Improvements

* Update tasks
* Delete tasks
* Database integration
* Authentication
* Automated tests

---

Developed by Mardoqueu Martins

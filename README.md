# Task Manager API

A simple RESTful Task Manager API built using Node.js and Express.

## 📦 Features

- Get all tasks
- Get a single task by ID
- Create a new task
- Update an existing task
- Delete a task

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

1. Clone the repository or download the source code:

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

Or with `nodemon` (if installed):

```bash
nodemon index.js
```

Server runs on `http://localhost:3000`

## 📚 API Endpoints

### 1. Get All Tasks

```http
GET /tasks
```

Returns a list of all tasks.

---

### 2. Get Task by ID

```http
GET /tasks/:taskid
```

Example:
```
GET /tasks/1
```

---

### 3. Create New Task

```http
POST /tasks
```

#### Request Body:

```json
{
  "title": "New Task Title",
  "description": "New Task Description"
}
```

---

### 4. Update Task

```http
PUT /tasks/:taskid
```

#### Request Body:

```json
{
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completed": true
}
```

---

### 5. Delete Task

```http
DELETE /tasks/:taskid
```

Deletes the task with the given ID.

---

## 🛠 Built With

- Node.js
- Express.js

## 🧑‍💻 Author

Shriraj Lakeshri

---

## 📄 License

This project is licensed under the MIT License.
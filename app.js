const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const tasks=[ {
      "id": 1,
      "title": "Set up environment",
      "description": "Install Node.js, npm, and git",
      "completed": true
    },
    {
      "id": 2,
      "title": "Create a new project",
      "description": "Create a new project using the Express application generator",
      "completed": true
    },
    {
      "id": 3,
      "title": "Install nodemon",
      "description": "Install nodemon as a development dependency",
      "completed": true
    },
    {
      "id": 4,
      "title": "Install Express",
      "description": "Install Express",
      "completed": false
    },
    {
      "id": 5,
      "title": "Install Mongoose",
      "description": "Install Mongoose",
      "completed": false
    },
    {
      "id": 6,
      "title": "Install Morgan",
      "description": "Install Morgan",
      "completed": false
    },
    {
      "id": 7,
      "title": "Install body-parser",
      "description": "Install body-parser",
      "completed": false
    },
    {
      "id": 8,
      "title": "Install cors",
      "description": "Install cors",
      "completed": false
    },
    {
      "id": 9,
      "title": "Install passport",
      "description": "Install passport",
      "completed": false
    },
    {
      "id": 10,
      "title": "Install passport-local",
      "description": "Install passport-local",
      "completed": false
    },
    {
      "id": 11,
      "title": "Install passport-local-mongoose",
      "description": "Install passport-local-mongoose",
      "completed": false
    },
    {
      "id": 12,
      "title": "Install express-session",
      "description": "Install express-session",
      "completed": false
    },
    {
      "id": 13,
      "title": "Install connect-mongo",
      "description": "Install connect-mongo",
      "completed": false
    },
    {
      "id": 14,
      "title": "Install dotenv",
      "description": "Install dotenv",
      "completed": false
    },
    {
      "id": 15,
      "title": "Install jsonwebtoken",
      "description": "Install jsonwebtoken",
      "completed": false
    }]
  let currentId = 1;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});




app.get('/tasks/:taskid', (req, res) => {
  const id = Number(req.params.taskid); // Convert ID to number
  const task = tasks.find(t => t.id === id); // Find task by ID

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task); // Return task
});


//========================post
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newTask = {
    id: currentId++,
    title,
    description
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});
//==========put

app.put('/tasks/:tasksid', (req, res) => {
  const id = Number(req.params.tasksid);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const { title, description ,completed } = req.body;

  if (
    typeof title !== 'string' || !title.trim() ||
    typeof description !== 'string' || !description.trim() ||
    typeof completed !== 'boolean'
  ) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

  task.title = title.trim();
  task.description = description.trim();

  res.json(task);
});



//========================delete

app.delete('/tasks/:taskid', (req, res) => {
  const id = Number(req.params.taskid);
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(index, 1);
  res.status(200).send('Task deleted');
});







//========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;
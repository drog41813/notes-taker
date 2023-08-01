const PORT = process.env.PORT || 3001;
const path = require('path');
const express = require('express');
const fs = require('fs');
const app = express();
const Notes = require('./db/db.json');



app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(Notes);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

function createNewTasks(body, taskArray) {
    const newTask = body;
    if(!Array.isArray(taskArray));
    taskArray = [];

    if (taskArray.length == 0)
    taskArray.push[0];

    body.id = notaArray[0];
    taskArray[0]++;

    taskArray.push(newTask);
    fs.writeFileSync(path.join(__dirname, './db/db.json')), JSON.stringify(taskArray, null, 2);
    return newTask;
};

app.post('/api/notes', (req, res) => {
    const newTask = createNewTasks(req.body, allNotes);
    res.json(newTask);
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
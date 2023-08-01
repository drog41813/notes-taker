const path = require('path');
const express = require('express');
const notes = require('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join)
);
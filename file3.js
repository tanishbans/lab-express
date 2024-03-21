const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const bodyParser = require('body-parser');
const jsonFile = fs.readFileSync('./data/data.json')
const data = JSON.parse(jsonFile);
app.use(bodyParser.json());

// Create a new person
app.post('/person', (req, res) => {
  const newItem = { id: req.body.id, name: req.body.name };
  data.push(newItem);
  res.status(200).json(data);
});

// Get all persons
app.get('/persons', (req, res) => {
  res.json(data);
});

// Update an person
app.put('/person/:id', (req, res) => {
  const id = req.params.id;
  const item = data.find((person) => person.id == id);
  if (!item) return res.status(404).send(`Person with id ${id} not found`);
  item.name = req.body.name;
  res.json(data);
});

// Delete an person
app.delete('/person/:id', (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((person) => person.id == id);
  if (index == -1) return res.status(404).send('Person not found');
  data.splice(index, 1);
  res.json(data)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/persons', (req, res) => {
  const filePath = "./data/data.json";
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        res.status(500).send('Error reading file');
    } else {
	// to format the json file in browser
	const json = JSON.parse(data);
        res.json(json);
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

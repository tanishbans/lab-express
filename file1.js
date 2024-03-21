const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
// HTML for displaying team name
const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Team Tanish</title>
    </head>
    <body>
        <h1>My Group Name is: Team Tanish</h1>
    </body>
    </html>
    `;
    // Setting Content type to html
    res.setHeader('Content-Type', 'text/html');
    // return the html
    res.send(html);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

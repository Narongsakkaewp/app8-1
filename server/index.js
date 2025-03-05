const express = require('express')
const app = express()
const port = 8000

app.get('/',(request, response) => {
    response.send(`
        <!doctype html>
        <html>
        <head>
            <title>Node.JS</title>
        </head>
        <body>
            <h3>Welcome to Node.js</h3>
            <b>Express.js Fast, Unopinionated, Minimalist <br> 
            Web Frame for Node.js</b>
        </body>
        </html>
    `)
    response.end()
})
app.listen(port, () => console.log('Server Listening on Port ' + port))
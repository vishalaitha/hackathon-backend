import express, { json } from 'express'

const app = new express()

app.listen(5003, () => console.log("Api running on port 5003"))

app.get('/', (req, res) => {
    res.json('My Api is running 😎');
    res.send({ "Response": "My Api is running 😎" });

})

app.get('/search', function (req, res) {
    res.header("Content-Type", 'application/json');
    const jsonData = require('./data.json');
    res.send(JSON.stringify(jsonData));
})
import express from 'express'

const app = new express()

app.listen(5001, () => console.log("Api running on port 5001"))

app.get('/', (req, res) => {
    res.json('My Api is running 😎');
    res.send({ "Response": "My Api is running 😎" });

})
const data = require('/path/to/data.json')

app.get('/search', function (req, res) {
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(data));
})
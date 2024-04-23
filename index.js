import express from 'express'

const app = new express()

app.listen(5001, () => console.log("Api running on port 5001"))

app.get('/', (req, res) => res.json('My Api is running 😎'))
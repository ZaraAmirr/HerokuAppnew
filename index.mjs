import express from 'express';

const app = express()
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('👋I am Zara Amir Welcome to my Express.js server')
})
app.get('/water', (req, res) => {
    res.send('here is your water 🌊')
})
app.get('/desert', (req, res) => {
    res.send('here is your desert 🏜️')
})

app.listen(PORT, () => {
    console.log(`Hello server is listening at http://localhost:${PORT}`)
})
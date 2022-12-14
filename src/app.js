const path = require('path');
const express = require('express');
const app = express();

const Port = process.env.PORT || 5000;

const staticPath = path.join(__dirname, '../public')

app.use(express.static(staticPath));
app.get('/', (req, res) => {
    res.send('hello form')
})

app.listen(Port, () => {
    console.log('Server running')
})
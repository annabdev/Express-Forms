const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
require('dotenv').config();

let data="TEST";
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(req.body)
    res.send(data)
})

app.post('/', (req, res) => {
    console.log('post worked')

    const body=req.body
    data.push(body)


    res.send('Your post worked')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
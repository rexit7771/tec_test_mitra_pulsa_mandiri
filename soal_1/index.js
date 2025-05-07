require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { router } = require('./routes');
const app = express()
const port = process.env.PORT;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
})

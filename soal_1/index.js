require('dotenv').config();
const express = require('express');
const { router } = require('./routes');
const app = express()
const port = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
})

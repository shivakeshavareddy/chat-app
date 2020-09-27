const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./helper/database')

const app = express()
db.connect()
const userRouter = require('./routers/userRouter')
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
app.use('/user', userRouter)

module.exports = app;

const express  = require('express');
const islandsRouter = require('../router/Islands')
const countyRouter = require('../router/County')
const connection = require('./database');
const app = express();


connection.authenticate().
then(() => console.log("database connection established"))
.catch(error => console.log(error))


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api/v1/', islandsRouter);
app.use('/api/v1/', countyRouter);


module.exports = app;
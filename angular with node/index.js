const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

var empcontroller = require('./controllers/employeecontroller.js');

var app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyparser.json());

app.use('/employees',empcontroller);


app.listen(8080, () => console.log("server is started on port 8000"));


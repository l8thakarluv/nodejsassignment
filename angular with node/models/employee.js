const mongoose = require('../db.js');

var employee = mongoose.model('employee',{
    name: String,
    position: String,
    office: String,
    salary: Number 
});

module.exports = employee;
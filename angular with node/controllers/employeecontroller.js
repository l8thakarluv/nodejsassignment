const express = require('express');
var router = express.Router();
var objid = require('mongoose').Types.ObjectId;

var employee  = require('../models/employee');

router.get('/',(req,res) => {
    employee.find((err,data) => {
        if(!err) { res.send(data); }
        else{
            console.log("error:" + JSON.stringify(err,undefined,2));
        }
    });
});

router.get("/:id",(req,res) => {
    if(!objid.isValid(req.params.id))
    return res.status(400).send(`No records with given ID: ${req.params.id}`);
    
    employee.findById(req.params.id,(err,data) => {
        if(!err) { res.send(data); }
        else{
            console.log("Error:" + JSON.stringify(err,undefined,2));
        }
    });
});

router.post('/',(req,res) => {
    var emp = new employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    debugger
    emp.save((err,data) => {
        if(!err) { res.send(data); }
        else {
            console.log("error: " + JSON.stringify(err,undefined,2));
        }
    });
});

router.put('/:id',(req,res) => {

    var emp = new employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    emp.findByIdAndUpdate(req.params.id,{$set: emp},{new : true},(err,data) => {
        if(!err) { res.send(data); }
        else{ 
            console.log("error: " + JSON.stringify(err,undefined,2));
        }
    });
});

router.delete('/:id',(req,res) => {
    employee.findByIdAndRemove(req.params.id,(err,data) => {
        if(!err) { res.send(data); }
        else {
            console.log("error: " + JSON.stringify(err,undefined,2));
        }
    })
})

module.exports = router;
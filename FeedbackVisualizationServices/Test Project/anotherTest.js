var query = require("./query.js");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
var path = require("path");
const { encode } = require("punycode");


const app = express();
app.use("/public", express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html"); 
});

// can delete /////////////
app.post("/",encoder, function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    query("SELECT * FROM Employees WHERE emp_username = ? AND emp_password = ?",[username, password], function(err,fields){
        res.redirect("/public/employeeMenu.html");
    });
})
// ///////////////////////

// app.post("/",encoder, function(req,res){
//     var username = req.body.username;
//     var password = req.body.password;
//     query("SELECT * FROM Employees WHERE emp_username = ? AND emp_password = ?",[username, password], function(errors,results,fields){
//         if (results[0].is_manager == 0){
//             res.redirect("/public/employeeMenu");
//         }
//         else if (results[0].is_manager == 1){
//             res.redirect("/public/managerMenu");
//         }
//         else {
//             res.redirect("/");
//         }
//         res.end();
//     });
// });

app.get("/public/managerMenu", function(req,res){
    res.sendFile(__dirname + "/public/managerMenu.html")
});

app.get("/public/employeeMenu", function(req,res){
    res.sendFile(__dirname + "/public/employeeMenu")
});

app.listen(4000);
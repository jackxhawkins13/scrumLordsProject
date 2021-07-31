const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const { query } = require("express");
const encoder = bodyParser.urlencoded();
var path = require("path")

const app = express();
app.use("/public", express.static("public"));


const connection = mysql.createConnection({
    host: "107.180.1.16",
    user: "summer2021group2",
    password: "group2summer2021",
    database: "summer2021group2"
});

// Connect to DB
connection.connect(function(error){
    if (error) throw error
    else console.log("Connected to the DB SUCCESSFULLY!")

});

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});
 
// Authenticate here
app.post("/",encoder, function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    connection.query("SELECT * FROM Employees WHERE emp_username = ? AND emp_password = ?",[username, password], function(errors,results,fields){
        // Redirect user to employeeMenu
        if (results[0].is_manager == 0){
            res.redirect("/public/employeeMenu");
        }
        // redirect user to maangerMenu
        else if (results[0].is_manager == 1){
            res.redirect("/public/managerMenu");
        }
        // otherwise, redirect to index.html
        else {
            res.redirect("/");
        }
        res.end();
    });
});

// When login successfull
app.get("/public/managerMenu", function(req,res){
    res.sendFile(__dirname + "/public/managerMenu.html")
});

app.get("/public/employeeMenu", function(req,res){
    res.sendFile(__dirname + "/public/employeeMenu.html")
});


// set app port
app.listen(4000);
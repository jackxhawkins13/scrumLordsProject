const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();


const app = express();
app.use("/assets", express.static("assets"));

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
    connection.query("SELECT * FROM Employees where emp_username = ? and emp_password = ?",[username, password], function(erros,results,fields){
        if (results.length > 0){
            res.redirect("/welcome");
        } else{
            res.redirect("/");
        }
        res.end();
    })
});

// When login successfull
app.get("/welcome", function(req,res){
    res.sendFile(__dirname + "/welcome.html")
});


// set app port
app.listen(4000);
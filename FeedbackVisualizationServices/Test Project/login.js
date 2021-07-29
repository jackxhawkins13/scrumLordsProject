const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const { query } = require("express");
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

// // ///////////////////////////////////////////
// function processResult(err, result){
//     if (err){
//         console.log(err);
//         throw(err);
//     }

//     result.every(chec)
// }
// //////////////////////////////////////////////

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
            res.redirect("/employeeMenu");
        }
        // redirect user to maangerMenu
        else if (results[0].is_manager == 1){
            res.redirect("/managerMenu");
        }
        // otherwise, redirect to index.html
        else{
            res.redirect("/");
        }
        res.end();
    });
});

// When login successfull
app.get("/managerMenu", function(req,res){
    res.sendFile(__dirname + "/managerMenu.html")
});

app.get("/employeeMenu", function(req,res){
    res.sendFile(__dirname + "/employeeMenu.html")
});


// set app port
app.listen(4000);
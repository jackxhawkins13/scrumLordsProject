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
        if (err) throw err
        // Redirect user to employeeMenu
        if (results[0].is_manager == 0){
            res.redirect("/employeeMenu");
        }
        // redirect user to maangerMenu
        else if (results[0].is_manager == 1){
            res.redirect("/managerMenu");
        }
        // otherwise, redirect to index.html
        else {
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



//added card
app.get("/managerMenu", function(req,res){
    let title = req.body.title
    let description = req.body.description
    
    connection.query(`Insert into Cards (card_title, card_description) values (?, ?);`,[title, description], function(errors,results,fields){
        if (err) {
            console.log(err);
        }else {
            console.log(`added ${title} and ${description} to the database.`)
        }
    })


}





// from script.js
// function addCards(form){
//     if (!form.checkValidity()) {
//         alter("See highlighted input boxes, there are input errors");
//     } else {
//         cardTitle = getValue("titleID");
//         cardDescription = getValue("descriptionID");
//         var newCard = new Card();
//         newCard.add();
//         newCard.cardId = Card.sum;
//         newCard.title = cardTitle;
//         newCard.description = cardDescription;
//         newCard.status = "Request";
//         newCard.rating = "0%";
//         // **********need to correct later: get account information
//         newCard.author = "author";
//         console.log("id: "+ newCard.cardId+ "\ntitle: "+newCard.title+"\ndescription: " + newCard.description+ "\nstatus: "+ newCard.status+"\nratings: "+newCard.rating+"\nauthor: "+newCard.author);
//     }
// }
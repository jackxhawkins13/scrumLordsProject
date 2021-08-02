const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const { query } = require("express");
const encoder = bodyParser.urlencoded();
var path = require("path")

const app = express();
app.use("/public", express.static("public"));

//data base  info.
let db_config = {
    host: "107.180.1.16",
    user: "summer2021group2",
    password: "group2summer2021",
    database: "summer2021group2"
};


//database  connection
let connection;
function handleDisconnect() {
    connection = mysql.createConnection(db_config);



    // Connect to DB Error handling
    //solution found: https://stackoverflow.com/questions/20210522/nodejs-mysql-error-connection-lost-the-server-closed-the-connection

    connection.connect(function (err) {              // The server is either down
        if (err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            console.log('reconnecting');
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }
        else console.log("Connected to the DB SUCCESSFULLY!") // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
    // If you're also serving http, display a 503 error.

    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            console.log('reconnecting');
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}
handleDisconnect();






app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// Authenticate here
app.post("/", encoder, function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    connection.query("SELECT * FROM Employees WHERE emp_username = ? AND emp_password = ?", [username, password], function (errors, results, fields) {
      // Check if results > 0
    if (results.length > 0){        
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
        res.end;
    } //If not > 0, refresh page
    else{
        res.redirect("/");
    }
        res.end();
    });
});

// When login successfull
app.get("/managerMenu", function (req, res) {
    res.sendFile(__dirname + "/managerMenu.html")
});

app.get("/employeeMenu", function (req, res) {
    res.sendFile(__dirname + "/employeeMenu.html")
});
//added card
app.get("/managerMenu", function (req, res) {
    let title = req.body.title
    let description = req.body.description

    connection.query(`Insert into Cards (card_title, card_description) values (?, ?);`, [title, description], function (errors, results, fields) {
        if (err) {
            console.log(err);
        } else {
            console.log(`added ${title} and ${description} to the database.`)
        }
    })


});


// set app port
app.listen(4000);








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
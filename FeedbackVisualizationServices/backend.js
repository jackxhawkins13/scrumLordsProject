const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const { query } = require("express");
const encoder = bodyParser.urlencoded();
var path = require("path")
var fs = require('fs');



class Card {
    static sum = 0;
    constructor(cardId, title, description, status, rating, author) {
        this.cardId = cardId;
        this.title = title;
        this.description = description;
        this.status = status;
        this.rating = rating;
        this.author = author;
    }
    add() {
        Card.sum++;
    }
}





//static files
const app = express();
app.use("/public", express.static("public"));

//set view
app.set('views', './views')
app.set('view engine', 'ejs')

// app.set("manage")



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
        if (results.length > 0) {
            if (results[0]["is_manager"] == 0) {
                res.redirect("/public/employeeMenu.html");
                console.log("login successful")
            }
            // redirect user to maangerMenu
            else if (results[0]["is_manager"] == 1) {
                res.redirect("/public/managerMenu.html");
                console.log("login successful")

            }
            // otherwise, redirect to index.html
            else {
                res.redirect("/");
            }
            res.end;
        } //If not > 0, refresh page
        else {
            res.redirect("/");
        }
        res.end();
    });
});

// // When login successful NOT LONGER USEFUL
// app.get("/managerMenu", function (req, res) {
//     res.sendFile(__dirname + "/managerMenu.html")
// });

// app.get("/employeeMenu", function (req, res) {
//     res.sendFile(__dirname + "/employeeMenu.html")
// });
//added card
app.post("/public/addCard", encoder, function (req, res) {
    console.log(req.body);
    let title = req.body.title;
    let description = req.body.description;

    console.log("adding new cards");
    connection.query(`Insert into Cards (card_title, card_description, card_status, card_rating) values (?, ?, "Requested", 0);`, [title, description], function (errors, results, fields) {
        if (errors) {
            console.log(errors);
        } else {
            console.log(`added ${title} and ${description} to the database.`)
        }
    })
    console.log("added new cards");
    res.redirect("/public/addCard.html")
    res.end();

});


/////////////////////////////////////////////view and rate cards EMPLOYEES//////////////////////////////////
app.get("/view", function (req, res) {
    let viewCardJSON;
    console.log("viewing card");
    connection.query("SELECT * FROM Cards", function (errors, results, fields) {


        if (results.length > 0) {
            console.log("results are good")
            viewCardJSON = results;
            console.log(viewCardJSON);


        } else {
            console.log("BAD")
        }//end if else
    })//end query


    //let car = { jj: "sadasd" };

    function sendBackquery() {
        console.log('running sendBackquery')
        let outcome = viewCardJSON;
        res.render('viewCards_Employees.ejs', { output: viewCardJSON })
        res.end();
    }


    //to handle 
    setTimeout(sendBackquery, 500)

})

//random number function
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let rndInt;

///////rate cards up
app.post('/submitRatingForm', encoder, function (req, res) {
    console.log(req.body);
    rndInt = randomIntFromInterval(1, 6);
    console.log(rndInt);
    rndInt = rndInt * 0.01 + 1;
    let queryID = parseInt(req.body.rating);
    if (queryID > 0) {
        connection.query(`UPDATE Cards SET card_rating = card_rating * ? where card_id = ?`, [rndInt, queryID], function (errors, results, fields) {
            if (errors) {
                console.log(errors);
            } else {
                console.log(`UPDATED to the database.`);
                res.redirect("/view");
            }
    
    
    
            res.end();
        })
    }//end if


})
/////////////////////////Approve/Deny cards MANAGERS ////////////////////////////////////////////////////////////////////

app.get("/manage", function (req, res) {
    let viewCardJSON;
    console.log("Managing Cards");
    connection.query("SELECT * FROM Cards", function (errors, results, fields) {


        if (results.length > 0) {
            console.log("results are good")
            viewCardJSON = results;
            console.log(viewCardJSON);


        } else {
            console.log("BAD")
        }//end if else
    })//end query


    //let car = { jj: "sadasd" };

    function sendBackquery() {
        console.log('running sendBackquery')
        let outcome = viewCardJSON;
        res.render('manageCards.ejs', { output: viewCardJSON })
        res.end();
    }


    //to handle 
    setTimeout(sendBackquery, 500)

})

// //////Approve Cards
app.post('/subManageForm', encoder, function (req, res) {
    console.log(req.body);
    // rndInt = randomIntFromInterval(1, 6);
    // console.log(rndInt);
    // rndInt = rndInt * 0.01 + 1;
    var appr = "Accepted"
    let queryID = parseInt(req.body.rating);
    if (queryID > 0) {
        connection.query(`UPDATE Cards SET card_status = ? where card_id = ?`, [appr, queryID], function (errors, results, fields) {
            if (errors) {
                console.log(errors);
            } else {
                console.log(`UPDATED to the database.`);
                res.redirect("/manage");
            }
    
    
    
            res.end();
        })
    }//end if


})





// set app port
app.listen(4000);
const mysql = require("mysql");
var entries;
var fs = require("fs");


// Create connection
const connection = mysql.createConnection({
    host: "107.180.1.16",
    user: "summer2021group2",
    password: "group2summer2021",
    database: "summer2021group2"
});

connection.connect(function(error){
    if (error) throw error
    else console.log("connected to DB Correctly")
})

connection.query("SELECT card_title, card_description FROM Cards WHERE card_id IS NOT NULL", function(errors, results, fields){
    if (results.length > 0){
        console.log("Results are good");
        const entries = Object.entries(results);
        // console.log(entries);
        fs.writeFile("cards.json", JSON.stringify(entries), function(err){
            console.log("complete");
        })

    } else{
        console.log("BAD")
    }
})

// console.log("__________________________________________________________________");
// console.log(entries);
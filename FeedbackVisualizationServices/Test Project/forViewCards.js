const mysql = require("mysql");
var cardss = []

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
        console.log(results[1]);

    } else{
        console.log("BAD")
    }
})

var table;
function init(){
    table = document.getElementById("cardTable");
    connect();
}


function connect(){
    connection.query("SELECT * FROM Cards WHERE card_id IS NOT NULL", showCard)
}

function showCard(results) {
    if (results.length >0 ){
        console.log("results are good")
    } else {
        console.log("BAD")
    }
    // divided result into each card
    // forEach is a simple "for" loop
    result.forEach(displayCard);
}

function displayCard(record) {
    // a record represented as a card
    // insert a new row for this card
    newRow = table.insertRow(i)
    // insert cells in this newRow
    cell0 = newRow.insertCell(0);
    cell1 = newRow.insertCell(1);
    cell2 = newRow.insertCell(2);
    // assign value to cells
    cell0.innerHTML = `<input type="radio" value=${record.card_id} name="radio">`
    cell1.innerHTML = `Title: ${record.card_title} `;
    cell2.innerHTML = `Description: ${record.card_description}`;
        
}
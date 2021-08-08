class Card {
    constructor(title, description, status, rating){
        this.title = title;
        this.description = description;
        this.status = status;
        this.rating = rating;
    }
}
// when we merge this script with script.js above class should replace old class
// store cards into this array
const cards = [];

// we should connect to server here


var table;

// The purpose of this fucntion is to run on load and crate a table that will insert our 
// card data
// insert for cell for rate card button is the only thing missing for this function
function init(){
    table = document.getElementById("cardTable");
    // we should grab all cards from server and add to array here
    // for (var i = 0; i < data.length; i++){
            // we are convert data from database to class and add them to cards array
            // cards.push(i)
    //}
    // showcard() to list all exist card
     th = table.insertRow(0);
    th1 = th.insertCell(0);
    th2 = th.insertCell(1);
    th1.innerHTML = "Title";
    th2.innerHTML = "Description";
    // pull out all card from cards arrays
    for (var i = 0; i < cards.length; i++){
        // insert a new row after header
        var newRow = table.insertRow(i+1)
        // insert cells in this newRow
        cell0 = newRow.insertCell(0);
        cell1 = newRow.insertCell(1);
        // assign value to celss
        cell0.innerHTML = cards[i].title;
        cell1.innerHTML = cards[i].description;
    }
}


function getValue(id) {
	return String(document.getElementById(id).value);
}



function addCard() {
    // after grabbing all information from input
    // assign to Card class
    var newCard = new Card();
    cardTitle = getValue("titleId");
    cardDescription = getValue("descriptionId");
    newCard.title = cardTitle;
    newCard.description = cardDescription;
    newCard.status = "Request" //or pending;
    newCard.rating = "N/A";
    cards.push(newCard);

    // update table
    refreshTable(table);
    showCard();
}

// update table:
    // delete all rows
    // then call showCard()
function refreshTable(table) {
    if (table == null){
    
    } else{
        for (var i = table.rows.length; i > 0; i--) {
            table.deleteRow(i-1);
        }
        
    }
    
}
class Card {
    static sum=0;
    constructor(cardId, title, description, status, rating, author){
        this.cardId = cardId;
        this.title = title;
        this.description = description;
        this.status = status;
        this.rating = rating;
        this.author = author;
    }
    add(){
        Card.sum++;
    }
}

class Employee {
    constructor(employeeId, password){
        this.employeeId = employeeId;
        this.password = password;
    }

}

class Manager extends Employee {
    constructor(employeeId, password){
        super(employeeId, password);
    }
}

// variables
var cardId = "";
var cardTitle = "";
var cardDescription = "";

var cardsTable;

function EMinitialize() {
    cardsTable=document.getElementById("cardsTable");
}

// onclick of "view card", forwards user to viewCards.html
function forwardToCards(){
    location.href = "viewCards.html"
}

function forwardToAddCards () {
    location.href = "addCard.html"
}

// get value by id
function getValue(id) {
	return String(document.getElementById(id).value);
}

// add cards
function addCards(form){
    if (!form.checkValidity()) {
        alter("See highlighted input boxes, there are input errors");
    } else {
        cardTitle = getValue("titleID");
        cardDescription = getValue("descriptionID");
        var newCard = new Card();
        newCard.add();
        newCard.cardId = Card.sum;
        newCard.title = cardTitle;
        newCard.description = cardDescription;
        newCard.status = "Request";
        newCard.rating = "0%";
        // **********need to correct later: get account information
        newCard.author = "author";
        console.log("id: "+ newCard.cardId+ "\ntitle: "+newCard.title+"\ndescription: " + newCard.description+ "\nstatus: "+ newCard.status+"\nratings: "+newCard.rating+"\nauthor: "+newCard.author);
    }
}

function backToMenu() {
    let confirmation = confirm("Unsaved change will be lost! Are you sure back to menu?");
    if (confirmation == true) {
        location.href = "employeeMenu.html"
    }
}

function rateCards() {
    btns = document.querySelectorAll('input[name="radio"]');
    let selection;
    for (const btn of btns){
        if (btn.checked) {
            selection = btn.value;
            break;
        }
    }
    if (selection==null){
        alert("You haven't select a card to rate! Please try again!")
    }
    else{
        let ratings = prompt("Please rate selected card! (Enter 0-100)");
        if (ratings >= 0 && ratings <= 100){
            console.log(ratings);
        } 
        else {
            alert("Entry Invalid! Please try again!");
        }

    }

}
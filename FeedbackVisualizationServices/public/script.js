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

class Employee {
    constructor(employeeId, password) {
        this.employeeId = employeeId;
        this.password = password;
    }

}

class Manager extends Employee {
    constructor(employeeId, password) {
        super(employeeId, password);
    }
}

// variables
var cardId = "";
var cardTitle = "";
var cardDescription = "";

// variables for rating system
var cardYesVotes = 0;
var cardNoVotes = 0;
var cardTotalVotes = 0;
var cardRating = 0;
var votedYes = false;
var votedNo = false;

var cardsTable;

function init() {
}

function EMinitialize() {
    cardsTable = document.getElementById("cardsTable");
}

function login() {
    if (err) throw err;
}

function forwardToAddCards() {
    location.href = "addCard.html";
}

function forwardToEmployeeMenu(){
    location.href = "employeeMenu.html"
}

function forwardToViewCards(){
    location.href = "viewCards_Employees.html"
}

function forwardToLogin(){
    location.href = "http://localhost:4000/"
}

// get value by id
function getValue(id) {
    return String(document.getElementById(id).value);
}

// add cards
function addCards(form) {
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
        console.log("id: " + newCard.cardId + "\ntitle: " + newCard.title + "\ndescription: " + newCard.description + "\nstatus: " + newCard.status + "\nratings: " + newCard.rating + "\nauthor: " + newCard.author);
    }
}

function backToMenu() {
    let confirmation = confirm("Unsaved change will be lost! Are you sure back to menu?");
    if (confirmation == true) {
        // redirect back to menu

    }
}

//VOTING FUNCTIONS AND BUTTONS CREATED BELOW

/* Rate Cards Function: User selects a card to rate, then clicks "Rate Cards" button.
    * When button is clicked, UI shows "Yes" and "No" buttons for the user, based on their preference.
    * Voting functions described below.
*/

function rateCards() {
    btns = document.querySelectorAll('input[name="radio"]');
    let selection;
    for (const btn of btns) {
        if (btn.checked) {
            selection = btn.value;
            break;
        }
    }
    if (selection == null) {
        alert("You haven't select a card to rate! Please try again!")
    }
    else {
        document.getElementById("upVote").style.visibility = "visible";
        document.getElementById("downVote").style.visibility = "visible";
    }
}

/* Voting Functions: User clicks on either "Yes" or "No" to vote if they approve of the card or not.
    * The buttons are invisible until the user chooses to vote. Once they have clicked "Rate Cards" the buttons will appear.
    * User will be allowed to vote once and then the buttons go away.
    * Buttons will keep track of whether the vote was for "Yes" or "No" as well as a total amount of votes cast.
    * The approval rating is based on the number of "Yes" votes divided by the total number of votes.
    * Once a user has voted, they will not be able to vote the same way again. A user may change their votes, but may not repeat the same vote. 
*/

/* TODO (Essential): 
    * Update DOM so that the "Rating" column on the card table reflects the actual value, not the hardcoded value.
    * Query statements so the rating value is inserted into the Database
*/

function voteYes() {
    if (votedYes == false) {
        if (confirm("You are about to vote 'Yes' on this card?")) {
            cardYesVotes += 1;
            cardTotalVotes += 1;
            document.getElementById("upVote").style.visibility = "hidden";
            document.getElementById("downVote").style.visibility = "hidden";
            cardRating = (cardYesVotes / cardTotalVotes) * 100;
            console.log(cardYesVotes, cardNoVotes, cardTotalVotes, cardRating)
            votedYes = true
            votedNo = false
        }
    } else {
        alert("You have already voted Yes on this card! You can change your vote to No, but not repeatedly vote Yes.")
    }
    //Add DOM statement here that will change the Ratings column in the table.
    //This statement is just an example, but we will need a universal one to work on ALL cards that are added.
    
    getValue("titleId").rating.innerHTML = cardRating.toFixed(0) + "%";

    // document.getElementById("microwave").innerHTML = cardRating.toFixed(0) + "%";
    Card.rating = cardRating.toFixed(0) 
}

function voteNo() {
    if (votedNo == false) {
        if (confirm("You are about to vote 'No' on this card?")) {
            cardNoVotes += 1;
            cardTotalVotes += 1;
            document.getElementById("downVote").style.visibility = "hidden";
            document.getElementById("upVote").style.visibility = "hidden";
            cardRating = (cardYesVotes / cardTotalVotes) * 100;
            console.log(cardYesVotes, cardNoVotes, cardTotalVotes, cardRating)
            votedNo = true
            votedYes = false
        }
    } else {
        alert("You have already voted No on this card! You can change your vote to Yes, but not repeatedly vote No.")
    }
    //Add DOM statement here that will change the Ratings column in the table.
    //This statement is just an example, but we will need a universal one to work on ALL cards that are added.
    
    getValue("titleId").rating.innerHTML = cardRating.toFixed(0) + "%";
    
    // document.getElementById("microwave").innerHTML = cardRating.toFixed(0) + "%";
    Card.rating = cardRating.toFixed(0) 
}


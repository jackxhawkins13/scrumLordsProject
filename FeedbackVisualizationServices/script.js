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

// onclick of "view card", forwards user to viewCards.html
function forwardToCards(){
    location.href = "viewCards.html"
}
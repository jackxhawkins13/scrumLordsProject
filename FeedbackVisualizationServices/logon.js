
let http = require("http");
let mysql = require("mysql");
let events = require("events");

const express = require("express");
const app = express();
app.use("/assets", express.static("assets"));

let inputPassword = "";
let inputUsername = "";
let httpServer = http.createServer(processRequest);

let filmSelectionIndex = 999;

let res;

let loginStatus = false;




//TODO: Brandon: I don't think we should use local host to host the server but need to confirm with team on the server setting (XIN)
httpServer.listen(8080);



// http.create server handling (testing only)
function processRequest(request, response) {
    res = response;
    response.writeHead(200, { 'Content-Type': 'text/html' });


    
    let base = "http://" + request.headers["host"];
    console.log(`Request host is ${base}`);
    let url = new URL(request.url, base);
    let params = url.searchParams;
    inputUsername = params.get("employeeID");
    inputPassword = params.get("employeePassword");



    //inputUsername = document.getElementById("employeeID").value;
    //inputPassword = document.getElementById("employeePassword").value;




    //response.write(`<p>${output}</p>`);
    initalizeDB();

}


//data base connection
function initalizeDB() {
    let connectionString = {
        host: "107.180.1.16",
        database: "summer2021group2",
        user: "summer2021group2",
        password: "group2summer2021"
    };
    

    let con = mysql.createConnection(connectionString);


    con.connect(
        function(err){
            if (err) throw err;
            console.log("connected.");
        }
    );
    console.log("Connected to database. Welcome");

    // need to change to match our code
    let sqlquery = `select emp_username, emp_password, employee_id from Employees`;
    con.query(sqlquery, processResult);
    con.end();

}

//error handling
function processResult(err, result) {
    if (err) {
        console.log(err);
        throw err;
    }

    //break when return ture
    result.every(checkLogin);

    

}


//check login in information
function checkLogin(record) {
    console.log(record);

    if (record.emp_username == inputUsername && record.emp_password == inputPassword) {
        loginStatus = false;
            console.log("login successful!");
            return false;

    } else {
        loginStatus = true;
        console.log("login unsuccessful! Please try again!");
        return true;
    }
}


// redirect here
app.get("/employeeMenu", function(req,res){
    res.sendFile(__dirname + "/employeeMenu.html")
});
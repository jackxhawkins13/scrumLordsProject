
let http = require("http");
let mysql = require("mysql");
let events = require("events");

let filmSelectionIndex = 999;

let res;

let inputUsername = "";
let inputPassword = "";
let loginStatus = false;


let httpServer = http.createServer(processRequest);


//TODO: Brandon: I don't think we should use local host to host the server but need to confirm with team on the server setting (XIN)
httpServer.listen(8080);



// http.create server handling (testing only)
function processRequest(request, response) {
    res = response;
    response.writeHead(200, { 'Content-Type': 'text/html' });

    response.write("<p>Here is the information you were looking for</p>");
    
    let base = "http://" + request.headers["host"];
    console.log(`Request host is ${base}`);
    let url = new URL(request.url, base);
    let params = url.searchParams;




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
    let sqlquery = `select emp_username, emp_password, employee_id from Employees where film_id = ${filmSelectionIndex}`;
    con.query(sqlquery, processResult);
    con.end();

}

//error handling
function processResult(err, result) {
    if (err) {
        console.log(err);
        throw err;
    }

    result.forEach(checkLogin);

    eventEmitter.emit("processingFinished");
}


//check login in information
function checkLogin(record) {
    if (record.emp_username == inputUsername) {
        if (record.emp_password == inputPassword) {
            loginStatus = true;
            alert("login successful!");
        }
    } else {
        loginStatus = false;
        alert("login unsuccessful! Please try again!");
    }
}
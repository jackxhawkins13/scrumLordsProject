var mysql = require("mysql");

var pool = mysql.createPool({
    host: "107.180.1.16",
    user: "summer2021group2",
    password: "group2summer2021",
    database: "summer2021group2",
    ssl: false,
    dateStrings: true
});

var query = function(sql,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null);
            console.log("DISCONNECTED TO DB - BAD");
        }else{
            conn.query(sql,function(err,results){
                callback(err,results);
                console.log("CONNECTED TO DB- GOOD");
            });
            conn.release();
            console.log("Connection has been released");
        };
    });
};

module.exports = query;
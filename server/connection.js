const mysql = require('mysql');
var dbconn = {};
dbconn.DB = "tsh_db";

dbconn.CreateDBSmsg = "Successfully Created database";
var ConnectDBSmsg = "Successfully Connected to database";
dbconn = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:dbconn.DB
});
dbconn.connect((err)=>{
    if(err) throw err;
    console.log(ConnectDBSmsg);
    
});
module.exports = dbconn;
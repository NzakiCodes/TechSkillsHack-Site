const dbconn = require('./connection');
const newDB = "Newdata";
var CreateDBSmsg = "Successfully Created database";

dbconn.query('CREATE DATABASE IF NOT EXISTS '+dbconn.DB, (dberr)=>{
    if(dberr) throw dberr;
   console.log(CreateDBSmsg + " : \'" + dbconn.DB + "\'");
});

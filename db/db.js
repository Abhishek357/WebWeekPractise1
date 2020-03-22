const mysql = require("mysql");

 

const mySqlConnection = mysql.createConnection({

host: "localhost",

user: "root",

password: "AdminPass@1",

database: "webweek"

});


mySqlConnection.connect(err => {

    if (err) console.log(err);
    
    console.log("Database Connected!");
    
    });
    
     
    
    module.exports = mySqlConnection;
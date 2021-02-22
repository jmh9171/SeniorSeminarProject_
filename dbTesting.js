// const mysql = require('mysql');


// let makeDBConnection = () => new Promise((resolve, reject) => {
//     console.log("In function");
//     var db = mysql.createConnection({
//         host: 'localhost',
//         user: 'jmh9171',
//         password: 'temp!9171'
//     })

//     resolve(db);
// })

// var DBresult = makeDBConnection().then(results => {
//     results.connect((err) => {
//         if (err) {
//             console.log("Error");
//         } else {
//             console.log('Connected!');
//         }
//     });
// });


const mysql = require('mysql');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'jmh9171',
//     password: 'temp!9171',
//     database: 'jmh9171'
// });

// con.connect((err) => {
//   if(err){
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });

// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all remaining queries are executed
//   // Then sends a quit packet to the MySQL server.
// });

module.exports.createConnection = require('mysql');
    const con = mysql.createConnection({
           host: 'localhost',
           user: 'jmh9171',
           password: 'temp!9171',
           database: 'jmh9171'
      });
    connection.connect((err) => {
      if (err) throw err;
      console.log('Connected!');
      return con;
    });



// const connection = new Promise((resolve, reject) => {
//   var conn = mysql.createConnection({
//     host: 'penguin',
//     user: 'jmh9171',
//     password: 'temp!9171',
//     database: 'jmh9171'
//   });
//   conn.connect((err) => {
//     if (err) reject();
//     console.log('Connected!');
//     resolve(conn);
//   });
// })
// connection.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all remaining queries are executed
//   // Then sends a quit packet to the MySQL server.
// });
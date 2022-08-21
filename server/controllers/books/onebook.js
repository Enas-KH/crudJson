const fs = require('fs');
const path = require('path');

function oneBook (req, res) {
   const fp= path.join( __dirname , "../../" , "database/library.json")
    fs.readFile( fp, 'utf8', function (err, data) {
       const Books = JSON.parse( data );
       const book = Books[req.params.id];
       /*if (!req.body.title) {
         res.status(404).send("This book id is not found");
       } else { */
       console.log( book );
       res.json(book);
    });
 }
 module.exports={oneBook};

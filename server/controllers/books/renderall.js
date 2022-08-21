const fs = require('fs');
const path = require('path');

function renderall(req, res) {
   const fp= path.join( __dirname , "../../" , "database/library.json")
   fs.readFile( fp, 'utf8', function (err, data) {
      if (!fp) {
         res.status(404).send("This book id is not found");
       } else { 
      const Books = JSON.parse( data );
      console.log( data );
      res.send(Books);
   }});
}

module.exports={renderall};
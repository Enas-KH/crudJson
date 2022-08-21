const fs = require('fs');
const path = require('path');

function deleteBook (req, res) {
const fp= path.join( __dirname , "../../" , "database/library.json")
    fs.readFile( fp, 'utf8', function (err, data) {
       const Books = JSON.parse( data );
       const book=Books.find((c)=>c.id === parseInt(req.params.id));
       if (!book) {
        res.status(404).send("This book id is not found");
      } else {
      const index=Books.indexOf(book);
      const deleted=Books.splice(index, 1);
      console.log(Books);
      fs.writeFile(fp, JSON.stringify(Books), (err) => {
        if (err) {
            throw err;

        } 
       console.log("your json is saved"); 
    });
    res.send(deleted);
    }});
 }
module.exports = {deleteBook};
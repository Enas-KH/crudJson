const fs = require('fs');
const path = require('path');

function updateBook (req, res) {
   const fp= path.join( __dirname , "../../" , "database/library.json")
    fs.readFile( fp, 'utf8', function (err, data) {
        const Books= JSON.parse( data );
        const book=Books.find((c)=>c.id === parseInt(req.params.id));
        if (!book) {
            res.status(404).send("This book id is not found");
          } else {
       let updatedData ={ 
        id: book.id ,
         title: req.body.title || book.title ,
        author:req.body.author || book.author
       } 
       const index=Books.indexOf(book);
      Books.splice(index, 1,updatedData);
       fs.writeFile( fp , JSON.stringify(Books), (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
        res.send(Books)
    });
    }});
 }
module.exports={updateBook};
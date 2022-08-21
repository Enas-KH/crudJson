const fs = require('fs');
const path = require('path');

function addBook (req, res) {
   const fp= path.join( __dirname , "../../" , "database/library.json")
    fs.readFile( fp, 'utf8', function (err, data) {
        const Books= JSON.parse( data );
        const book=Books.find((c)=>c.id === parseInt(req.params.id));
        if (!req.body.title) {
            res.status(404).send("the body is empty");
          } else {
       let newdata ={ 
        id: Books.length+1 ,
         title: req.body.title,
        author:req.body.author
       }
       Books.push(newdata); 
       fs.writeFile( fp , JSON.stringify(Books), (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
        res.send(newdata)
    });
    }});
 }
 module.exports={addBook};

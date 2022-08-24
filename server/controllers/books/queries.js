const dbConnection = require("../../database/connection");

const getData = () => {
  return dbConnection.query(`SELECT * FROM books ORDER BY id;`);
};
const ob = (id) =>{
    
    return  dbConnection.query(`SELECT * FROM Books WHERE id= ${id}`)
}
const db = (id) =>{
    return  dbConnection.query(`DELETE FROM Books WHERE id= ${id};`)
    
}
const ub = (title ,Author ,type , year ,id) =>{
    return  dbConnection.query(`UPDATE Books
    SET title = $1, Author = $2 ,type = $3, year =$4
    WHERE id= $5;`,[title ,Author ,type , year ,id])
    
}
const ab = (title ,Author ,type , year) =>{
    return  dbConnection.query(`INSERT INTO Books (title, Author, type, year)
    VALUES ($1, $2, $3 ,$4);`,[title ,Author ,type , year])
}


module.exports = {
  getData,
  ob,
  db,
  ub,
  ab
} 
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
const ub = (id) =>{
    return  dbConnection.query(`UPDATE Books
    SET title = 'North Afrika', Author = 'Mandilla' ,type = 'documantry', year ='1950'
    WHERE id= ${id};`)
}
const ab = () =>{
    return  dbConnection.query(`INSERT INTO Books (title, Author, type, year)
    VALUES ('js basics', 'inas owimer', 'science' ,'2024');`)
}


module.exports = {
  getData,
  ob,
  db,
  ub,
  ab
}
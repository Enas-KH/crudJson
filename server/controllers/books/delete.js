const fs = require('fs');
const { parse } = require('path');
const path = require('path');
const { db } = require('./queries');

async function deleteBook (req, res) {
  const id=parseInt(req.params.id);
  res.json({obj:(await db(id)).rows[0],msg:"the book has been deleted successfully"});
     
    } 
      
 
module.exports = {deleteBook};
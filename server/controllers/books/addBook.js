const fs = require('fs');
const { parse } = require('path');
const path = require('path');
const { ab } = require('./queries');

async function addBook (req, res) {
    const {title ,Author ,type , year } =req.body
    res.json({obj:(await ab(title ,Author ,type , year)).rows[0],msg:"the book has been added successfully"});
 }
 module.exports={addBook}; 

const fs = require('fs');
const { parse } = require('path');
const path = require('path');
const { ab } = require('./queries');

async function addBook (req, res) {
    res.json({obj:(await ab()).rows[0],msg:"the book has been added successfully"});
 }
 module.exports={addBook};

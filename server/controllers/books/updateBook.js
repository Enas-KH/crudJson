const fs = require('fs');
const { parse } = require('path');
const path = require('path');
const { ub } = require('./queries');
async function updateBook (req, res) {
    const id=parseInt(req.params.id);
    res.json({obj:(await ub(id)).rows[0],msg:"the book has been updated successfully"});
 }
module.exports={updateBook};

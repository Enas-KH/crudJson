const fs = require('fs');
const { parse } = require('path');
const path = require('path');
const { ob } = require('./queries');

async function oneBook (req, res) {
   const id=parseInt(req.params.id)
   res.send((await ob(id)).rows[0]);
 }
 module.exports={oneBook};

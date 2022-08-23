const fs = require('fs');
const path = require('path');
const { getData } = require('./queries');

async function renderall(req, res) {
   res.send((await getData()).rows);
}

module.exports={renderall};
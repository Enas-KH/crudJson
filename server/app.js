const express = require('express');
const router=require("./routes/router.js");
const app = express();
app.use(router);
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port = process.env.PORT;
app.listen(port, ()=>console.log(`sever is litening in port ${port} ...`));
console.log(port)
module.exports = app;



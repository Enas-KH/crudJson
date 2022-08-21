//5 handlers in router

const { deleteBook } = require("../controllers/books/delete");
const { oneBook } = require("../controllers/books/onebook");
const { renderall } = require("../controllers/books/renderall");
const { addBook } = require("../controllers/books/addBook");
const { updateBook } = require("../controllers/books/updateBook");

const express = require('express');
const router = express.Router();

router.use(express.json());

router.get("/",renderall);
router.get("/:id",oneBook);
router.post("/",addBook);
router.delete("/:id",deleteBook);
router.put("/:id",updateBook);
module.exports = router;
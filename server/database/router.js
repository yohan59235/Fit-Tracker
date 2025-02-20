const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const ItemControllers = require("./controllers/ItemControllers");

router.use("/items", ItemControllers.browse);

/* ************************************************************************* */

module.exports = router;

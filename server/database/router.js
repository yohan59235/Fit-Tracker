const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const ItemControllers = require("./controllers/ItemControllers");

const userControllers = require("./controllers/UserControllers");

const authMiddleware = require("./services/auth");

/* item router */

router.use("/items", ItemControllers.browse);

/* user router */

router.post("/users", authMiddleware.hashPassword, userControllers.add);

/* ************************************************************************* */

module.exports = router;

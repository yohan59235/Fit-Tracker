const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const ItemControllers = require("./controllers/ItemControllers");

const userControllers = require("./controllers/UserControllers");
const authControllers = require("./controllers/AuthControllers");

const authMiddleware = require("./services/auth");

/* item router */

router.use("/items", ItemControllers.browse);

/* user router */

router.get("/users", userControllers.browse);
router.post("/users", authMiddleware.hashPassword, userControllers.add);
router.delete("/users/:id", userControllers.detroy);

/* user Login / Logout */

router.post("/login", authControllers.login);
router.delete("/logout", authMiddleware.verifyToken, authControllers.logout);

/* ************************************************************************* */

module.exports = router;

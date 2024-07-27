/**
 * userRoutes.js
 * @description :: CRUD API routes for user
 */

const express = require("express");
const router = express.Router();
const controller = require("../../controller/controller");


router.route("/retreat").get(controller.getAllRetreats);
router.route("/book").post(controller.book);


module.exports = router;

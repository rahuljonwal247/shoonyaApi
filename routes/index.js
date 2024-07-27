/**
 * index.js
 * @description :: index route of platforms
 */

const express = require("express");
const router = express.Router();


router.use("/test", require("./route/route"));

module.exports = router;

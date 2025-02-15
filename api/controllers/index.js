const express = require('express');
const router = express.Router();


// Load each controller
const tasksController = require("./tasks.js");
const appConfigController = require("./appConfig.js");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/tasks", tasksController);
router.use("/application-configuration", appConfigController);


module.exports = router;


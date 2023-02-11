const router = require("express").Router();
const { googleRoutes } = require("./googleSheets.routes");

router.use("/google", googleRoutes);

module.exports = router;
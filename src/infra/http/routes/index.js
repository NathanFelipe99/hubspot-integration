const router = require("express").Router();
const { googleRoutes } = require("./googleSheets.routes");
const { hubspotRoutes } = require("./hubspotCRM.routes");

router.use("/google", googleRoutes);
router.use("/hubspot", hubspotRoutes);

module.exports = router;
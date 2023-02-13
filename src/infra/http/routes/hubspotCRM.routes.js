const hubspotRoutes = require("express").Router();
const { HubspotController } = require("./../../../application/controllers/hubspotController/hubSpot.controller");
const ensureAuthenticated = require("./../middlewares/ensureAuthenticated");

const hubspotController = new HubspotController();

hubspotRoutes.post("/", ensureAuthenticated, hubspotController.handle);

module.exports = { hubspotRoutes };
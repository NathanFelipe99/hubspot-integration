const googleRoutes = require("express").Router();
const { GoogleSheetsController } = require("./../../../application/controllers/googleSheetsController/googleSheets.controller");
const ensureAuthenticated = require("./../middlewares/ensureAuthenticated");

const googleSheetsController = new GoogleSheetsController();

googleRoutes.get("/test", ensureAuthenticated, async (req, res) => {
    res.send("alooo");
});

googleRoutes.get("/sheetData/:sheetId", ensureAuthenticated, googleSheetsController.handle);

module.exports = { googleRoutes };
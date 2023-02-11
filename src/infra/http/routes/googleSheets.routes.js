const googleRoutes = require("express").Router();
const { GoogleSheetsController } = require("./../../../application/controllers/googleSheetsController/googleSheets.controller");
const ensureAuthenticated = require("./../middlewares/ensureAuthenticated");

const googleSheetsController = new GoogleSheetsController();

googleRoutes.get("/", async (req, res) => {
    res.status(200).json({ message: "Hello" });
});

googleRoutes.get("/sheetData/:sheetId", ensureAuthenticated, googleSheetsController.handle);

module.exports = { googleRoutes };
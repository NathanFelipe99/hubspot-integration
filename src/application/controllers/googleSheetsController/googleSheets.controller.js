const { GoogleSheetsService } = require("./../../services/googleSheets/googleSheets.service");

class GoogleSheetsController {
    async handle(req, res) {
        try {
            const { sheetId } = req.params;
            const googleSheetsService = new GoogleSheetsService();

            const dataRows = await googleSheetsService.execute(sheetId);

            return res.status(200).json(dataRows);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}

module.exports = { GoogleSheetsController };
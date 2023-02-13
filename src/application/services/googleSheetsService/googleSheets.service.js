const { GoogleSpreadsheet } = require("google-spreadsheet");
const credentials = require("./../../../../credentials.json");

class GoogleSheetsService {

    async execute(sheetID) {
        const sheetData = await this.#getData(sheetID);

        return sheetData;
    }

    async #getData(sheetID) {
        const doc = new GoogleSpreadsheet(sheetID);
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
        
        const sheet = doc.sheetsByIndex[0];
        
        await sheet.loadCells({
            startRowIndex: 1,
            startColumnIndex: 0,
            endRowIndex: 20,
            endColumnIndex: 4
        });
        
        const rows = await sheet.getRows();
        
        const data = [];
        for (let index = 0; index < rows.length; index++) {
            const row = rows[index]["_rawData"] || [];
            if (row.length) {
                const obj = {};
                ["company", "contactName", "email", "phone", "website"].forEach((key, index) => {
                    obj[key] = row[index];
                });
                
                data.push(obj);
            }
        }
        return data;
    }
}

module.exports = { GoogleSheetsService };
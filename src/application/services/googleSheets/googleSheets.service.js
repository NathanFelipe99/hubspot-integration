const { google } = require("googleapis");

class GoogleSheetsService {
    async execute(sheetID) {
        const auth = new google.auth.GoogleAuth({
            keyFile: "credentials.json",
            scopes: "https://www.googleapis.com/auth/spreadsheets"
        });

        const client = await auth.getClient();

        const googleSheets = google.sheets({
            version: "v4",
            auth: client
        });

        const googleSheetsMetadata = await googleSheets.spreadsheets.values.get({
            auth,
            range: 'Class Data!A2:E21',
            spreadsheetId: sheetID
        });

        return googleSheetsMetadata;
    }
}

module.exports = { GoogleSheetsService };
const { authenticate } = require("@google-cloud/local-auth");
const { google } = require("googleapis");
const path = require("path");

class GoogleSheetsService {
    #SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    #CREDENTIAL_PATH = path.join(process.cwd(), "credentials.json");
    
    async execute(sheetID) {

    }

    async #authorize() {
        
    }

    async #getData(sheetId, auth) {
        
    }
}

module.exports = { GoogleSheetsService };
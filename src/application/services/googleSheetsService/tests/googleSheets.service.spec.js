const { GoogleSheetsService } = require("../googleSheets.service");
const path = require('path');
require("dotenv").config({ path: path.resolve(__dirname, "./../../../../../.env")});

let googleSheetService;
describe("Testing GoogleSheet API", () => {
    beforeEach(() => {
        googleSheetService = new GoogleSheetsService();
    });

    it("should be able to read sheet data", async () => {
        const data = await googleSheetService.execute(process.env.TEST_SHEET_ID);
        expect(data).toBeInstanceOf(Array);

        if (data.length) {
            expect(data[0]).toHaveProperty("company");
            expect(data[0]).toHaveProperty("contactName");
            expect(data[0]).toHaveProperty("email");
            expect(data[0]).toHaveProperty("phone");
            expect(data[0]).toHaveProperty("website");
        }
    });
});
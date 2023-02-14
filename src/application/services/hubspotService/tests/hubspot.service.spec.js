const { HubspotService } = require("../hubSpot.service");
const path = require('path');
require("dotenv").config({ path: path.resolve(__dirname, "./../../../../../.env") });

let hubspotService;

describe("Testing Hubspot CRM integration", () => {
    beforeEach(() => {
        hubspotService = new HubspotService();
    });

    it("should be able to create contacts in Hubspot CRM", async () => {
        const responses = await hubspotService.execute(process.env.TEST_SHEET_ID);
        expect(responses.length).toBeGreaterThan(0);
    });


    it("shouldn't be able to create contacts in Hubspot CRM", async () => {
        try {
            await hubspotService.execute(process.env.TEST_SHEET_ID);
        } catch (error) {
            expect(error).rejects;
        }
    });
});
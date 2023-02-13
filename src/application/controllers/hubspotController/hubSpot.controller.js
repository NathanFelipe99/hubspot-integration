const { HubspotService } = require("../../services/hubspotService/hubSpot.service");

class HubspotController {
    async handle(req, res) {
        try {
            const { sheetId, email } = req.body;            
            const hubspotService = new HubspotService();

            const createdContacts = await hubspotService.execute(sheetId, email);

            return res.status(200).json(createdContacts);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}

module.exports = { HubspotController };
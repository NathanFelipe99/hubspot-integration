const { GoogleSheetsService } = require("../googleSheetsService/googleSheets.service");
const hubspot = require("@hubspot/api-client");
const { AppError } = require("./../../../shared/errors/AppError");
const { emailValidation } = require("./../../../shared/utils/corporativeDomains");

class HubspotService {
    googleSheetService

    constructor() {
        this.googleSheetService = new GoogleSheetsService();
    }

    async execute(sheetId, email) {
        const data = await this.googleSheetService.execute(sheetId);

        const createdContacts = await this.#createContacts(data, email);

        return createdContacts;
    }

    async #createContacts(data, email) {
        const hubspotClient = new hubspot.Client({
            accessToken: process.env.HUBSPOT_KEY
        });

        const filteredData = await this.#filterData(data, email);
        if (!filteredData.length) throw new AppError("No contacts found!", 400);

        const responses = [];

        for (let index = 0; index < filteredData.length; index++) {
            const contact = filteredData[index];

            const { company, contactName, email, phone, website } = contact;
            const isCorporativeEmail = await emailValidation(email);

            if (isCorporativeEmail) {
                const splittedContact = contactName.split(" ");

                const [firstname, lastname] = [splittedContact[0], splittedContact.at(-1)];

                const simplePublicObjectInput = {
                    properties: {
                        email,
                        company,
                        firstname,
                        lastname,
                        phone,
                        website
                    }
                }

                const response = await hubspotClient.crm.contacts.basicApi.create(simplePublicObjectInput);
                responses.push(response);
            }
        }

        if (!responses.length) throw new AppError("No contacts created!", 400);
        return responses;
    }

    async #filterData(data, email) {
        return email ? data.filter(contact => contact.email === email) : data;
    }

}

module.exports = { HubspotService };
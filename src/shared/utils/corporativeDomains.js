async function emailValidation(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nonCorporativeDomainsList = [
        "gmail.com",
        "outlook.com",
        "yahoo.com.br"
    ];

    const emailDomain = email.split("@")[1];

    return regex.test(email) && !nonCorporativeDomainsList.includes(emailDomain);
};

module.exports = { emailValidation };
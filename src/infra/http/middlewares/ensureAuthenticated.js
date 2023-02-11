async function ensureAuthenticated(req, res, next) {
    const KEY = req.headers["x-api-key"];

    if (!KEY || KEY !== process.env.API_KEY) {
        res.status(401).send("Unauthorized!");
    } else {
        next();
    }
}

module.exports = ensureAuthenticated;
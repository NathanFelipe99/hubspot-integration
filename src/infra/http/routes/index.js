const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send("Hello");
});

module.exports = router;
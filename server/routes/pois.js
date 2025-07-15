const express = require("express");
const router = express.Router();
const POI = require("../models/poi");

router.get("/", async (req, res) => {
    const pois = await POI.find({});
    res.json(pois);
});

router.post("/", async (req, res) => {
    const poi = new POI(req.body);
    await poi.save();
    res.json({ message: "POI saved" });
});

module.exports = router;

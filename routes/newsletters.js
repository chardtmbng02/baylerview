const express = require("express");
const router = express.Router();
const Newsletter = require("../models/newsletter");

//get all emails
router.get("/", async (req, res) => {
  try {
    const newsletters = await Newsletter.find();
    res.json({ success: true, data: newsletters });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something Went Wrong" });
  }
});

//get a single newsletter
router.get('/:id', async (req, res) => {
    try {
      const newsletter = await Newsletter.findById(req.params.id);
      res.json({ success: true, data: newsletter });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Something Went Wrong' });
    }
  });

//Add a newsletter
router.post('/', async (req, res) => {
    const newsletter = new Newsletter({
      email: req.body.email,
      subscription: req.body.subscription,
    });
  
    try {
      const savedNewsletter = await newsletter.save();
      res.json({ success: true, data: savedNewsletter });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Something Went Wrong' });
    }
  });

module.exports = router;
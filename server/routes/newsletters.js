const express = require("express");
const router = express.Router();
const Newsletter = require("../models/newsletter");
const newsletter = require("../models/newsletter");

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

  // Update an Account
router.put("/:id", async (req, res) => {
  try {
    const updatedNewsletter = await Newsletter.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // Update the fields with the request body data
      },
      { new: true } // Return the updated document
    );

    if (!updatedNewsletter) {
      return res
        .status(404)
        .json({ success: false, error: "Account not found" });
    }

    res.json({ success: true, data: updatedNewsletter });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

  //Delete an Newsletter
router.delete('/:id', async (req, res) => {
  try {
    await newsletter.findByIdAndDelete(req.params.id);
    return res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

module.exports = router;
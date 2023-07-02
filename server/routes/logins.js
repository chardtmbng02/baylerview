const express = require("express");
const router = express.Router();
const Login = require("../models/login");

//get all accounts
router.get("/", async (req, res) => {
  try {
    const login = await Login.find();
    res.json({ success: true, data: login });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something Went Wrong" });
  }
});

//get a single account
router.get("/:id", async (req, res) => {
  try {
    const login = await Login.findById(req.params.id);
    res.json({ success: true, data: login });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something Went Wrong" });
  }
});

//Add an account
router.post("/add", async (req, res) => {
  const login = new Login({
    username: req.body.username,
    password: req.body.password,
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    position: req.body.position,
    user_level: req.body.user_level,
    account_status: req.body.account_status,
  });

  try {
    const savedLogin = await login.save();
    res.json({ success: true, data: savedLogin });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something Went Wrong" });
  }
});

// Update Account
router.put('/:id', async (req, res) => {
  try {
    const login = await Login.findById(req.params.id);
    // Match the usernames
    if (login.username === req.body.username) {
      const updatedLogin = await Login.findByIdAndUpdate(
        req.params.id,
        { $set: { 
          username: req.body.text, 
          password: req.body.password,
          lastname: req.body.lastname,
          firstname: req.body.firstname,
          email: req.body.email,
          position: req.body.position,
          user_level: req.body.user_level,
          account_status: req.body.account_status,
          date: Date.now,
         } },
        { new: true }
      );
      return res.json({ success: true, data: updatedLogin});
    }
    // Usernames do not match
    res.status(403).json({
      success: false,
      error: 'You are not authorized to update this resource',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//Delete an Account
router.delete('/:id', async (req, res) => {
  try {
    const login = await Login.findById(req.params.id);

    //Match the username

    if (login.username === req.body.username) {
      await Login.findByIdAndDelete(req.params.id);
      return res.json({ success: true, data: {} });
    }

    //If not match
    res.status(403).json({
      success: false,
      error: ' You are not authorized to delete this resource',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

module.exports = router;

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

// Update an Account
router.put("/:id", async (req, res) => {
  try {
    const updatedLogin = await Login.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // Update the fields with the request body data
      },
      { new: true } // Return the updated document
    );

    if (!updatedLogin) {
      return res
        .status(404)
        .json({ success: false, error: "Account not found" });
    }

    res.json({ success: true, data: updatedLogin });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//Delete an Account
router.delete('/:id', async (req, res) => {
  try {
    await Login.findByIdAndDelete(req.params.id);
    return res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

module.exports = router;

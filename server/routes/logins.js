const express = require('express');
const router = express.Router();
const Login = require('../models/login');

//get all accounts
router.get('/', async (req, res) => {
  try {
    const login = await Login.find();
    res.json({ success: true, data: login });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

//get a single account
router.get('/:id', async (req, res) => {
  try {
    const login = await Login.findById(req.params.id);
    res.json({ success: true, data: login });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

//Add an account
router.post('/', async (req, res) => {
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
      res.status(500).json({ success: false, error: 'Something Went Wrong' });
    }
  });

module.exports = router;
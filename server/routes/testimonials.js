const express = require('express');
const router = express.Router();
const Testimonial = require('../models/testimonial');
const testimonial = require('../models/testimonial');

//get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json({ success: true, data: testimonials });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

//get a single testimonial
router.get('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    res.json({ success: true, data: testimonial });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

//Add a testimonial
router.post('/', async (req, res) => {
    const testimonial = new Testimonial({
      image_url: req.body.image_url,
      name: req.body.name,
      email: req.body.email,
      position: req.body.position,
      message: req.body.message,
      ratings: req.body.ratings,
      testimonial_status: req.body.testimonial_status,
    });
  
    try {
      const savedTestimonial = await testimonial.save();
      res.json({ success: true, data: savedTestimonial });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Something Went Wrong' });
    }
  });

  // Update an Account
router.put("/:id", async (req, res) => {
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // Update the fields with the request body data
      },
      { new: true } // Return the updated document
    );

    if (!updatedTestimonial) {
      return res
        .status(404)
        .json({ success: false, error: "Record not found" });
    }

    res.json({ success: true, data: updatedTestimonial });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

  //Delete a testimonial
router.delete('/:id', async (req, res) => {
  try {
    await testimonial.findByIdAndDelete(req.params.id);
    return res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something Went Wrong' });
  }
});

module.exports = router;
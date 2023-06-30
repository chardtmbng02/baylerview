const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  room_type: {
    type: String,
    required: [true, 'Please add a text field'],
  },
  description: {
    type: String,
  },
  bed_size: {
    type: String,
  },
  price: {
    type: String,
  },
  occupancy: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Room', RoomSchema);

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  image: String,
  stars: Number,
  title: String,
  studentsWatched: Number
});

module.exports = mongoose.model('Review', reviewSchema);

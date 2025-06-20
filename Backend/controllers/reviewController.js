const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  const { stars, title, studentsWatched } = req.body;
  const image = req.file.filename;

  const review = new Review({ image, stars, title, studentsWatched });
  await review.save();
  res.json(review);
};

exports.getReviews = async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
};

exports.updateReview = async (req, res) => {
  const { id } = req.params;
  const { stars, title, studentsWatched } = req.body;

  const review = await Review.findByIdAndUpdate(id, { stars, title, studentsWatched }, { new: true });
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const { id } = req.params;
  await Review.findByIdAndDelete(id);
  res.json({ msg: 'Deleted' });
};

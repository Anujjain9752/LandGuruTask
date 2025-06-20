const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createReview, getReviews, updateReview, deleteReview } = require('../controllers/reviewController');
const auth = require('../middleware/authMiddleware');

const upload = multer({ dest: 'uploads/' });

router.post('/', auth, upload.single('image'), createReview);
router.get('/', getReviews);
router.put('/:id', auth, updateReview);
router.delete('/:id', auth, deleteReview);

module.exports = router;

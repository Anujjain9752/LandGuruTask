import axios from 'axios';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews')
      .then(res => setReviews(res.data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Reviews</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {reviews.map((r, i) => (
          <div key={i} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={`http://localhost:5000/uploads/${r.image}`} width="100%" />
            <h4>{r.title}</h4>
            <p>⭐ {r.stars} | {r.studentsWatched} students</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

import axios from "axios";
import React, { useEffect, useState } from "react";
import SetReview from "../SetReview/SetReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("review.json").then((res) => setReviews(res.data));
  }, []);
  return (
    <div className="my-9 mx-20">
      <div>
        <h2 className="text-2xl font-sans font-semibold text-orange-600 mb-6">Total Reviews: {reviews.length}</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {reviews.map((review) => (
          <SetReview review={review}></SetReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

import React from "react";

const TopReview = ({ review }) => {
  const { name,  ratings } = review;

  return (
    <div className="border rounded p-3">
      <h2 className="font-bold font-mono text-lg text-teal-800">Name: {name}</h2>
      <h3 className="text-slate-700 pb-3">
        Ratings: <span className="text-amber-400">{ratings}</span>
      </h3>
     
    </div>
  );
};

export default TopReview;

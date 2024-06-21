// components/CustomerFeedback.js

import React from 'react';

const reviews = [
  { id: 1, name: "John ", location: "United States ,Arizona", feedback: "Best internet and cable service!" },
  { id: 2, name: "Jane Smith", location: "United States ,Indiana", feedback: "Reliable and fast!" },
  { id: 3, name: "Mike Johnson", location: "United States ,Maryland", feedback: "Excellent customer support." },
  { id: 4, name: "Sarah Williams", location: "United States ,New York", feedback: "Affordable pricing." },
  { id: 5, name: "Chris Brown", location: "United States ,Georgia", feedback: "100% installation accuracy." },
  { id: 6, name: "Patricia Davis", location: "United States ,Iowa", feedback: "Great deals available!" },
  { id: 7, name: "James Wilson", location: "United States ,Kentucky", feedback: "Highly recommend!" },
  { id: 8, name: "Mary Garcia", location: "United States ,Idaho", feedback: "Super fast internet." },
  { id: 9, name: "Robert Martinez", location: "United States ,Alabama", feedback: "Best service provider." },
  { id: 10, name: "Linda Hernandez", location: "United States ,Virginia", feedback: "Very satisfied!" }
];

const CustomerFeedback = () => {
  return (
    <>
    <div className="heding-feed"><h1>Our Happy Customers</h1></div>
    <div className="customer-feedback">
      {reviews.map((review) => (
        <div key={review.id} className="feedback-item">
          <p className="feedback-text">{review.feedback}</p>
          <p className="customer-name">{review.name}, {review.location}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default CustomerFeedback;

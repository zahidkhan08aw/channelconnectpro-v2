"use client"
// pages/ContactPage.js

import Head from 'next/head';
import { useState, useEffect } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you would submit the form to a backend or perform other actions here
    // For demonstration, we'll just show the success message
    setShowSuccess(true);
    // Clear form fields after submission (optional)
    setFormData({
      name: '',
      number: '',
      email: ''
    });
  };

  return (
    <div className="container4">
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="contact-page">
        <div className="intro">
          <h1>Contact Us</h1>
          <p>Feel free to reach out to us with any questions, concerns, or feedback!</p>
        </div>
        
        {showSuccess && (
          <div className="success-popup">
            <p>Thank you! Your message has been submitted successfully.</p>
          </div>
        )}

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number:</label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer">
        <p>Contact us at: support@channelconnectpro.com</p>
      </footer>
    </div>
  );
};

export default ContactPage;

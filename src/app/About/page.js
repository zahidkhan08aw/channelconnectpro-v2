// pages/AboutPage.js

import React from 'react';

export const metadata = {
  title: "About ChannelConnectPRO",
  description: "Learn about ChannelConnectPRO, your premier provider of high-speed internet and reliable cable services. Discover our commitment to customer satisfaction and community engagement.",
};

const AboutPage = () => {
  return (
    <>
      <div className="main-heading">
        <h2>About Us</h2>
      </div>
      <div className="about-content">
        <img src="/ab2.png" width={200} height={200} alt='aboutimage' />
        <div className="about-info">
          <h2>ChannelConnectPRO is your premier third-party provider of internet and cable services.</h2>
          <h1>We pride ourselves on delivering the best connectivity and entertainment solutions with unbeatable deals and exceptional customer support. </h1>
          <h2>Our mission is to keep you connected and entertained with reliable, high-speed internet and a wide range of cable options tailored to your needs.</h2>
          <h1>Experience the ChannelConnectPRO difference today!</h1>
        </div>
      </div>
      <div className="mission">
        <h1>Our Mission</h1>
        <p>At ChannelConnectPRO, our mission is to keep you connected and entertained with reliable, high-speed internet and a wide range of cable options tailored to your needs. We strive to offer services that not only meet but exceed your expectations.</p>
      </div>
      <div className="mission">
        <h1>Why Choose Us:</h1>
        <p>👉 100% Installation Accuracy: Our expert technicians ensure precise and flawless installation every time, guaranteeing your service is up and running smoothly from day one.</p>
        <p>👉 Innovative Technology: We utilize the latest technology to ensure fast, reliable, and secure connections.</p>
        <p>👉 Superior Customer Service: Our dedicated support team is available 24/7 to assist you with any issues or questions.</p>
        <p>👉 Unbeatable Deals: We offer competitive pricing and special promotions to provide the best value for your money.</p>
      </div>
    </>
  );
};

export default AboutPage;

// pages/ServicePage.js

// pages/ServicePage.js

import Head from 'next/head';
import Feedback from "../../../Components/Feedback"


const ServicePage = () => {
  const niches = [
    {
      id: 1,
      name: "Internet",
      image: "/internet.png",
      plans: [
        { id: 1, name: "Basic", price: "Start Just = $40/-", speed: "upto 100 Mbps" },
        { id: 2, name: "Standard", price: "Start Just = $55/-", speed: "upto 300 Mbps" },
        { id: 3, name: "Premium", price: "Start Just = $85/-", speed: "1 Gig" }
      ]
    },
    {
      id: 2,
      name: "Cable TV",
      image: "/cableTV1.png",
      plans: [
        { id: 4, name: "Cable TV", price: "Start Just = $79.99/-", Autopay: "Go with AutoPay and get 10$ Discount" },
        { id: 5, name: "Go with Autopay ", price: "Get $10.00 Discount", Autopay: "Go with AutoPay and get 10$ Discount" },
        { id: 6, name: "All Channels Available"},
       
      ]
    },
    {
      id: 3,
      name: "Streaming",
      image: "/stream.png",
      plans: [
        { id: 7,  price: "Start Just = $79/-" },
        { id: 8,  price: "Best Offer Available" },
        { id: 9,  price: "Stream Now" },
      ]
    },
    
  ];

  return (
    <div className="container2">
      <Head>
        <title>Service Page</title>
      </Head>
      <div className="full-width">
        <h1>Services</h1>
      </div>
      <div className="service-page">
        {niches.map((niche) => (
          <div key={niche.id} className="niche">
            <h2>{niche.name}</h2>
            <img src={niche.image} alt={niche.name} width={100} height={100} className="niche-image" />
            <div className="plans">
              {niche.plans.map((plan) => (
                <div key={plan.id} className="plan">
                  <h3>{plan.name}</h3>
                  <p>{plan.price}</p>
                  <p>{plan.speed}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    <Feedback/>
      <div className="ending">
        <h1>Experience the best services with ChannelConnectPRO!</h1>
      </div>
    </div>
  );
};

export default ServicePage;

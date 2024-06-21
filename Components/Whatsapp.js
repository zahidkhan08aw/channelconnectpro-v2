import React from 'react';


const WhatsAppButton = () => {
  const phoneNumber = 'YOUR_PHONE_NUMBER';
  const message = 'Hello, I would like to get more information about Your Internet & Cable Services!';

  return (
    <a
      href={`https://wa.me/${+13479790618}?text=${encodeURIComponent(message)}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
    <img src="/whatsapp.png" width={20} height={20} alt='whatsapp'/>
    </a>
  );
};

export default WhatsAppButton;
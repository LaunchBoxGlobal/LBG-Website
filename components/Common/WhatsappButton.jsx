"use client";

import React from "react";

const WhatsappButton = () => {
  const phoneNumber = "923001234567";
  const message = "Hi! I would like to know more about your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block sticky bottom-5 left-10 z-50 mr-10 pl-5"
      aria-label="Chat with us on WhatsApp"
    >
      <img
        src="/whatsapp-icon.png"
        alt="whatsapp-icon"
        width={30}
        height={30}
        className="w-14 h-14"
      />
    </a>
  );
};

export default WhatsappButton;

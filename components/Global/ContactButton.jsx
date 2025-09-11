import Link from "next/link";
import React from "react";

const ContactButton = ({ text }) => {
  return (
    <Link
      href={"/contact-us"}
      className={`red-btn red-btn-shadow z-20`}
      aria-label="A link to contact us page"
    >
      {text}
    </Link>
  );
};

export default ContactButton;

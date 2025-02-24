import Link from "next/link";
import React from "react";

const ContactButton = ({ text }) => {
  return (
    <Link href={"/contact-us"} className={`red-btn red-btn-shadow`}>
      {text}
    </Link>
  );
};

export default ContactButton;

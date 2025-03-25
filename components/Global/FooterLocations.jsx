"use client";
import Image from "next/image";
import React, { useState } from "react";

const FooterLocations = () => {
  const [location, setLocation] = useState("US");
  const toggleLocation = (address) => {
    setLocation(address);
  };
  return (
    <div className="flex flex-col items-start gap-4">
      <h3 className="text-sm lg:text-[18px] font-bold uppercase">
        Serving Businesses Worldwide
      </h3>
      <div className="">
        <div className="h-[48px] bg-[#2D2D2E] rounded-full p-1 flex items-start gap-0 lg:gap-1 flex-wrap">
          <button
            type="button"
            onClick={() => toggleLocation("US")}
            className={`px-3 lg:px-4 h-full text-sm lg:text-lg font-semibold rounded-full ${
              location === "US" && "bg-[#F40E00] text-white"
            }`}
          >
            US
          </button>
          <button
            type="button"
            onClick={() => toggleLocation("Dubai")}
            className={`px-3 lg:px-4 h-full text-sm lg:text-lg font-semibold rounded-full ${
              location === "Dubai" && "bg-[#F40E00] text-white"
            }`}
          >
            UAE
          </button>
          <button
            type="button"
            onClick={() => toggleLocation("Qatar")}
            className={`px-3 lg:px-4 h-full text-sm lg:text-lg font-semibold rounded-full ${
              location === "Qatar" && "bg-[#F40E00] text-white"
            }`}
          >
            QA
          </button>
          <button
            type="button"
            onClick={() => toggleLocation("Canada")}
            className={`px-3 lg:px-4 h-full text-sm lg:text-lg font-semibold rounded-full ${
              location === "Canada" && "bg-[#F40E00] text-white"
            }`}
          >
            CA
          </button>
          <button
            type="button"
            onClick={() => toggleLocation("UK")}
            className={`px-3 lg:px-4 h-full text-sm lg:text-lg font-semibold rounded-full ${
              location === "UK" && "bg-[#F40E00] text-white"
            }`}
          >
            UK
          </button>
          <button
            type="button"
            onClick={() => toggleLocation("Australia")}
            className={`px-3 lg:px-4 h-full text-sm lg:text-lg font-semibold rounded-full ${
              location === "Australia" && "bg-[#F40E00] text-white"
            }`}
          >
            AUS
          </button>
          <button
            type="button"
            onClick={() => toggleLocation("PK")}
            className={`px-3 lg:px-4 h-full text-sm lg:text-lg font-semibold rounded-full ${
              location === "PK" && "bg-[#F40E00] text-white"
            }`}
          >
            PK
          </button>
        </div>
      </div>

      {location === "US" && (
        <div className="w-full lg:w-[550px] border p-5 rounded-xl grid grid-cols-2 gap-5 min-h-[203px]">
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-semibold text-lg mb-4">United States</h3>
            <Image
              src={"/footer-location-icon.png"}
              width={17}
              height={19}
              alt="footer-location-icon"
            />
            <p className="text-lg">
              4700 Millenia Blvd Suite 500, Orlando, FL 32839, United States
            </p>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.7555282936764!2d-81.43643949999999!3d28.4869082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77eafa8a55555%3A0x581fad0a30cde538!2s4700%20Millenia%20Blvd%20Suite%20500%2C%20Orlando%2C%20FL%2032839%2C%20USA!5e0!3m2!1sen!2s!4v1742810105061!5m2!1sen!2s"
              style={{ borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-[100%] h-full"
            />
          </div>
        </div>
      )}
      {location === "Dubai" && (
        <div className="w-full lg:w-[550px] border p-5 rounded-xl grid grid-cols-2 gap-5 min-h-[203px]">
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-semibold text-lg mb-4">Dubai</h3>
            <Image
              src={"/footer-location-icon.png"}
              width={17}
              height={19}
              alt="footer-location-icon"
            />
            <p className="text-lg">JAFZA View 18 & 19</p>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.478206718873!2d55.0943135!3d24.9838617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f128008900c79%3A0x5205a4aab5afc3e1!2sRegus%20-%20Dubai%20BCW%20Jafza%20View%2018%20%26%2019!5e0!3m2!1sen!2s!4v1742806861118!5m2!1sen!2s"
              style={{ borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-[100%] h-full"
            />
          </div>
        </div>
      )}
      {location === "Qatar" && (
        <div className="w-full lg:w-[550px] border p-5 rounded-xl grid grid-cols-2 gap-5 min-h-[203px]">
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-semibold text-lg mb-4">Qatar</h3>
            <Image
              src={"/footer-location-icon.png"}
              width={17}
              height={19}
              alt="footer-location-icon"
            />
            <p className="text-lg">D Ring Road, 1st & 2nd Floors Doha</p>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4142374388643!2d51.5498832!3d25.2566471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cf9baed3703f%3A0xa8143369f5c97cd8!2sRegus%20-%20Doha%2C%20D%20Ring%20Road!5e0!3m2!1sen!2s!4v1742806375393!5m2!1sen!2s"
              style={{ borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-[100%] h-full"
            />
          </div>
        </div>
      )}
      {location === "Canada" && (
        <div className="w-full lg:w-[550px] border p-5 rounded-xl grid grid-cols-2 gap-5 min-h-[203px]">
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-semibold text-lg mb-4">Canada</h3>
            <Image
              src={"/footer-location-icon.png"}
              width={17}
              height={19}
              alt="footer-location-icon"
            />
            <p className="text-lg">
              15 Wellesley Street West Toronto ON M4Y 0G7
            </p>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.2130129822112!2d-79.3854873!3d43.6645395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b3e6802d49%3A0x8f477f0874a8a039!2s15%20Wellesley%20St%20W%2C%20Toronto%2C%20ON%20M4Y%200G7%2C%20Canada!5e0!3m2!1sen!2s!4v1742806544834!5m2!1sen!2s"
              style={{ borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-[100%] h-full"
            />
          </div>
        </div>
      )}
      {location === "UK" && (
        <div className="w-full lg:w-[550px] border p-5 rounded-xl grid grid-cols-2 gap-5 min-h-[203px]">
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-semibold text-lg mb-4">United Kingdom</h3>
            <Image
              src={"/footer-location-icon.png"}
              width={17}
              height={19}
              alt="footer-location-icon"
            />
            <p className="text-lg">4-4a Bloomsbury Square, London WC1A 2RP</p>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.733428313943!2d-0.12269150000000001!3d51.5181064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b347ac2ad0d%3A0xe7ea8a5ea5d03628!2s4%20Bloomsbury%20Square%2C%20London%20WC1A%202RP%2C%20UK!5e0!3m2!1sen!2s!4v1742806613531!5m2!1sen!2s"
              style={{ borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-[100%] h-full"
            />
          </div>
        </div>
      )}
      {location === "Australia" && (
        <div className="w-full lg:w-[550px] border p-5 rounded-xl grid grid-cols-2 gap-5 min-h-[203px]">
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-semibold text-lg mb-4">Australia</h3>
            <Image
              src={"/footer-location-icon.png"}
              width={17}
              height={19}
              alt="footer-location-icon"
            />
            <p className="text-lg">140 Bourke Street, Melbourne VIC 3000</p>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.055618970412!2d144.9689401!3d-37.8121662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642c9a9b136b3%3A0x2cb03781df772d85!2s140%20Bourke%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2s!4v1742806925543!5m2!1sen!2s"
              style={{ borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-[100%] h-full"
            />
          </div>
        </div>
      )}
      {location === "PK" && (
        <div className="w-full lg:w-[550px] border p-5 rounded-xl grid grid-cols-2 gap-5 min-h-[203px]">
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-semibold text-lg mb-4">Pakistan</h3>
            <Image
              src={"/footer-location-icon.png"}
              width={17}
              height={19}
              alt="footer-location-icon"
            />
            <p className="text-lg">
              Suite # 301, Emarah Suites, Sharah-e-Faisal Karachi, Pakistan
            </p>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.119303114809!2d67.05242059999999!3d24.8597746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fa2b7b30a17%3A0x158ed1b3907f275c!2sEmarah%20Suites!5e0!3m2!1sen!2s!4v1742810189986!5m2!1sen!2s"
              style={{ borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-[100%] h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterLocations;

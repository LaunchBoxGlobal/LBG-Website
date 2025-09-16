"use client";
import React, { useState } from "react";
import Image from "next/image";
import FeatureCard from "../HealthCarePage/FeatureCard";
import {
  REAL_ESTATE_AGENT_AND_BROKER,
  REAL_ESTATE_ANALYTICS_AND_INVESTEMENT_TOOLS,
  REAL_ESTATE_PROPERTY_FINANCING,
  REAL_ESTATE_PROPERTY_LISTING,
  REAL_ESTATE_PROPERTY_MANAGEMENT,
  REAL_ESTATE_SECURE_SIGNATURE_AND_DOCUMENT_MANAGEMENT,
  REAL_ESTATE_TENANT_AND_LANDLORD_MANAGEMENT,
  REAL_ESTATE_VIRTUAL_TOURS,
} from "@/constants/industries/real-estate-content/real-estate-features";
import RealEstateFeatureCard from "./RealEstateFeatureCard";

export const features_tabs = [
  {
    title: "Smart Property Listings & Search",
    icon: "/industries/real-estate/smart-property-listing-icon.png",
    whiteIcon: "/industries/real-estate/smart-property-listing-white-icon.png",
    width: 17,
    height: 20,
  },
  {
    title: "Agent & Broker CRM Automation",
    icon: "/industries/real-estate/agent-and-broker-icon.png",
    whiteIcon: "/industries/real-estate/agent-and-broker-white-icon.png",
    width: 21,
    height: 20,
  },
  {
    title: "Virtual Tours & AR/VR Experiences",
    icon: "/industries/real-estate/virtual-tours-icon.png",
    whiteIcon: "/industries/real-estate/virtual-tours-white-icon.png",
    width: 20,
    height: 20,
  },
  {
    title: "Tenant & Landlord Management Portals",
    icon: "/industries/real-estate/tenant-and-landlord-icon.png",
    whiteIcon: "/industries/real-estate/tenant-and-landlord-white-icon.png",
    width: 20,
    height: 20,
  },
  {
    title: "Property Management Dashboards",
    icon: "/industries/real-estate/propert-management-dashboard-icon.png",
    whiteIcon:
      "/industries/real-estate/propert-management-dashboard-white-icon.png",
    width: 23,
    height: 20,
  },
  {
    title: "Analytics & Investment Tools",
    icon: "/industries/real-estate/analytics-icon.png",
    whiteIcon: "/industries/real-estate/analytics-white-icon.png",
    width: 17,
    height: 19,
  },
  {
    title: "Secure e-Signatures & Document Management",
    icon: "/industries/real-estate/signatures-and-document-management-icon.png",
    whiteIcon:
      "/industries/real-estate/signatures-and-document-management-white-icon.png",
    width: 21,
    height: 19,
  },
  {
    title: "Property Financing & Evaluation Tools",
    icon: "/industries/real-estate/propert-financing-icon.png",
    whiteIcon: "/industries/real-estate/propert-financing-white-icon.png",
    width: 19,
    height: 19,
  },
];

const RealEstateFeatures = () => {
  const [activeFeatues, setActiveFeatures] = useState(features_tabs[0]?.title);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleChangeFeature = (f) => {
    setActiveFeatures(f);
  };
  return (
    <section className="w-full py-20 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Features Designed to Simplify{" "}
          <span className="red-text">Real Estate</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Being a trusted real estate application development company, we add
          features that facilitate your business and clients. We keep the
          listings organized, and we simplify tenant and buyer interactions
          while adding other features as well. Our tech solutions deal with
          everyday challenges that help your business run smoothly.
        </p>
      </section>

      <div className="w-full bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16">
        {features_tabs?.map((tab, i) => {
          const isActive = activeFeatues === tab?.title;
          const isHovered = hoveredIndex === i;
          return (
            <button
              type="button"
              onClick={() => handleChangeFeature(tab?.title)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex items-center text-start gap-2 lg:w-[200px] px-5 py-2.5 rounded-lg mx-auto transition-all duration-300 group min-h-[100px] lg:min-w-[150px] ${
                isActive
                  ? "bg-[#F40E00] text-white"
                  : "bg-[#f9f9f9] hover:bg-[#F40E00] hover:text-white"
              }`}
              key={i}
            >
              <Image
                src={isActive || isHovered ? tab?.whiteIcon : tab?.icon}
                alt={tab?.title}
                width={tab?.width}
                height={tab?.height}
              />

              <span className="text-base leading-[1.1] font-medium">
                {tab?.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="w-full bg-[#F9F9F9] rounded-[17px] flex flex-wrap justify-between px-5 lg:px-10 py-10 lg:py-20 mt-16 gap-10">
        <div className="flex flex-col items-start gap-4 lg:w-[55%]">
          {activeFeatues === "Smart Property Listings & Search" ? (
            <>
              {REAL_ESTATE_PROPERTY_LISTING?.slice(0, 3)?.map((feature, i) => {
                return <RealEstateFeatureCard feature={feature} key={i} />;
              })}
            </>
          ) : activeFeatues === "Agent & Broker CRM Automation" ? (
            <>
              {REAL_ESTATE_AGENT_AND_BROKER?.slice(0, 3)?.map((feature, i) => {
                return <RealEstateFeatureCard feature={feature} key={i} />;
              })}
            </>
          ) : activeFeatues === "Virtual Tours & AR/VR Experiences" ? (
            <>
              {REAL_ESTATE_VIRTUAL_TOURS?.slice(0, 3)?.map((feature, i) => {
                return <RealEstateFeatureCard feature={feature} key={i} />;
              })}
            </>
          ) : activeFeatues === "Tenant & Landlord Management Portals" ? (
            <>
              {REAL_ESTATE_TENANT_AND_LANDLORD_MANAGEMENT?.slice(0, 3)?.map(
                (feature, i) => {
                  return <RealEstateFeatureCard feature={feature} key={i} />;
                }
              )}
            </>
          ) : activeFeatues === "Property Management Dashboards" ? (
            <>
              {REAL_ESTATE_PROPERTY_MANAGEMENT?.slice(0, 3)?.map(
                (feature, i) => {
                  return <RealEstateFeatureCard feature={feature} key={i} />;
                }
              )}
            </>
          ) : activeFeatues === "Analytics & Investment Tools" ? (
            <>
              {REAL_ESTATE_ANALYTICS_AND_INVESTEMENT_TOOLS?.slice(0, 3)?.map(
                (feature, i) => {
                  return <RealEstateFeatureCard feature={feature} key={i} />;
                }
              )}
            </>
          ) : activeFeatues === "Secure e-Signatures & Document Management" ? (
            <>
              {REAL_ESTATE_SECURE_SIGNATURE_AND_DOCUMENT_MANAGEMENT?.slice(
                0,
                3
              )?.map((feature, i) => {
                return <RealEstateFeatureCard feature={feature} key={i} />;
              })}
            </>
          ) : (
            <>
              {REAL_ESTATE_PROPERTY_FINANCING?.slice(0, 3)?.map(
                (feature, i) => {
                  return <RealEstateFeatureCard feature={feature} key={i} />;
                }
              )}
            </>
          )}
        </div>
        <div className="hidden lg:flex justify-center items-center lg:w-[40%]">
          {activeFeatues === "Smart Property Listings & Search" ? (
            <>
              <Image
                src={"/industries/real-estate/real-estate-features-mockup.png"}
                alt="patient-screen-mobile-mockup"
                width={260}
                height={490}
                className="object-contain lg:min-h-[500px] mx-auto"
              />
            </>
          ) : activeFeatues === "Agent & Broker CRM Automation" ? (
            <>
              <Image
                src={
                  "/industries/real-estate/agent-and-broker-screen-mockup.png"
                }
                alt="agent-and-broker-screen-mockup"
                width={545}
                height={419}
                className="object-contain mx-auto"
              />
            </>
          ) : activeFeatues === "Virtual Tours & AR/VR Experiences" ? (
            <>
              {/* <Image
                src={"/industries/real-estate/virtual-tours-mockup.png"}
                alt="virtual-tours-mockup"
                width={514}
                height={332}
                className="object-contain lg:min-h-[500px] mx-auto"
              /> */}
              <video
                src="/industries/real-estate/virtual-tours.mp4"
                controls={false}
                autoPlay={true}
                loop
                muted
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </>
          ) : activeFeatues === "Tenant & Landlord Management Portals" ? (
            <>
              <Image
                src={"/industries/real-estate/real-estate-features-mockup.png"}
                alt="patient-screen-mobile-mockup"
                width={260}
                height={490}
                className="object-contain lg:min-h-[500px] mx-auto"
              />
            </>
          ) : activeFeatues === "Property Management Dashboards" ? (
            <>
              <Image
                src={"/industries/real-estate/real-estate-features-mockup.png"}
                alt="patient-screen-mobile-mockup"
                width={260}
                height={490}
                className="object-contain lg:min-h-[500px] mx-auto"
              />
            </>
          ) : activeFeatues === "Analytics & Investment Tools" ? (
            <>
              <Image
                src={"/industries/real-estate/real-estate-features-mockup.png"}
                alt="patient-screen-mobile-mockup"
                width={260}
                height={490}
                className="object-contain lg:min-h-[500px] mx-auto"
              />
            </>
          ) : activeFeatues === "Secure e-Signatures & Document Management" ? (
            <>
              <Image
                src={"/industries/real-estate/real-estate-features-mockup.png"}
                alt="patient-screen-mobile-mockup"
                width={260}
                height={490}
                className="object-contain lg:min-h-[500px] mx-auto"
              />
            </>
          ) : (
            <>
              <Image
                src={"/industries/real-estate/real-estate-features-mockup.png"}
                alt="patient-screen-mobile-mockup"
                width={260}
                height={490}
                className="object-contain lg:min-h-[500px] mx-auto"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default RealEstateFeatures;

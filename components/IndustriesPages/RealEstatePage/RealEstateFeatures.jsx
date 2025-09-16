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
    width: 17,
    height: 20,
  },
  {
    title: "Agent & Broker CRM Automation",
    icon: "/industries/real-estate/agent-and-broker-icon.png",
    width: 21,
    height: 20,
  },
  {
    title: "Virtual Tours & AR/VR Experiences",
    icon: "/industries/real-estate/virtual-tours-icon.png",
    width: 20,
    height: 20,
  },
  {
    title: "Tenant & Landlord Management Portals",
    icon: "/industries/real-estate/tenant-and-landlord-icon.png",
    width: 20,
    height: 20,
  },
  {
    title: "Property Management Dashboards",
    icon: "/industries/real-estate/propert-management-dashboard-icon.png",
    width: 23,
    height: 20,
  },
  {
    title: "Analytics & Investment Tools",
    icon: "/industries/real-estate/analytics-icon.png",
    width: 17,
    height: 19,
  },
  {
    title: "Secure e-Signatures & Document Management",
    icon: "/industries/real-estate/propert-management-dashboard-icon.png",
    width: 23,
    height: 20,
  },
  {
    title: "Property Financing & Evaluation Tools",
    icon: "/industries/real-estate/analytics-icon.png",
    width: 17,
    height: 19,
  },
];

const RealEstateFeatures = () => {
  const [activeFeatues, setActiveFeatures] = useState(features_tabs[0]?.title);

  const handleChangeFeature = (f) => {
    setActiveFeatures(f);
  };
  return (
    <section className="w-full py-20 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">Features</h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Our healthcare applications are built on a foundation of
          interoperability, security, and scalability. We combine
          industry-proven standards with modern technologies to deliver
          solutions that are compliant, reliable, and ready for the evolving
          digital health landscape.
        </p>
      </section>

      <div className="w-full bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16">
        {features_tabs?.map((tab, i) => {
          return (
            <button
              type="button"
              onClick={() => handleChangeFeature(tab?.title)}
              className={`flex items-center text-start gap-2 lg:w-[200px]`}
              key={i}
            >
              <Image
                src={tab?.icon}
                alt={`${tab?.title}`}
                width={tab?.width}
                height={tab?.height}
              />
              <span
                className={`text-base leading-[1.1] font-medium text-gray-600 pb-2 border-b-4 ${
                  activeFeatues === tab?.title
                    ? " border-[#F40E00]"
                    : "border-white"
                }`}
              >
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

"use client";
import {
  HEALTHCARE_ADMIN_SCREEN_CONTENT,
  HEALTHCARE_DOCTOR_SCREEN_CONTENT,
  HEALTHCARE_PATIENT_SCREEN_CONTENT,
} from "@/constants/industries/healthcare-page-content/healthcare-features";
import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import Image from "next/image";

const Features = () => {
  const [activeFeatues, setActiveFeatures] = useState("patient");

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

      <div className="w-full h-[100px] custom-shadow bg-white rounded-[13px] flex items-center justify-around mt-16">
        <button
          type="button"
          onClick={() => handleChangeFeature("patient")}
          className={`flex items-center justify-center flex-col gap-2 group md:w-[180px] lg:w-[242px] rounded-[19px] relative ${
            activeFeatues === "patient" && "h-[124px] custom-shadow bg-white"
          }`}
        >
          <img
            src="/industries/healthcare/patient-screen-tab-icon.png"
            alt="patient-screen-tab-icon"
            width={29}
            height={30}
            className={`object-contain transition duration-200 group-hover:[filter:brightness(0)_saturate(100%)_invert(18%)_sepia(94%)_saturate(5591%)_hue-rotate(3deg)_brightness(99%)_contrast(118%)] ${
              activeFeatues === "patient" &&
              "[filter:brightness(0)_saturate(100%)_invert(18%)_sepia(94%)_saturate(5591%)_hue-rotate(3deg)_brightness(99%)_contrast(118%)]"
            }`}
          />
          <span
            className={`text-sm lg:text-lg group-hover:text-[#F40E00] transition-all duration-200 ${
              activeFeatues === "patient"
                ? "text-[#F40E00] font-semibold"
                : "text-[#9E9E9E]"
            }`}
          >
            Patient Screen
          </span>

          <div
            className={`w-[74px] h-[7px] bg-[#F40E00] absolute left-1/2 -translate-x-1/2 bottom-0 rounded-t-xl invisible ${
              activeFeatues === "patient" && "visible"
            }`}
          />
        </button>

        <button
          type="button"
          onClick={() => handleChangeFeature("doctor")}
          className={`flex items-center justify-center flex-col gap-2 group md:w-[180px] lg:w-[242px] rounded-[19px] relative ${
            activeFeatues === "doctor" && "h-[124px] custom-shadow bg-white"
          }`}
        >
          <img
            src="/industries/healthcare/sergeon-icon.png"
            alt="sergeon-icon"
            width={30}
            height={30}
            className={`object-contain transition duration-200 group-hover:[filter:brightness(0)_saturate(100%)_invert(18%)_sepia(94%)_saturate(5591%)_hue-rotate(3deg)_brightness(99%)_contrast(118%)] ${
              activeFeatues === "doctor" &&
              "[filter:brightness(0)_saturate(100%)_invert(18%)_sepia(94%)_saturate(5591%)_hue-rotate(3deg)_brightness(99%)_contrast(118%)]"
            }`}
          />
          <span
            className={`text-sm lg:text-lg group-hover:text-[#F40E00] transition-all duration-200 ${
              activeFeatues === "doctor"
                ? "text-[#F40E00] font-semibold"
                : "text-[#9E9E9E]"
            }`}
          >
            Doctor/Surgeon Screen
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleChangeFeature("admin")}
          className={`flex items-center justify-center flex-col gap-2 group md:w-[180px] lg:w-[242px] rounded-[19px] relative ${
            activeFeatues === "admin" && "h-[124px] custom-shadow bg-white"
          }`}
        >
          <img
            src="/industries/healthcare/dashboard-screen-icon.png"
            alt="dashboard-screen-icon"
            width={34}
            height={30}
            className={`object-contain transition duration-200 group-hover:[filter:brightness(0)_saturate(100%)_invert(18%)_sepia(94%)_saturate(5591%)_hue-rotate(3deg)_brightness(99%)_contrast(118%)] ${
              activeFeatues === "admin" &&
              "[filter:brightness(0)_saturate(100%)_invert(18%)_sepia(94%)_saturate(5591%)_hue-rotate(3deg)_brightness(99%)_contrast(118%)]"
            }`}
          />
          <span
            className={`text-sm lg:text-lg group-hover:text-[#F40E00] transition-all duration-200 ${
              activeFeatues === "admin"
                ? "text-[#F40E00] font-semibold"
                : "text-[#9E9E9E]"
            }`}
          >
            Admin Dashboard
          </span>
        </button>
      </div>

      <div className="w-full bg-[#F9F9F9] rounded-[17px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-10 py-10 lg:py-20 mt-16">
        <div className="flex flex-col items-start gap-4">
          {activeFeatues === "patient" ? (
            <>
              {HEALTHCARE_PATIENT_SCREEN_CONTENT?.slice(0, 3)?.map(
                (feature, i) => {
                  return <FeatureCard feature={feature} key={i} />;
                }
              )}
            </>
          ) : activeFeatues === "doctor" ? (
            <>
              {HEALTHCARE_DOCTOR_SCREEN_CONTENT?.slice(0, 3)?.map(
                (feature, i) => {
                  return <FeatureCard feature={feature} key={i} />;
                }
              )}
            </>
          ) : (
            <>
              {HEALTHCARE_ADMIN_SCREEN_CONTENT?.slice(0, 3)?.map(
                (feature, i) => {
                  return <FeatureCard feature={feature} key={i} />;
                }
              )}
            </>
          )}
        </div>
        <div className="hidden lg:flex justify-center items-center">
          {activeFeatues === "patient" ? (
            <Image
              src={"/industries/healthcare/patient-screen-mobile-mockup.png"}
              alt="patient-screen-mobile-mockup"
              width={250}
              height={490}
              className="object-contain lg:min-h-[500px]"
            />
          ) : activeFeatues === "doctor" ? (
            <Image
              src={"/industries/healthcare/doctor-screen-mobile-mockup.png"}
              alt="doctor-screen-mobile-mockup"
              width={250}
              height={490}
              className="object-contain lg:min-h-[500px]"
            />
          ) : (
            <Image
              src={"/industries/healthcare/admin-mobile-screen-mockup.png"}
              alt="admin-mobile-screen-mockup"
              width={250}
              height={490}
              className="object-contain lg:min-h-[500px]"
            />
          )}
        </div>
        <div className="flex flex-col items-start gap-4">
          {HEALTHCARE_PATIENT_SCREEN_CONTENT?.slice(3, 6)?.map((feature, i) => {
            return <FeatureCard feature={feature} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

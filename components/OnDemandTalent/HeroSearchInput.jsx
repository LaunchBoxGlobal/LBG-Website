"use client";
import React, { useEffect, useState } from "react";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { AiOutlineBulb } from "react-icons/ai";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa";

const relatedPages = [
  {
    title: "Build My Project",
    url: "/services/mobile-app-development",
    icon: "/on-demand-talent/dedicated-software-team-icon.png",
    iconWidth: 21,
    iconHeight: 19,
  },
  {
    title: "Build My Team",
    url: "/off-shore-software-development",
    icon: "/on-demand-talent/software-development-outsourcing-icon.png",
    iconWidth: 19,
    iconHeight: 19,
  },
  {
    title: "Provide Me Talents",
    url: "/contact-us",
    icon: "/on-demand-talent/related-page-icon-3.png",
    iconWidth: 21,
    iconHeight: 19,
  },
];

const HeroSearchInput = () => {
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const showToast = (message, type = "info") => {
    setToast({ show: true, message, type });
    // Auto-hide after 3s
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  useEffect(() => {
    formik.setFieldValue("pageUrl", window.location.href);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      service: "",
      emailSubject: "New Email From On-Demand Page",
    },
    validationSchema: Yup.object({
      service: Yup.string().required("Please select a service"), // Enforce selection
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await axios.post(`/api/submit-form`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res?.status === 200) {
          resetForm();
          setSelectedService(""); // Clear selected service after submit
          // alert("Form submitted successfully!");
          showToast("Form submitted successfully", "success");
        }
      } catch (error) {
        // alert("Something went wrong!");
        showToast("Something went wrong!", "error");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleServiceSelect = (serviceTitle) => {
    setSelectedService(serviceTitle);
    formik.setFieldValue("service", serviceTitle);
  };

  const handleSubmitWithValidation = (e) => {
    e.preventDefault();
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        if (errors.email) showToast(errors.email, "error");
        if (errors.service) showToast(errors.service, "error");
      } else {
        formik.handleSubmit();
      }
    });
  };

  return (
    <>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
      )}
      <form
        onSubmit={handleSubmitWithValidation}
        className="w-full flex items-center justify-center gap-4 mt-3 mb-8 z-10 relative"
      >
        <div className="w-full max-w-[902px] mx-auto">
          <div className="w-full bg-white custom-shadow p-1.5 rounded-[7px]">
            <div
              className={`w-full mx-auto flex items-center justify-between h-[39px] md:h-[49px] lg:h-[60px] border rounded-[7px] bg-gray-50 relative`}
            >
              <div className="w-full h-full flex items-center gap-3 pl-3 bg-transparent relative cursor-pointer">
                <AiOutlineBulb className="text-3xl text-gray-500 hidden lg:block" />
                <input
                  type="text"
                  placeholder="Drop your email address!"
                  name="email"
                  {...formik.getFieldProps("email")}
                  className="w-full h-full bg-transparent outline-none placeholder:text-xs text-xs lg:text-lg"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`h-full lg:min-w-[344px] text-white red-bg cursor-pointer rounded-[7px] px-5 hidden lg:flex items-center justify-center text-center text-lg font-bold ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <IoSearchOutline className="text-3xl text-gray-100 lg:hidden block" />
                <span className="lg:block hidden">
                  Request 30 min free consultation
                </span>
              </button>
            </div>
            {/* Show error if no service selected */}
            {formik.touched.service && formik.errors.service && (
              <p className="text-red-500 text-xs mt-1 pl-2">
                {formik.errors.service}
              </p>
            )}
            {/* Show error for email */}
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1 pl-2">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col items-center lg:flex-row justify-center gap-3 mt-5 lg:mt-10">
            <button
              type="submit"
              disabled={loading}
              className={`h-[36px] w-[196px] text-white red-bg cursor-pointer rounded-[7px] px-5 lg:hidden flex items-center justify-center text-center text-xs font-bold mb-4 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <span>Request 30 min free consultation</span>
            </button>

            {/* Related Service Buttons */}
            {relatedPages?.map((page, index) => {
              const isSelected = selectedService === page.title;
              return (
                <button
                  type="button"
                  onClick={() => handleServiceSelect(page.title)}
                  className={`flex items-center justify-center gap-2 rounded-full px-5 py-3 transition-colors duration-300 ${
                    isSelected
                      ? "bg-red-500 text-white"
                      : "bg-white custom-light-red-shadow"
                  }`}
                  key={index}
                >
                  <Image
                    src={page?.icon}
                    width={page?.iconWidth}
                    height={page?.iconHeight}
                    alt={`${page?.title}-icon`}
                    className={`${
                      isSelected &&
                      "transition duration-300 invert brightness-0"
                    }`}
                  />
                  <p className="text-xs lg:text-base font-semibold">
                    {page?.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </form>
    </>
  );
};

export default HeroSearchInput;

export const Toast = ({ message, type = "info", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto close after 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-10 right-5 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in-out
        ${type === "success" ? "bg-green-100 text-green-600" : ""}
        ${type === "error" ? "bg-red-100 text-red-600" : ""}
        ${type === "info" ? "bg-blue-100 text-blue-600" : ""}`}
    >
      <div
        className={`w-6 h-6 rounded-full p-1 ${
          type === "error"
            ? "bg-red-500"
            : type === "success"
            ? "bg-green-500"
            : type === "info"
            ? "bg-blue-500"
            : "bg-gray-400"
        }`}
      >
        {type === "error" ? (
          <IoClose className="w-full h-full text-white" />
        ) : type === "success" ? (
          <FaCheck className="w-full h-full text-white" />
        ) : type === "info" ? (
          <FaExclamation className="w-full h-full text-white" />
        ) : (
          <FaExclamation className="w-full h-full text-white" />
        )}
      </div>
      <div className="font-semibold text-lg">{message}</div>
    </div>
  );
};

"use client";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import ButtonLoader from "../Global/ButtonLoader";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      service: "",
      email: "",
      phoneNumber: "",
      message: "",
      pageUrl: window.location.href,
      emailSubject: "New Contact Form Website",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name is required"),
      service: Yup.string().required("Please select a service"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      phoneNumber: Yup.string()
        .min(10, "Phone number must be 10-11 digits")
        .max(11, "Phone number must be 11 digits")
        .required("phone number is required"),
      message: Yup.string()
        .min(100, "Message must be at least 100 characters")
        .max(500, "Message cannot exceed 500 characters")
        .required("Message is required"),
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
          // console.log("res >>>>", res);

          resetForm();
          alert("Form submitted successfully!");
        }
      } catch (error) {
        // console.log("error while submitting form >>>", error);
        alert("Something went wrong!");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <section
      className={`w-full pb-10 lg:pb-20 padding-x flex items-center justify-center relative overflow-hidden`}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="w-full lg:w-[70%] 2xl:w-[60%] flex flex-col items-start gap-6 z-10 pb-10"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="flex flex-col items-start gap-1">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              {...formik.getFieldProps("firstName")}
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col items-start gap-1">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-900"
            >
              I'm interested in
            </label>
            <select
              id="service"
              name="service"
              {...formik.getFieldProps("service")}
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60"
            >
              <option defaultValue={""} value="">
                Choose a service
              </option>
              <option value="mobileAppDevelopment">
                Mobile App Development
              </option>
              <option value="webAppDevelopment">Web App Development</option>
              <option value="softwareDevelopment">Software Development</option>
              <option value="ecommerceDevelopment">
                E-Commerce Development
              </option>
              <option value="digitalMarketing">Digital Marketing</option>
              <option value="brandingAndDesign">Branding & Designing</option>
            </select>
            {formik.touched.service && formik.errors.service ? (
              <div className="text-red-500 text-sm">
                {formik.errors.service}
              </div>
            ) : null}
            {/* <input
              type="text"
              id="lastName"
              name="lastName"
              {...formik.getFieldProps("lastName")}
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60"
              //   placeholder="Last name"
            /> */}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col items-start gap-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...formik.getFieldProps("email")}
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60"
              //   placeholder="First name"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col items-start gap-1">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-900"
            >
              Your Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              {...formik.getFieldProps("phoneNumber")}
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60"
              //   placeholder="000 2345 6789"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-900"
          >
            Project Description
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="8"
            {...formik.getFieldProps("message")}
            className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60"
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          ) : null}
        </div>

        <div className="flex justify-end w-full">
          <button
            type="submit"
            className="bg-[#F40E00] text-white px-5 min-w-[220px] lg:px-7 py-4 2xl:py-8 font-bold rounded-xl flex items-center justify-center gap-2 text-sm lg:text-lg 2xl:text-[25px] "
          >
            {loading ? <ButtonLoader /> : "Schedule A Meeting"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUsForm;

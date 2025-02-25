"use client";
import { useFormik } from "formik";
import Image from "next/image";
import React from "react";
import * as Yup from "yup";

const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name is required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last name is required"),
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
    onSubmit: (values, { resetForm }) => {
      console.log("values >>>", values);
      resetForm();
    },
  });
  return (
    <section
      className={`w-full pb-10 lg:pb-20 padding-x flex items-center justify-center relative overflow-hidden`}
    >
      <Image
        src={"/map.jpg"}
        width={500}
        height={500}
        alt="world map image"
        className="w-[80%] lg:w-[70%] h-[50vh] lg:h-[70vh] 2xl:h-[55vh] absolute inset-0 left-1/2 transform -translate-x-1/2 opacity-45"
      />
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
              First Name
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
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              {...formik.getFieldProps("lastName")}
              className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#F40E00] focus:border-[#F40E00] outline-[#F40E00] block w-full p-3.5 opacity-60"
              //   placeholder="Last name"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col items-start gap-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
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
              Phone
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
            Message
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
          <button type="submit" className="red-btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUsForm;

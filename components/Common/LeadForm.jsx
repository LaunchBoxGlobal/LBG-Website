"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LeadForm = ({ title, buttonTitle }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name can not be less than 3 characters")
        .max(15, "Name can not be more than 25 characters")
        .required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      phoneNumber: Yup.string()
        .min(10, "Must be 10 digits")
        .max(10, "Must be 10 digits")
        .required("Please enter your phone number"),
    }),
    onSubmit: (values, { resetForm }) => {
      //   alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full bg-white rounded-2xl p-5 lg:p-10 text-black"
    >
      <h2 className="text-[30px] lg:text-[40px] leading-8 lg:leading-[44px]">
        {title ? (
          title
        ) : (
          <>
            Less stress. More success.{" "}
            <span className="red-text">Let’s go!</span>
          </>
        )}
      </h2>

      <div className="w-full mt-7 flex flex-col items-start gap-3 lg:gap-5">
        <div className="w-full">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#212121]"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="pb-2 pt-1 block w-full border-b border-gray-800 lg:text-lg outline-none"
          />
          <div className="w-full">
            {formik.touched.name && formik.errors.name ? (
              <span className="text-xs red-text">{formik.errors.name}</span>
            ) : null}
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#212121]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="pb-2 pt-1 block w-full border-b border-gray-800 lg:text-lg outline-none"
          />
          <div className="w-full">
            {formik.touched.email && formik.errors.email ? (
              <span className="text-xs red-text">{formik.errors.email}</span>
            ) : null}
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-[#212121]"
          >
            Number
          </label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className="pb-2 pt-1 block w-full border-b border-gray-800 lg:text-lg outline-none"
          />
          <div className="w-full">
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <span className="text-xs red-text">
                {formik.errors.phoneNumber}
              </span>
            ) : null}
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="bg-[#212121] text-white w-full rounded-full h-[45px] text-sm lg:text-lg font-semibold hover:bg-[#F40E00] transition-all duration-300"
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </form>
  );
};

export default LeadForm;

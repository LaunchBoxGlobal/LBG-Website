"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonLoader from "../Global/ButtonLoader";
import axios from "axios";
import Link from "next/link";
import Select from "react-select";

const ServiceForm = ({ title, buttonTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    formik.setFieldValue("pageUrl", window.location.href);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phoneNumber: "",
      interestedIn: "",
      description: "",
      emailSubject: "New Contact Form From Home Page",
      agreeToTermsConditions: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(25, "Name cannot exceed 25 characters")
        .required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
      phoneNumber: Yup.string()
        .matches(/^\d{10}$/, "Must be a valid 10-digit number")
        .required("Please enter your phone number"),
      interestedIn: Yup.string().required("Please select an option"),
      description: Yup.string()
        .min(3, "Description must be at least 3 characters")
        .max(250, "Description cannot exceed 250 characters")
        .required("Please enter a description"),
      agreeToTermsConditions: Yup.boolean().oneOf([true], "*"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await axios.post(`/api/submit-form`, values, {
          headers: { "Content-Type": "application/json" },
        });
        if (res?.status === 200) {
          resetForm();
          alert("Form submitted successfully!");
        }
      } catch (error) {
        console.log("Error while submitting form >>>", error);
        alert("Something went wrong!");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full bg-transparent px-12 py-8 rounded-2xl text-white"
    >
      <div className="w-full flex flex-col items-start gap-3 lg:gap-5">

        <div className="w-full">
          <label htmlFor="firstName" className="block text-sm text-gray-300">
            Your Name*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className="pb-2 pt-1 block w-full border-b border-gray-300 bg-transparent text-sm outline-none"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <span className="text-xs red-text">{formik.errors.firstName}</span>
          )}
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block text-sm text-gray-300">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="pb-2 pt-1 block w-full border-b border-gray-300 bg-transparent text-sm outline-none"
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-xs red-text">{formik.errors.email}</span>
          )}
        </div>

        <div className="w-full">
          <label htmlFor="phoneNumber" className="block text-sm text-gray-300">
            Number*
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className="pb-2 pt-1 block w-full border-b border-gray-300 bg-transparent text-sm outline-none"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <span className="text-xs red-text">{formik.errors.phoneNumber}</span>
          )}
        </div>

      <div className="w-full">
  <label htmlFor="interestedIn" className="block text-sm text-gray-300">
    Interested In*
  </label>
  <Select
    id="interestedIn"
    name="interestedIn"
    options={[
      { value: "Mobile App Development", label: "Mobile App Development" },
      { value: "Web App Development", label: "Web App Development" },
      { value: "UI/UX Design", label: "UI/UX Design" },
      { value: "Digital Marketing", label: "Digital Marketing" },
    ]}
    value={
      formik.values.interestedIn
        ? { value: formik.values.interestedIn, label: formik.values.interestedIn }
        : null
    }
    onChange={(option) =>
      formik.setFieldValue("interestedIn", option?.value || "")
    }
    onBlur={() => formik.setFieldTouched("interestedIn", true)}
    placeholder="Select an option"
    classNamePrefix="react-select"
    styles={{
      control: (base, state) => ({
        ...base,
        backgroundColor: "transparent",
        border: "none",
        borderBottom: "1px solid #d1d5db", // Tailwind's gray-300
        borderRadius: 0,
        boxShadow: "none",
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
        "&:hover": {
          borderBottom: "1px solid white",
        },
      }),
      singleValue: (base) => ({
        ...base,
        color: "#fff",
      }),
      menu: (base) => ({
        ...base,
        backgroundColor: "#2a2a2a",
        color: "#fff",
        borderRadius: "0.5rem",
        zIndex: 10,
      }),
      option: (base, { isFocused }) => ({
        ...base,
        backgroundColor: isFocused ? "#F40E00" : "transparent",
        color: "#fff",
        cursor: "pointer",
      }),
      placeholder: (base) => ({
        ...base,
        color: "#aaa",
      }),
      dropdownIndicator: (base) => ({
        ...base,
        color: "#fff",
        "&:hover": { color: "#F40E00" },
      }),
    }}
  />
  {formik.touched.interestedIn && formik.errors.interestedIn && (
    <span className="text-xs red-text">{formik.errors.interestedIn}</span>
  )}
</div>

        <div className="w-full">
          <label htmlFor="description" className="block text-sm text-gray-300">
            Description*
          </label>
          <textarea
            id="description"
            name="description"
            rows="2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="pb-2 pt-1 block w-full border-b border-gray-300 bg-transparent text-sm outline-none"
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <span className="text-xs red-text">{formik.errors.description}</span>
          )}
        </div>

      
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="agreeToTermsConditions"
            {...formik.getFieldProps("agreeToTermsConditions")}
          />
          <label
            htmlFor="agreeToTermsConditions"
            className="leading-[1.3] text-sm relative -top-0.5 text-gray-300"
          >
            By checking this box, I agree to receive SMS from LaunchBox Global
            at the phone number provided. Msg & data rates may apply. Msg
            frequency varies. For help, reply HELP or email us at
            hello@launchboxglobal.com. You can opt out at any time by replying
            STOP.{" "}
            <Link href="/privacy-policy" className="underline mx-1">
              Privacy & Policy
            </Link>{" "}
            &{" "}
            <Link href="/terms-and-conditions" className="underline mx-1">
              Terms and Conditions
            </Link>.
            {formik.touched.agreeToTermsConditions &&
              formik.errors.agreeToTermsConditions && (
                <span className="text-red-500 text-2xl absolute">*</span>
              )}
          </label>
        </div>


        <div className="w-full">
          <button
            type="submit"
            className="bg-[#F40E00] text-white w-full rounded-full h-[50px] text-sm text-sm font-semibold hover:bg-[#c40b00] transition-all duration-300"
          >
            {loading ? <ButtonLoader /> : buttonTitle}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ServiceForm;

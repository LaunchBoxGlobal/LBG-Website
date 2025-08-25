"use client";
import PopupFormAnimation from "./PopupFormAnimation";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonLoader from "./ButtonLoader";
import axios from "axios";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const PopupForm = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    formik.setFieldValue("pageUrl", window.location.href);
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phoneNumber: "",
      // pageUrl: window.location.href,
      emailSubject: "New Contact Form From Service Page",
      // textMessagesCheckbox: false,
      agreeToTermsConditions: false,
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
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
      // textMessagesCheckbox: Yup.boolean().oneOf([true], "*"),
      agreeToTermsConditions: Yup.boolean().oneOf([true], "*"),
      message: Yup.string()
        .min(100, "Message can not be less than 100 characters")
        .max(1000, "Message can not be more than 1000 characters")
        .required("Please enter the message"),
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
        console.log("error while submitting form >>>", error);
        alert("Something went wrong!");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    isOpen && (
      <div
        className={`w-full min-h-screen bg-[rgba(0,0,0,0.4)] fixed inset-0 z-50 flex items-center justify-center px-4 py-10`}
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-8 h-8 rounded-full p-1 bg-white flex items-center justify-center absolute top-[5%] right-[2%]"
        >
          <IoClose className="w-full h-full text-gray-600" />
        </button>
        <div className="lg:w-[90%] midlg:w-[80%] bg-white grid grid-cols-2 rounded-[46px]">
          <div className="bg-[#f9f9f9] rounded-l-[46px]">
            <PopupFormAnimation />
          </div>
          <div className="p-10">
            <form
              onSubmit={formik.handleSubmit}
              className="w-full bg-white text-black lg:max-w-[80%] mx-auto"
            >
              <div className="w-full mt-7 flex flex-col items-start gap-3 lg:gap-5">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[#212121]"
                  >
                    Your Name{" "}
                    <span>
                      {" "}
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <span className="text-lg red-text">*</span>
                      ) : null}
                    </span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className="pb-2 pt-1 block w-full border-b border-gray-800 lg:text-lg outline-none"
                  />
                  {/* <div className="w-full">
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <span className="text-xs red-text">
                      {formik.errors.firstName}
                    </span>
                  ) : null}
                </div> */}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#212121]"
                  >
                    Email{" "}
                    <span>
                      {" "}
                      {formik.touched.email && formik.errors.email ? (
                        <span className="text-lg red-text">*</span>
                      ) : null}
                    </span>
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
                  {/* <div className="w-full">
                  {formik.touched.email && formik.errors.email ? (
                    <span className="text-xs red-text">
                      {formik.errors.email}
                    </span>
                  ) : null}
                </div> */}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-[#212121]"
                  >
                    Number{" "}
                    <span>
                      {formik.touched.phoneNumber &&
                      formik.errors.phoneNumber ? (
                        <span className="text-lg red-text">*</span>
                      ) : null}
                    </span>
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
                  {/* <div className="w-full">
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <span className="text-xs red-text">
                      {formik.errors.phoneNumber}
                    </span>
                  ) : null}
                </div> */}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#212121]"
                  >
                    Message{" "}
                    <span>
                      {formik.touched.message && formik.errors.message ? (
                        <span className="text-lg red-text">*</span>
                      ) : null}
                    </span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className="pb-2 pt-1 block w-full border-b border-gray-800 lg:text-lg outline-none"
                  ></textarea>
                  {/* <div className="w-full">
                  {formik.touched.message && formik.errors.message ? (
                    <span className="text-xs red-text">
                      {formik.errors.message}
                    </span>
                  ) : null}
                </div> */}
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="agreeToTermsConditions"
                    id="agreeToTermsConditions"
                    {...formik.getFieldProps("agreeToTermsConditions")}
                  />
                  <label
                    htmlFor="agreeToTermsConditions"
                    className="leading-[1.3] text-xs relative -top-0.5"
                  >
                    By checking this box, I agree to receive SMS from LaunchBox
                    Global at the phone number provided. Msg & data rates may
                    apply. Msg frequency varies. For help, reply HELP or email
                    us at hello@launchboxglobal.com. You can opt out at any time
                    by replying STOP.{" "}
                    <Link href={`/privacy-policy`} className="underline mx-1">
                      Privacy & Policy
                    </Link>{" "}
                    &{" "}
                    <Link
                      href={`/terms-and-conditions`}
                      className="underline mx-1"
                    >
                      Terms and Conditions.
                    </Link>{" "}
                    {formik.touched.agreeToTermsConditions &&
                    formik.errors.agreeToTermsConditions ? (
                      <span className="text-red-500 text-2xl absolute">*</span>
                    ) : null}
                  </label>
                </div>

                <div className="w-full">
                  <button
                    type="submit"
                    className="hover:bg-[#212121] text-white w-full rounded-full h-[55px] text-sm lg:text-lg font-semibold bg-[#F40E00] transition-all duration-300"
                  >
                    {loading ? <ButtonLoader /> : `Get Your Free App Plan!`}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default PopupForm;

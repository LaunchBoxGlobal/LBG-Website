"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ButtonLoader from "../Global/ButtonLoader";

const BlogsContactForm = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    formik.setFieldValue("pageUrl", window.location.href);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      message: "",
      // pageUrl: window.location.href,
      emailSubject: "New Contact Form From Blogs Archive Page",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Name can not be less than 3 characters")
        .max(15, "Name can not be more than 25 characters")
        .required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      message: Yup.string()
        .min(100, "Must be 100 characters")
        .max(1000, "Can not be more than 1000 characters.")
        .required("Please enter your message."),
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
    <section className="w-full flex items-center justify-between flex-wrap">
      <h2 className="text-[108px] lg:text-[158px] relative flex flex-col items-center lg:items-start leading-none m-0 p-0 w-full lg:w-[40%]">
        <span className="text-black font-semibold block">Let's</span>
        <span className="red-text font-extrabold block relative top-[-37px] md:top-[-55px] left-[-5px] md:left-[-10px]">
          Talk!
        </span>
      </h2>
      <div className="w-full lg:w-[60%]">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full bg-[#F2F2F2] rounded-2xl lg:rounded-[38.78] p-[2rem] flex flex-col items-start gap-3"
        >
          <div className="w-full">
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="w-full h-[56px] bg-white block rounded-[15px] text-black placeholder:text-black outline-none px-5"
              placeholder="Name"
            />
            <div className="w-full">
              {formik.touched.firstName && formik.errors.firstName ? (
                <span className="text-xs red-text">
                  {formik.errors.firstName}
                </span>
              ) : null}
            </div>
          </div>
          <div className="w-full">
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full h-[56px] bg-white block rounded-[15px] text-black placeholder:text-black outline-none px-5"
              placeholder="Email"
            />
            <div className="w-full">
              {formik.touched.email && formik.errors.email ? (
                <span className="text-xs red-text">{formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="w-full">
            <textarea
              name="message"
              id="message"
              rows="10"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder="Message"
              className="w-full h-[114px] bg-white block rounded-[15px] text-black placeholder:text-black outline-none p-5"
            ></textarea>
            <div className="w-full">
              {formik.touched.message && formik.errors.message ? (
                <span className="text-xs red-text">
                  {formik.errors.message}
                </span>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[56px] bg-[#F40E00] block rounded-[15px] text-white text-center uppercase font-bold outline-none px-5"
          >
            {loading ? <ButtonLoader /> : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BlogsContactForm;

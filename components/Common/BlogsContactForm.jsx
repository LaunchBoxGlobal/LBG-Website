"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BlogsContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name can not be less than 3 characters")
        .max(15, "Name can not be more than 25 characters")
        .required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      message: Yup.string()
        .min(100, "Message can not be less than 100 characters")
        .max(600, "Message can not be less than 600 characters")
        .required("Please enter a message"),
    }),
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      resetForm();
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
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full h-[56px] bg-white block rounded-[15px] text-black placeholder:text-black outline-none px-5"
              placeholder="Name"
            />
            <div className="w-full">
              {formik.touched.name && formik.errors.name ? (
                <span className="text-xs red-text">{formik.errors.name}</span>
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
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default BlogsContactForm;

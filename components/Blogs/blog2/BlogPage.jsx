"use client";
import BlogsContactForm from "@/components/Common/BlogsContactForm";
import { BLOG_TWO_FAQS } from "@/constants/blogs/blogTwoFaqs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const content = [
  {
    title: "Introduction",
    id: "introduction",
  },
  {
    title: "What apps replace TikTok?",
    id: "WhatAppsReplaceTikTok",
  },
  {
    title: "Apps like TikTok for adults",
    id: "AppslikeTikTokforadults",
  },
  {
    title: "Why to look for apps like TikTok alternatives",
    id: "WhytolookforappslikeTikTokalternatives",
  },
  {
    title: "Conclusion",
    id: "conclusion",
  },
  {
    title: "FAQs",
    id: "faqs",
  },
];

const BlogPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <main className="w-full bg-white relative py-36 2xl:pt-52 padding-x flex flex-col gap-y-16 md:gap-y-20 xl:gap-y-28">
      <section className="w-full relative">
        <section className="w-full z-0 relative overflow-visible">
          <Image
            src={"/blog-01.jpg"}
            alt="blog-cover-image"
            width={1270}
            height={593}
            priority
            className="w-full rounded-[40px] cover-image"
          />
          <Image
            src={"/blog-cover-image-shadow.webp"}
            alt="blog-cover-image"
            width={1611.68}
            height={164.64}
            priority
            className="w-[1500px] h-[7rem] md:h-[10rem] lg:h-[14rem] rounded-[40px] cover-image absolute bottom-[-20%] lg:bottom-[-19%] xl:bottom-[-13%] inset-x-0 hidden lg:block"
          />
        </section>
        <section className="relative mt-5 lg:mt-0 lg:top-[-55px] xl:-top-[70px]">
          <h1 className="text-[28px] md:text-[48px] lg:text-[60px] xl:text-[80px] font-bold text-center leading-none tracking-tight">
            Top 6 Apps Like TikTok You Should{" "}
            <span className="red-text">Try in 2025</span>
          </h1>
        </section>
      </section>

      {/* content table */}
      <section className="w-full relative">
        <div className="w-full relative h-auto lg:h-[435px] mx-auto bg-gray-100 rounded-[40px] p-5 overflow-hidden">
          <Image
            src="/table-of-content-background-image.webp"
            alt="table-of-content-background-image"
            width={1271}
            height={435}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="w-full bg-black text-center rounded-[15px] py-3 relative z-10">
            <h2 className="text-[8.6vw] md:text-[5.5vw] lg:text-[44px] text-white">
              Table Of Content
            </h2>
          </div>
          <div className="w-full flex items-start flex-wrap gap-3 mt-6 relative z-10">
            {content?.map((c, i) => (
              <Link
                href={`#${c?.id}`}
                key={i}
                className="flex flex-col items-start gap-1 bg-white p-4 rounded-xl w-full md:w-[281px] min-h-[81.15px]"
              >
                <p className="text-[18px] font-bold text-black">0{i + 1}</p>
                <p className="text-[18px] text-[#212121] leading-5">
                  {c?.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* introduction */}
      <section
        id="introduction"
        className="w-full flex flex-col items-center text-center gap-3"
      >
        <h2 className="text-[8.6vw] md:text-[5.5vw] xl:text-[80px] font-bold">
          Introduction
        </h2>
        <p className="text-[18px] lg:text-[22px] leading-6 lg:leading-7 text-[#212121]">
          Are you looking for the best apps like TikTok? Then fear no more
          because you’re not alone. While TikTok started this trend for short
          videos, other apps have started to set up this trend. Either different
          trends want to be explored, you want to avoid the band in your region,
          or you want to try something different; there are many other apps like
          TikTok (Do Follow) *.
        </p>
        <p className="text-[18px] lg:text-[22px] leading-6 lg:leading-7 text-[#212121]">
          Or even better apps like TikTok, which can give you better experiences
          with new ongoing trends and features built-in into the app, are worthy
          enough in 2025. As the ban on TikTok created a hassle among the users,
          there are quite a few other apps.
        </p>
        <p className="text-[18px] lg:text-[22px] leading-6 lg:leading-7 text-[#212121]">
          Although TikTok started as the first lip-syncing app, it is now the
          most used app for video creation and sharing, with over 300 million
          downloads in the first quarter of 2020. Soon, it topped the charts of
          Facebook, Instagram, and WhatsApp.
        </p>
        <p className="text-[18px] lg:text-[22px] leading-6 lg:leading-7 text-[#212121]">
          So, if you are a TikTok lover, we have brought you more apps worthy
          than TikTok, which will make you hooked. Keep reading the blog for
          further information.
        </p>
      </section>

      <div className="w-full border hidden lg:block" />

      {/* what apps replace tiktok */}
      <section id="WhatAppsReplaceTikTok" className="w-full relative">
        <h3 className="text-[8.6vw] md:text-[5.5vw] lg:text-[60px] font-bold text-start leading-none tracking-tight">
          What Apps Replace <span className="red-text">TikTok</span>
        </h3>
        <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5">
          As discussed, TikTok can replace more and better apps that are the
          perfect fit for everyone, regardless of age. It is better for all
          ages, kids and adults:
        </p>

        <div className="w-full flex items-center justify-between flex-wrap mt-5 gap-5 lg:gap-0 lg:mt-20">
          <div className="">
            <p className="text-[18px] lg:text-[22px] text-[#212121] font-bold leading-6 lg:leading-7 text-start">
              Instagram Reels (It is best for Seamless sharing)
            </p>
            <ul className="w-full list-disc lg:px-6 flex flex-col items-start gap-1 mt-5">
              {[
                "It is a built feature in Instagram, so followers stay engaged",
                "Easy access to the stories and feed",
                "Connected story algorithm to discover easily",
              ].map((l, i) => {
                return (
                  <li
                    key={i}
                    className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7"
                  >
                    {l}
                  </li>
                );
              })}
            </ul>
          </div>
          <Image
            src={"/blog-03.png"}
            width={1270}
            height={593}
            alt=""
            className="rounded-[40px] lg:w-[400px] h-[220px] object-cover"
          />
        </div>
        <div className="w-full flex items-center justify-between flex-wrap mt-5 gap-5 lg:gap-0">
          <div className="">
            <p className="text-[18px] lg:text-[22px] text-[#212121] font-bold leading-6 lg:leading-7 text-start">
              YouTube Shorts (Best for Monetization)
            </p>
            <ul className="w-full list-disc lg:px-6 flex flex-col items-start gap-1 mt-5">
              {[
                "Gives a massive audience on YouTube",
                "Earning the revenue from the ads, which are pretty long videos",
                "Direct links to their website or the full-length content",
              ].map((l, i) => {
                return (
                  <li
                    key={i}
                    className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7"
                  >
                    {l}
                  </li>
                );
              })}
            </ul>
          </div>
          <Image
            src={"/blog-6.png"}
            width={1270}
            height={593}
            alt=""
            className="rounded-[40px] lg:w-[400px] h-[220px] object-cover border"
          />
        </div>
        <div className="w-full flex items-center justify-between flex-wrap mt-5 gap-5 lg:gap-0">
          <div className="">
            <p className="text-[18px] lg:text-[22px] text-[#212121] font-bold leading-6 lg:leading-7 text-start mt-5">
              Moj (It is best for the Indian users)
            </p>

            <ul className="w-full list-disc lg:px-6 flex flex-col items-start gap-1 mt-5">
              {[
                "India’s best alternative after the ban from the TikTok",
                "It can easily be understood by the locals",
                "Easy and similar editing tools",
              ].map((l, i) => {
                return (
                  <li
                    key={i}
                    className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7"
                  >
                    {l}
                  </li>
                );
              })}
            </ul>
          </div>
          <Image
            src={"/blog-05.png"}
            alt="blog-cover-image"
            width={1270}
            height={593}
            priority
            className="w-full rounded-[40px] lg:w-[400px] h-[220px] object-contain border"
          />
        </div>
        <div className="w-full flex items-center justify-between flex-wrap mt-5 gap-5">
          <div className="">
            <p className="text-[18px] lg:text-[22px] text-[#212121] font-bold leading-6 lg:leading-7 text-start mt-5">
              Clash (Best for Fair Pay)
            </p>
            <ul className="w-full list-disc lg:px-6 flex flex-col items-start gap-1 mt-5">
              {[
                "Transparent creator earning",
                "Growing Artist Community",
                "There are fewer spam trends than on TikTok",
              ].map((l, i) => {
                return (
                  <li
                    key={i}
                    className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7"
                  >
                    {l}
                  </li>
                );
              })}
            </ul>
          </div>
          <Image
            src={"/blog-04.png"}
            alt="blog-cover-image"
            width={1270}
            height={593}
            priority
            className="w-full rounded-[40px] lg:w-[400px] h-[220px] object-cover"
          />
        </div>
      </section>

      <div className="w-full border hidden lg:block" />

      <section id="AppslikeTikTokforadults" className="w-full relative">
        <section className="relative">
          <h2 className="text-[8.6vw] md:text-[5.5vw] lg:text-[60px] font-bold text-start leading-none tracking-tight">
            Apps Like TikTok for <span className="red-text">Adults</span>
          </h2>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5">
            Below is the list of the best Apps like TikTok, which are best for
            Adults if they are looking for the same or with better{" "}
            <Link href={"/services/mobile-app-development"}>
              mobile app development:
            </Link>
          </p>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5 lg:mt-10 font-bold">
            Instagram Reels:
          </p>

          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5">
            With over two billion monthly users, Instagram is one of the best of
            the top TikTok competitors. It's short-form videos, features, and
            reels that have the same features that TikTok fans love and want to
            explore. For example, it posts for the last 15-90 seconds. Reels is
            the feature on Instagram that lets you film, edit, and post short
            video clips in the app. The clips usually are seconds or minutes
            long. It is essential to access the latest version of Instagram on
            IOS or Android to access the Instagram reels. Reels can be found by
            swiping from the opening to the camera to the tapping reels.
          </p>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5 lg:mt-10 font-bold">
            YouTube Shorts:
          </p>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5">
            YouTube is also one of the apps like TikTok, which is quite trendy
            due to its massive audience for its long and detailed videos, easy
            access, and unrestricted use. Now, it's getting more and more famous
            because of its trendy YouTube shorts. Although the recommended
            shorts on YouTube are connected with the trending YouTube Shorts.
            So, whatever we browse on YouTube is connected with shorts. YouTube
            creators usually reshare their videos on YouTube to gain more and
            more massive views. YouTube attracts 1 billion users per day.
            YouTube also has paid options, which allow the videos to have zero
            ads while users watch them. YouTube shorts are 60 seconds long,
            which lets the longer videos into the smaller ones and makes it
            addictive for the user to scroll down more and more on the shorts.
          </p>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5 lg:mt-10 font-bold">
            Snapchat Spotlight:
          </p>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5">
            <Link
              href={"/https://www.snapchat.com"}
              target="_blank"
              rel="nofollow"
            >
              Snapchat Spotlight
            </Link>{" "}
            is one of the separate platforms from the messaging. Creators
            usually give short posts. While filming in the app. It delivers
            short videos, just like we see in TikTok; it has grown in popularity
            since it was introduced in 2020. Also, Snapchat reported that last
            month's total users' time spent while watching the spotlight was
            more than 125% per year. However, it is a bit different from other
            apps as it is quite hard to search for creators; they are looking in
            the spotlight, and it is difficult to pause the video in the middle
            of the streaming. Like other apps, this app is available for both
            IOS and Android and also needs the extended version of Snapchat.
          </p>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5 lg:mt-10 font-bold">
            Facebook Reels:
          </p>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5">
            Facebook reels allow users to post video clips that can be 90
            seconds long. Since Facebook and Instagram are both made by Meta,
            reels can be shared automatically, and they can be posted on
            Instagram or Facebook accounts, and vice versa. It is similar to the
            Instagram Reels. It allows users to post the reels to their
            accounts, which lets the audience grow via the Facebook reels. It
            lets its audience grow through the reel. It is available on both the
            software's.
          </p>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5 lg:mt-10 font-bold">
            Triller:
          </p>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5">
            Triller is also one of the most used apps, as is TikTok. It started
            gaining more attention when the members of the Trump family and the
            former president joined the TikTok discussions. Like TikTok, triller
            also offers music and video features that help users choose songs
            from the app's library. The app has similar social features, just
            like TikTok, with a big community and the following feed. The
            collaboration with the friend got easy with it. It offers more than
            TikTok itself for the app. It provides a vlog feature that lets you
            make or edit the video.
          </p>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5 lg:mt-10 font-bold">
            Twitch:
          </p>
          <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5">
            Twitch is also a great alternative for TikTok users who engage best
            with video live-streaming features. Twitch is owned by Amazon and
            features a collection of popular video streamers. Twitch was
            designed as a big platform for gaming content like e-sports
            tournaments and podcasts based on games, which has attracted a lot
            of live streamers to stream live in these genres.
          </p>
        </section>
      </section>

      <div className="w-full border hidden lg:block" />

      <section
        id="WhytolookforappslikeTikTokalternatives"
        className="w-full relative"
      >
        <h2 className="text-[8.6vw] md:text-[5.5vw] lg:text-[60px] font-bold text-start leading-none tracking-tight">
          Why to look for Apps like
          <span className="red-text">TikTok Alternatives</span>
        </h2>
        <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5">
          TikTok may give short videos, but there are a lot of other reasons to
          try different other platforms:
        </p>
        <p className="text-[18px] lg:text-[22px] text-[#212121] font-bold leading-6 lg:leading-7 text-start mt-5">
          Privacy & Security Concerns:
        </p>
        <ul className="w-full list-disc lg:px-6 flex flex-col items-start gap-1 mt-5">
          {[
            "Growing exploration of the data collection policies",
            "There can be regional bans in some of the countries, i.e., (Asia, US govt devices)",
            "Some of the alternatives offer better alternatives",
          ].map((l, i) => {
            return (
              <li
                key={i}
                className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7"
              >
                {l}
              </li>
            );
          })}
        </ul>
        <p className="text-[18px] lg:text-[22px] text-[#212121] font-bold leading-6 lg:leading-7 text-start mt-5">
          Algorithm Fatigue:
        </p>
        <ul className="w-full list-disc lg:px-6 flex flex-col items-start gap-1 mt-5">
          {[
            "TikTok’s attracting feed isn’t for everyone",
            "Also, other apps give priority to interest-based discovery in viral trends",
          ].map((l, i) => {
            return (
              <li
                key={i}
                className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7"
              >
                {l}
              </li>
            );
          })}
        </ul>
        <p className="text-[18px] lg:text-[22px] text-[#212121] font-bold leading-6 lg:leading-7 text-start mt-5">
          Monetization Differences
        </p>
        <ul className="w-full list-disc lg:px-6 flex flex-col items-start gap-1 mt-5">
          {[
            "YouTube shorts that share the ad revenue",
            "“Clash” offers the transparent creator payouts",
            "Instagram Reels that give the best sponsorships",
          ].map((l, i) => {
            return (
              <li
                key={i}
                className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7"
              >
                {l}
              </li>
            );
          })}
        </ul>
        <p className="text-[18px] lg:text-[22px] text-[#212121] font-bold leading-6 lg:leading-7 text-start mt-5">
          Content Variety
        </p>
        <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start mt-5">
          Some of the app’s focus on the following:
        </p>
        <ul className="w-full list-disc lg:px-6 flex flex-col items-start gap-1 mt-5">
          {[
            "Music (Triller)",
            "Professional skills (LinkedIn Shorts)",
            "Kid-Safe content (Zigazoo)",
          ].map((l, i) => {
            return (
              <li
                key={i}
                className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7"
              >
                {l}
              </li>
            );
          })}
        </ul>
        <p className="text-[18px] lg:text-[22px] text-[#212121] font-bold leading-6 lg:leading-7 text-start mt-5">
          Regional Availability
        </p>
        <ul className="w-full list-disc lg:px-6 flex flex-col items-start gap-1 mt-5">
          {[
            "Music (Triller)",
            "Professional skills (LinkedIn Shorts)",
            "Kid-Safe content (Zigazoo)",
          ].map((l, i) => {
            return (
              <li
                key={i}
                className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7"
              >
                {l}
              </li>
            );
          })}
        </ul>
      </section>

      <div className="w-full border hidden lg:block" />

      {/* Conslusion */}
      <section id="conclusion" className="relative">
        <h2 className="text-[8.6vw] md:text-[5.5vw] lg:text-[60px] font-bold text-center leading-none tracking-tight">
          Conslusion
        </h2>
        <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-center my-5">
          If you are going through the apps like TikTok, this guide might have
          solved your queries regarding that in 2025. Either it’s better
          privacy, monetization, fresh content, or the late trends. Platforms
          like Instagram reels, YouTube shorts, and Snapchat Spotlight solve
          your problem. For those wondering what app replaces TikTok, the best
          alternative depends on what you want from the app. Some content
          creators prefer the YouTube shorts, while most professionals might
          wish for the Triller. Some of the adults may also like the LinkedIn
          Shorts more prior.
        </p>
        <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 font-bold lg:leading-7 text-center my-5">
          Are you ready to switch?
        </p>
        <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-center my-5">
          Try these one of the TikTok Alternatives today and discover short
          video experiences on <Link href={"/"}>LaunchBox Global.</Link>
        </p>
      </section>

      <div className="w-full border hidden lg:block" />

      {/* Faqs */}
      <section id="faqs" className="w-full flex flex-col items-center">
        <h2 className="text-[8.6vw] md:text-[5.5vw] lg:text-[60px] font-bold tracking-tight text-center">
          Frequently Asked <span className="red-text">Questions</span>
        </h2>
        <section
          id="faqs"
          className="w-full mt-10 lg:mt-24 flex flex-col items-start gap-4 lg:w-[90%]"
        >
          {BLOG_TWO_FAQS?.map((faq, index) => (
            <div
              className={`w-full rounded-3xl px-5 py-5 lg:px-10 lg:py-14 bg-[#F9F9F9] text-black`}
              key={index}
            >
              <button
                onClick={() => toggleFaq(index)}
                name={faq?.question}
                className="w-full text-start flex items-center justify-between outline-none"
              >
                <h3 className="font-medium text-[17px] md:text-2xl lg:text-[35px] 2xl:text-[40px] w-[90%]">
                  <span className="w-full leading-7 lg:leading-10">
                    {faq?.question}
                  </span>
                </h3>

                <Image
                  src={"/faq-arrow-icon.webp"}
                  width={24}
                  height={20}
                  alt="faq arrow icon"
                  loading="lazy"
                  className={`${
                    openFaq === index ? "scale-y-[-1]" : "scale-y-[1]"
                  } transition-all duration-700 w-[18px] h-[18px] lg:w-[24px] lg:h-[26px]`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openFaq === index ? "auto" : 0,
                  opacity: openFaq === index ? 1 : 0,
                  marginTop: openFaq === index ? "18px" : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-base lg:text-[20px] font-normal lg:w-[90%]">
                  {faq?.answer}
                </p>

                <ul className="w-full list-disc flex flex-col items-start gap-1 mt-3">
                  {faq?.list?.map((l, i) => {
                    return (
                      <li key={i} className="">
                        {l}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          ))}
        </section>
      </section>

      <div className="w-full border hidden lg:block" />

      <BlogsContactForm />
    </main>
  );
};

export default BlogPage;

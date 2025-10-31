import React from "react";
import dynamic from "next/dynamic";
import { HOME_SERVICES } from "@/constants/HomeServices";

// ✅ Dynamically import every component with SSR disabled
const HomeHero = dynamic(() => import("./HomeHero"), { ssr: false, loading: () => <></> });
const HomeCustomerReviews = dynamic(() => import("./HomeCustomerReviews"), { ssr: false, loading: () => <></> });
const HomeValueProposition = dynamic(() => import("./HomeValueProposition"), { ssr: false, loading: () => <></> });
const HomeFaqs = dynamic(() => import("./HomeFaqs"), { ssr: false, loading: () => <></> });
const HomeComparison = dynamic(() => import("./HomeComparison"), { ssr: false, loading: () => <></> });
const Process = dynamic(() => import("./Process"), { ssr: false, loading: () => <></> });
const HomeStats = dynamic(() => import("./HomeStats"), { ssr: false, loading: () => <></> });
const Platforms = dynamic(() => import("../Common/Platforms"), { ssr: false, loading: () => <></> });
const TeckStack = dynamic(() => import("../Common/TechStack"), { ssr: false, loading: () => <></> });
const FlagsAnimation = dynamic(() => import("../Common/FlagsAnimation"), { ssr: false, loading: () => <></> });
const Services = dynamic(() => import("./Services"), { ssr: false, loading: () => <></> });
const HomePageBlogs = dynamic(() => import("./HomePageBlogs"), { ssr: false, loading: () => <></> });
const TechStackSlider = dynamic(() => import("./TechStackSlider"), { ssr: false, loading: () => <></> });
const CTAGlobe = dynamic(() => import("./CTAGlobe"), { ssr: false, loading: () => <></> });
const PortfolioParallexCards = dynamic(() => import("./PortfolioParallexCards"), { ssr: false, loading: () => <></> });
const CaseStudies = dynamic(() => import("./CaseStudies"), { ssr: false, loading: () => <></> });
const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false, loading: () => <></> });
const WhatWeShip = dynamic(() => import("./WhatWeShip"), { ssr: false, loading: () => <></> });

// ✅ Project data
export const projects = [
  {
    title: "BLOoM By Brittany",
    description:
      "LaunchBox Global delivered a spiritual lifestyle app designed to help church communities stay connected. BLOoM lets members start their day with devotionals, enjoy worship music anywhere, and access sermons or prayer requests in one place. Built for growth, the app supports hundreds of users while fostering daily spiritual engagement.",
    src: "cactus.jpg",
    link: "/case-studies/bloom",
    color: "#000000",
    image: "/mobile-app-dev-portfolio-01.webp",
    images: ["/home/b1.png", "/home/b2.png"],
    alt_tag: "BLOoM By Brittany app interface showing devotionals and worship features",
  },
  {
    title: "Now You Know Nashville",
    description:
      "LaunchBox Global designed a city discovery app that celebrates Nashville’s vibrant culture. From music venues to local landmarks, users can explore curated categories and discover the city’s hidden gems. With secure payments, free categories, and sleek design, it’s become the go-to guide for authentic Nashville experiences.",
    src: "rock.jpg",
    link: "/case-studies/now-you-know-nashville",
    color: "#E14242",
    image: "/mobile-app-dev-portfolio-02.webp",
    images: ["/home/c1.png", "/home/c2.png"],
    alt_tag: "Now You Know Nashville app interface displaying local events and city guide features",
  },
  {
    title: "Fitness By Faith With Laken",
    description:
      "A personal training app empowering users to stay consistent with their fitness journey. LaunchBox Global built this mobile experience to deliver personalized plans, real-time trainer messaging, and motivational features — creating a seamless connection between coaches and clients anytime, anywhere.",
    src: "tree.jpg",
    link: "/case-studies/fitness-by-faith",
    color: "#FF7262",
    image: "/mobile-app-dev-portfolio-03.webp",
    images: ["/home/n1.png", "/home/n2.png"],
    alt_tag: "Fitness By Faith With Laken workout app interface showing exercise tracking and chat features",
  },
  {
    title: "Jb Sittner Trucking",
    description:
      "For Jb Sittner Trucking, LaunchBox Global developed a logistics management app that streamlines fleet operations and driver coordination. From trip tracking to secure document sharing, the platform helps the business stay organized, connected, and efficient — all from one easy-to-use mobile interface.",
    src: "water.jpg",
    link: "/case-studies/jb-sittner-trucking",
    color: "#E66225",
    image: "/mobile-app-dev-portfolio-04.webp",
    images: ["/home/z1.png"],
    alt_tag: "Jb Sittner Trucking logistics app interface showing route management and fleet tracking",
  },
];

const HomePage = () => {
  return (
    <main className="bg-transparent relative">
      <HomeHero />
      <Platforms />
      <Services
        heading={"What We"}
        redText={"Do?"}
        description={"We help you grow with clear software solutions created by skilled experts around the world."}
        services={HOME_SERVICES}
        descriptionWidth={"lg:w-1/2"}
      />
      <HomeComparison />
      <HomeValueProposition />
      <CTAGlobe />
      <CaseStudies
        heading={"What we ship Our ways to "}
        redText={"move fast"}
        description={
          "We follow a structured and client focused development process to ensure the successful delivery of high quality software solutions. Our workflow includes:"
        }
        child={<PortfolioParallexCards projects={projects} />}
      />
      <Process />
      <TechStackSlider />
      <HomeStats />
      <HomeCustomerReviews />
      <FlagsAnimation />
      <HomePageBlogs />
      <HomeFaqs />
      <ContactForm />
    </main>
  );
};

export default HomePage;

import React from "react";
import TechStackCard from "./TechStackCard";

const platforms = [
  {
    icon: "/staff-augmentation/aws-icon.png",
    width: 59,
    height: 47,
    title: "AWS",
  },
  {
    icon: "/staff-augmentation/azure-icon.png",
    width: 55,
    height: 51,
    title: "Azure",
  },
  {
    icon: "/staff-augmentation/gcp-icon.png",
    width: 67,
    height: 57,
    title: "GCP",
  },
  {
    icon: "/staff-augmentation/digital-ocean.png",
    width: 57,
    height: 57,
    title: "Digital Ocean",
  },
  // google-cloud-icon
  {
    icon: "/staff-augmentation/google-cloud-icon.png",
    width: 61,
    height: 47,
    title: "Google Cloud",
  },
  {
    icon: "/staff-augmentation/cloudinary-icon.png",
    width: 87,
    height: 57,
    title: "Cloudinary",
  },
  {
    icon: "/staff-augmentation/datadog-icon.png",
    width: 53,
    height: 57,
    title: "Datadog",
  },
  {
    icon: "/staff-augmentation/grafana-icon.png",
    width: 53,
    height: 57,
    title: "Grafana",
  },
];

const CloudPlatforms = () => {
  return (
    <section className="w-full mt-10 flex items-center justify-center flex-wrap gap-2">
      {platforms?.map((tech, index) => {
        return <TechStackCard tech={tech} index={index} key={index} />;
      })}
    </section>
  );
};

export default CloudPlatforms;

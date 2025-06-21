import React from "react";
import TechStackCard from "./TechStackCard";

const platforms = [
  {
    icon: "/staff-augmentation/github-icon.png",
    width: 58,
    height: 57,
    title: "Github",
  },
  {
    icon: "/staff-augmentation/docker-icon.png",
    width: 60,
    height: 57,
    title: "Docker",
  },
  {
    icon: "/staff-augmentation/kubernetes-icon.png",
    width: 67,
    height: 57,
    title: "kubernetes",
  },
  {
    icon: "/staff-augmentation/jira-icon.png",
    width: 57,
    height: 57,
    title: "Jira",
  },
  {
    icon: "/staff-augmentation/figma-icon.png",
    width: 56,
    height: 56,
    title: "Figma",
  },
  {
    icon: "/staff-augmentation/slack-icon.png",
    width: 57,
    height: 57,
    title: "Slack",
  },
];

const DevelopmentTools = () => {
  return (
    <section className="w-full mt-10 flex items-center justify-center flex-wrap gap-2">
      {platforms?.map((tech, index) => {
        return <TechStackCard tech={tech} index={index} key={index} />;
      })}
    </section>
  );
};

export default DevelopmentTools;

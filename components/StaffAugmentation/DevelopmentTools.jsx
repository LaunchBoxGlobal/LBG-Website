import React from "react";
import TechStackCard from "./TechStackCard";

const platforms = [
  {
    icon: "/staff-augmentation/github-icon.webp",
    width: 58,
    height: 57,
    title: "Github",
  },
  {
    icon: "/staff-augmentation/jira-tech-icon.webp",
    width: 47,
    height: 47,
    title: "Jira",
  },
  {
    icon: "/staff-augmentation/docker-icon.webp",
    width: 60,
    height: 57,
    title: "Docker",
  },
  {
    icon: "/staff-augmentation/kubernetes-icon.webp",
    width: 67,
    height: 57,
    title: "kubernetes",
  },
  {
    icon: "/staff-augmentation/jira-icon.webp",
    width: 57,
    height: 57,
    title: "Jira",
  },
  {
    icon: "/staff-augmentation/figma-icon.webp",
    width: 56,
    height: 56,
    title: "Figma",
  },
  {
    icon: "/staff-augmentation/slack-icon.webp",
    width: 57,
    height: 57,
    title: "Slack",
  },
  {
    icon: "/staff-augmentation/sublime-icon.webp",
    width: 57,
    height: 57,
    title: "Sublime",
  },
  {
    icon: "/staff-augmentation/vscode-icon.webp",
    width: 57,
    height: 57,
    title: "VS Code",
  },
  {
    icon: "/staff-augmentation/framer-icon.webp",
    width: 40,
    height: 57,
    title: "Framer",
  },
  {
    icon: "/staff-augmentation/clickup-icon.webp",
    width: 40,
    height: 57,
    title: "Clickup",
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

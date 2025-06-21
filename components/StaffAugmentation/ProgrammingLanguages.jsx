import React from "react";
import TechStackCard from "./TechStackCard";

const languages = [
  {
    icon: "/staff-augmentation/react-icon.png",
    width: 64,
    height: 57,
    title: "React",
  },
  {
    icon: "/staff-augmentation/flutter-icon.png",
    width: 46,
    height: 57,
    title: "Flutter",
  },
  {
    icon: "/staff-augmentation/nodejs-icon.png",
    width: 59,
    height: 59,
    title: "Node.js",
  },
  {
    icon: "/staff-augmentation/python-icon.png",
    width: 57,
    height: 57,
    title: "Python",
  },
  {
    icon: "/staff-augmentation/java-icon.png",
    width: 42,
    height: 57,
    title: "Java",
  },
  {
    icon: "/staff-augmentation/dot-net-icon.png",
    width: 64,
    height: 57,
    title: ".NET",
  },
];

const ProgrammingLanguages = () => {
  return (
    <section className="w-full mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      {languages?.map((tech, index) => {
        return <TechStackCard tech={tech} index={index} key={index} />;
      })}
    </section>
  );
};

export default ProgrammingLanguages;

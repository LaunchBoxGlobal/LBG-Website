import React from "react";
import TechStackCard from "./TechStackCard";

export const databases = [
  {
    icon: "/staff-augmentation/maria-db-icon.png",
    width: 56,
    height: 37,
    title: "Maria DB",
  },
  {
    icon: "/staff-augmentation/redis-icon.png",
    width: 57,
    height: 47,
    title: "Radis",
  },
  {
    icon: "/staff-augmentation/mongodb-icon.png",
    width: 26,
    height: 57,
    title: "MongoDB",
  },
  {
    icon: "/staff-augmentation/oracle-db-icon.png",
    width: 60,
    height: 47,
    title: "Oracle DB",
  },
  {
    icon: "/staff-augmentation/postgresql-icon.png",
    width: 50,
    height: 53,
    title: "PostegreSQL",
  },
  {
    icon: "/staff-augmentation/elasticsearch-icon.png",
    width: 57,
    height: 57,
    title: "Elasticsearch",
  },
  {
    icon: "/staff-augmentation/sql-icon.png",
    width: 57,
    height: 57,
    title: "MySQL",
  },
  {
    icon: "/staff-augmentation/kubernetes-icon-1.png",
    width: 57,
    height: 57,
    title: "Kubernetes",
  },
];

const Databases = () => {
  return (
    <section className="w-full mt-10 flex justify-center items-start flex-wrap gap-2">
      {databases?.map((tech, index) => {
        return <TechStackCard tech={tech} index={index} key={index} />;
      })}
    </section>
  );
};

export default Databases;

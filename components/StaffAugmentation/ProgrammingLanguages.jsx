import React from "react";
import TechStackCard from "./TechStackCard";

const languages = [
  {
    icon: "/staff-augmentation/swift-icon.webp",
    width: 64,
    height: 57,
    title: "Swift",
  },
  {
    icon: "/staff-augmentation/kotlin-icon.webp",
    width: 57,
    height: 57,
    title: "Kotlin",
  },
  {
    icon: "/staff-augmentation/ionic-icon.webp",
    width: 57,
    height: 57,
    title: "Ionic",
  },
  {
    icon: "/staff-augmentation/firebase-icon.webp",
    width: 46,
    height: 57,
    title: "Firebase",
  },
  {
    icon: "/staff-augmentation/dart-icon.webp",
    width: 57,
    height: 57,
    title: "Dart",
  },
  {
    icon: "/staff-augmentation/javascript-icon.webp",
    width: 47,
    height: 47,
    title: "JavaScript",
  },
  {
    icon: "/staff-augmentation/c-plus.webp",
    width: 69,
    height: 57,
    title: "C++",
  },
  {
    icon: "/staff-augmentation/c-sharp-icon.webp",
    width: 64,
    height: 57,
    title: "C#",
  },
  {
    icon: "/staff-augmentation/angular-icon.webp",
    width: 54,
    height: 57,
    title: "Angular",
  },
  {
    icon: "/staff-augmentation/android-icon.webp",
    width: 61,
    height: 47,
    title: "Android",
  },
  {
    icon: "/staff-augmentation/react-icon.webp",
    width: 64,
    height: 57,
    title: "React",
  },
  {
    icon: "/staff-augmentation/flutter-icon.webp",
    width: 46,
    height: 57,
    title: "Flutter",
  },
  {
    icon: "/staff-augmentation/nodejs-icon.webp",
    width: 59,
    height: 59,
    title: "Node.js",
  },
  {
    icon: "/staff-augmentation/python-icon.webp",
    width: 57,
    height: 57,
    title: "Python",
  },
  {
    icon: "/staff-augmentation/java-icon.webp",
    width: 42,
    height: 57,
    title: "Java",
  },
  {
    icon: "/staff-augmentation/bootstrap-icon.webp",
    width: 64,
    height: 57,
    title: "Bootstrap",
  },
  {
    icon: "/staff-augmentation/html-icon.webp",
    width: 45,
    height: 47,
    title: "HTML5",
  },
  {
    icon: "/staff-augmentation/typescript-icon.webp",
    width: 47,
    height: 47,
    title: "TypeScript",
  },
  {
    icon: "/staff-augmentation/django.webp",
    width: 45,
    height: 57,
    title: "Django",
  },
  {
    icon: "/staff-augmentation/electronjs-icon.webp",
    width: 53,
    height: 57,
    title: "Electronjs",
  },
  {
    icon: "/staff-augmentation/expressjs-icon.webp",
    width: 70,
    height: 22,
    title: "Express JS",
  },
  {
    icon: "/staff-augmentation/flask-icon.webp",
    width: 64,
    height: 57,
    title: "Flask",
  },
  {
    icon: "/staff-augmentation/jquery-icon.webp",
    width: 59,
    height: 57,
    title: "JQuery",
  },
  {
    icon: "/staff-augmentation/laravel-icon.webp",
    width: 55,
    height: 57,
    title: "Laravel",
  },
  {
    icon: "/staff-augmentation/php-icon.webp",
    width: 90,
    height: 50,
    title: "PHP",
  },
  {
    icon: "/staff-augmentation/ruby-on-rails.webp",
    width: 90,
    height: 35,
    title: "Ruby on Rails",
  },
  {
    icon: "/staff-augmentation/nestjs-icon.webp",
    width: 57,
    height: 57,
    title: "Nest JS",
  },
  {
    icon: "/staff-augmentation/wordpress-icon.webp",
    width: 57,
    height: 57,
    title: "Wordpress",
  },
  {
    icon: "/staff-augmentation/sveltejs-icon.webp",
    width: 47,
    height: 57,
    title: "Sveltejs",
  },
];

const ProgrammingLanguages = () => {
  return (
    <section className="w-full mt-10 flex items-start justify-center flex-wrap gap-2">
      {languages?.map((tech, index) => {
        return <TechStackCard tech={tech} index={index} key={index} />;
      })}
    </section>
  );
};

export default ProgrammingLanguages;

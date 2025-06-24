import React from "react";
import TechStackCard from "./TechStackCard";

const languages = [
  {
    icon: "/staff-augmentation/swift-icon.png",
    width: 64,
    height: 57,
    title: "Swift",
  },
  {
    icon: "/staff-augmentation/kotlin-icon.png",
    width: 57,
    height: 57,
    title: "Kotlin",
  },
  {
    icon: "/staff-augmentation/ionic-icon.png",
    width: 57,
    height: 57,
    title: "Ionic",
  },
  {
    icon: "/staff-augmentation/firebase-icon.png",
    width: 46,
    height: 57,
    title: "Firebase",
  },
  {
    icon: "/staff-augmentation/dart-icon.png",
    width: 57,
    height: 57,
    title: "Dart",
  },
  {
    icon: "/staff-augmentation/javascript-icon.png",
    width: 47,
    height: 47,
    title: "JavaScript",
  },
  {
    icon: "/staff-augmentation/c-plus.png",
    width: 69,
    height: 57,
    title: "C++",
  },
  {
    icon: "/staff-augmentation/c-sharp-icon.png",
    width: 64,
    height: 57,
    title: "C#",
  },
  {
    icon: "/staff-augmentation/angular-icon.png",
    width: 54,
    height: 57,
    title: "Angular",
  },
  {
    icon: "/staff-augmentation/android-icon.png",
    width: 61,
    height: 47,
    title: "Android",
  },
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
    icon: "/staff-augmentation/bootstrap-icon.png",
    width: 64,
    height: 57,
    title: "Bootstrap",
  },
  {
    icon: "/staff-augmentation/html-icon.png",
    width: 45,
    height: 47,
    title: "HTML5",
  },
  {
    icon: "/staff-augmentation/typescript-icon.png",
    width: 47,
    height: 47,
    title: "TypeScript",
  },
  {
    icon: "/staff-augmentation/django.png",
    width: 45,
    height: 57,
    title: "Django",
  },
  {
    icon: "/staff-augmentation/electronjs-icon.png",
    width: 53,
    height: 57,
    title: "Electronjs",
  },
  {
    icon: "/staff-augmentation/expressjs-icon.png",
    width: 70,
    height: 22,
    title: "Express JS",
  },
  {
    icon: "/staff-augmentation/flask-icon.png",
    width: 64,
    height: 57,
    title: "Flask",
  },
  {
    icon: "/staff-augmentation/jquery-icon.png",
    width: 59,
    height: 57,
    title: "JQuery",
  },
  {
    icon: "/staff-augmentation/laravel-icon.png",
    width: 55,
    height: 57,
    title: "Laravel",
  },
  {
    icon: "/staff-augmentation/php-icon.png",
    width: 90,
    height: 50,
    title: "PHP",
  },
  {
    icon: "/staff-augmentation/ruby-on-rails.png",
    width: 90,
    height: 35,
    title: "Ruby on Rails",
  },
  {
    icon: "/staff-augmentation/nestjs-icon.png",
    width: 57,
    height: 57,
    title: "Nest JS",
  },
  {
    icon: "/staff-augmentation/wordpress-icon.png",
    width: 57,
    height: 57,
    title: "Wordpress",
  },
  {
    icon: "/staff-augmentation/sveltejs-icon.png",
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

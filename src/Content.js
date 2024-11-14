// import images
import Hero_person from "./assets/images/Hero/person.png";

import html from "./assets/images/Skills/html.png";
import java from "./assets/images/Skills/java.png";
import javascript from "./assets/images/Skills/javascript.png";
import reactjs from "./assets/images/Skills/react.png";
import springboot from "./assets/images/Skills/springboot.png";
import tailwind from "./assets/images/Skills/tailwind.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.jpeg";
import project4 from "./assets/images/projects/img4.jpeg";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { BiUser } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  MdArrowForward,
  MdCall,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { RiProjectorLine, RiServiceLine } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "ANKIT",
    LastName: "MAURYA",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "",
        text: "Fresher",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "JAVA",
        para: "Lorem ipsum text  dummy",
        logo: java,
      },
      {
        name: "java script",
        para: "Lorem ipsum text  dummy",
        logo: javascript,
      },
      {
        name: "Spring Boot",
        para: "Lorem ipsum text  dummy",
        logo: springboot,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Tailwind",
        para: "Lorem ipsum text  dummy",
        logo: tailwind,
      },
      {
        name: "Html",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Fresher Web Developer skilled in creating responsive, user-friendly websites and web applications. Passionate about learning new technologies and building innovative digital solutions.",
        logo: services_logo1,
      },
      {
        title: "Java Development",
        para: "Fresher Java Developer with a strong grasp of object-oriented programming and software development.",
        logo: services_logo2,
      },
      // {
      //   title: "PhotoShop Editing",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo3,
      // },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Student Management System",
        image: project1,
        link: "http://studentmanager.eu-north-1.elasticbeanstalk.com/students",
      },
      {
        title: "Rest API",
        image: project2,
        link: "https://github.com/iamankitmaurya/RestApiUsingSpringBoot",
      },
      {
        title: "Netflix Website",
        image: project3,
        link: "https://darling-bublanina-e87401.netlify.app/",
      },
      {
        title: "Tic Tac Toe",
        image: project4,
        link: "https://sparkly-alfajores-6939ac.netlify.app/",
      },
    ],
  },
  Testimonials: {
    title: "Education",
    subtitle: "Schoole & College",
    testimonials_content: [
      {
        review:
          "“Completed high school   in 2019 with 76%, demonstrating a strong academic foundation.”",
        img: avatar1,
        name: "Shivaji Inter College",
      },
      {
        review:
          "“Completed Intermediate in 2021 with 69%, demonstrating a strong academic foundation.”",
        img: avatar2,
        name: "Shivaji Inter College",
      },
      {
        review:
          "“Currnetly I am purshing B.Tech specilization in computer science and engineering ”",
        img: avatar3,
        name: "MPGI",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Aspiring software engineer with experience in networking, application development, and Java.Seeking a new grad role in network,application development.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ankitmaurya44681@gmail.com",
        icon: GrMail,
        link: "mailto:ankitmaurya44681@gmail.com",
      },
      {
        text: "+91 8564082604",
        icon: MdCall,
        link: "https://wa.me/qr/COB5WGA2ZGU3O1",
      },
      {
        text: "iamankitmaurya_",
        icon: BsInstagram,
        link: "https://instagram.com/iamankitmaurya_?igshid=NGVhN2U2NjQ0Yg==",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};

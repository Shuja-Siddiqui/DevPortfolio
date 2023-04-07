
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";

export const info = {
        id: 1,
        name:  "SHUJA UR REHMAN",
        feild: "MERN STACK DEVELOPER",
        image: require("../../assets/img/shujaPic.png"),
        about: "As a Mern Stack developer, I have expertise in designing and developing responsive, user-friendly websites using modern web technologies. With a keen eye for detail and a passion for creating seamless user experiences, I have honed my skills in front-end development, back-end development, and web application development. With my excellent problem-solving skills, I am able to diagnose and fix complex web-related issues quickly and efficiently. I am also comfortable working with cross-functional teams and stakeholders to gather requirements and deliver high-quality projects on time and within budget. As a web developer, I am passionate about staying up-to-date with the latest web development trends and technologies and constantly strive to enhance my skills to deliver cutting-edge web solutions that meet and exceed client expectations.",
        insta: <AiOutlineInstagram />,
        github: <FaGithub />,
        linkedin: <FaLinkedinIn />,
    };


export const serviceData =[
    {
        id:1,
        icon: MdDesignServices,
        title: "ui/ux designer",
        disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?",
        direction: "left",
    },

    {
        id:2,
        icon: FiCodesandbox,
        title: "graphic designer",
        disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?",
        direction: "up",
    },

    {
        id:3,
        icon: CgWebsite,
        title: "web designer",
        disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?",
        direction: "right",
    },
    {
        id:3,
        icon: CgWebsite,
        title: "web designer",
        disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?",
        direction: "left",
    }
];

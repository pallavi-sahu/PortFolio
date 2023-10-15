const Bio = {
    name: "Pallavi Sahu",
    roles: [
        "Full Stack Developer",
        "Programmer",
    ],
    description: "I'm Pallavi Sahu, a passionate Computer Science student focusing on IoT, Deep Learning, and web development. I've worked on exciting projects like insect detection, emotion recognition, and e-commerce for farmers. As a proven leader in the Social Media and PR Team of Scientific Tech Showcase events and NSS, I'm eager to keep learning and growing. My passion and skills make me a suitable candidate for any opportunities that come my way.",
    github: "https://github.com/pallavi-sahu",
    resume: "https://drive.google.com/file/d/1HU-JbRxddLcwX6efMi6h3o0U16KV53a_/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/pallavi-sahu-9b6069202/",
    insta: "https://www.instagram.com/sahu_pallavi_06",
};

export const Skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React Js",
                image:"",
            },
            {
                name: "Redux",
                image: "",
            },
            {
                name: "JavaScript",
                image: "",
            },
            {
                name: "HTML",
                image: "",
            }
        ],
    },

    {
        title: "Others",
        skills: [
            {
                name: "Git",
                image:"",
            },
            {
                name: "Github",
                image: "",
            },
            {
                name: "Postman",
                image: "",
            },
            {
                name: "VScode",
                image: "",
            },
            {
                name: "Linux",
                image: "",
            }

        ], 
    },
];

export const experience = [
    {
        id: 0,
        img: "https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp",
        role: "Software Developer",
        company: "Scrollit",
        date: "June 2023 - July 2023",
        desc: "Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.",
        skills: [
          "ReactJS",
          "Redux",
          "Material UI",
          "HTML",
          "CSS",
          "JavaScript",
          "Postman",
          "Saga",
          "MongoDB",
        ],
        doc: "https://drive.google.com/file/d/161btED-QSBgwK6HzxnLMW9ivMTcoDnEA/view?usp=sharing",
      },
];

export const education = [
    {
        id: 0,
        img: "https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp",
        school: "International Institute of Information Technology, Naya Raipur",
        date: "Dec 2020 - july 2024",
        grade: "7.59 CGPA",
        desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at International Institute of Information Technology, Naya Raipur. I have completed 3 year and have a CGPA of 7.59. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
        degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    },
    {
        id: 1,
        img: "https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp",
        school: "Prayas Residential School, Raipur",
        date: "Apr 2018 - Apr 2020",
        grade: "85.4%",
        desc: "I completed my class 12 high school education at Prayas Residential School, Raipur.",
        degree: "XII",
      },
]

export const projects = [
    {
        id: 9,
        title: "Music Player",
        date: "Jun 2023 - Jul 2023",
        description:
          "a music player website providing a user-friendly interface for users to play, and manage the songs",
        image: "",
        tags: [
          "React",
          "Javascript",
          "CSS",
        ],
        category: "web app",
        github: "https://github.com/pallavi-sahu/MusicPage",
        webapp: "",
      },
      {
        id: 0,
        title: "Agventure",
        date: "Apr 2023 - May 2023",
        description:
          "An innovative solution for eliminating middlemen from the agricultural market by enabling farmers with feature phones to sell their produce on a unified platform",
        image:"",
        tags: ["React Js", "Firebase", "Node Js", "Express Js", "Redux",],
        category: "web app",
        github: "https://github.com/pallavi-sahu/Agventure",
        webapp: "",
        member: [
          {
            name: "Pallavi Sahu",
            img: "",
            linkedin: "https://www.linkedin.com/in/pallavi-sahu-9b6069202/",
            github: "https://github.com/pallavi-sahu",
          },
          {
            name: "Deepanshu Pratik",
            img: "",
            linkedin: "https://www.linkedin.com/in/deepanshupratik/",
            github: "https://github.com/DeepanshuPratik",
          },
        ],
      },

      {
        id: 1,
        title: "ChatApp",
        date: "Oct 2022 - Present",
        description:
          "Designed and implemented the user interface (UI) of the application using ReactJS, ensuring a responsive and intuitive user experience.",
        image:"",
        tags: [
          "React Js",
          "FireBase",
          "Node Js",
          "Express Js",
          "Redux",
        ],
        category: "web app",
        github: "https://github.com/pallavi-sahu/WhatsApp-Clone",
        webapp: "",
      },

      {
        id: 8,
        title: "Insect Detection",
        date: "Jan 2021",
        description:"It is an IoT and Deep Learning-based project to detect insects in stored grains.",
        image:
          "",
        tags: ["Python", "Keras", "TensorFlow", "FastApi", "Pickle"],
        category: "machine learning",
        github: "https://github.com/pallavi-sahu/Insect-Detection",
        webapp: "",
      },
]


export default Bio;
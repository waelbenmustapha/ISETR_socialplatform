import React from "react";
import {
  InfoOutlined,
  AssignmentOutlined,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
  WebOutlined
} from "@material-ui/icons";

export default {
  name: "Nader Guesmi",
  title: "Full-stack Developer",
  displayImage: "avatar.jpg",
  birthday: "07 July 1998",
  email: "NaderGuesmil01@gmail.com",
  address: "Tunisia, Tunis",
  phone: "232 232 2323",

  socials: {
    Facebook: {
      link: "https://www.facebook.com/",
      text: "NaderGuesmil01",
      icon: <Facebook />,
    },
    Twitter: {
      link: "https://www.twitter.com/",
      text: "SamsFXJournal",
      icon: <Twitter />,
    },
    linkedIn: {
      link: "https://www.linkedin.com/",
      text: "SamFaz",
      icon: <LinkedIn />,
    },
    Github: {
      link: "https://www.github.com/",
      text: "NaderGuesmil01",
      icon: <GitHub />,
    },
  },

  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  experiences: [
    {
      title: "Work 1",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      date: "2010 - Present",
    },
    {
      title: "Work 2",
      description:
        "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
      date: "2008 - 2010",
    },
    {
      title: "Work 3",
      description:
        "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
      date: "2005 - 2008",
    },
  ],

  education: [
    {
      title: "Abc University of Los Angeles",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      date: "2004 - 2009",
    },
    {
      title: "Education 2",
      description:
        "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
      date: "2003 - 2004",
    },
    {
      title: "Education 3",
      description:
        "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
      date: "2000 - 2003",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "I have been working on web design for 10 years.",
      icon: <WebOutlined />,
    },
    {
      title: "Branding Identity",
      description:
        "We will make you a brand that is catchy and leaves a trace.",
      icon: <AssignmentOutlined />,
    },
    {
      title: "Web Development",
      description: "I have been working on web design for 10 years.",
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Java", "Python", "Solidity"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "Ms SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "SCRUM/Agile"],
    },
  ],
};

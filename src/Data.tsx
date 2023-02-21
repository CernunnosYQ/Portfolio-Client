import { SiHtml5, SiCss3, SiJavascript, SiTypescript,
        SiPython, SiTailwindcss, SiPostgresql, SiReact } from "react-icons/si"

import Placeholder from "./assets/placeholder.webp"

export const skill_icons: { [key: string]: JSX.Element } = {
  html: <SiHtml5 />,
  css: <SiCss3 />,
  js: <SiJavascript />,
  ts: <SiTypescript />,
  tailwind: <SiTailwindcss />,
  react: <SiReact />,
  python: <SiPython />,
  postgres: <SiPostgresql />,
}

type ProjectDataType = {
  title: string,
  image: string,
  description: string,
  skills: string[],
  blogpost: string,
  demo: string,
  repo: string,
}

export const ProjectsData: ProjectDataType[] = [
  {
    title: "Test",
    image: Placeholder,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                  Voluptatem mollitia perferendis dolor autem odit repellat, \
                  ipsam saepe? Ab accusantium provident qui rerum nihil \
                  perspiciatis! Optio?",
    skills: ["react", "tailwind", "python"],
    blogpost: "#",
    demo: "#",
    repo: "#",
  },
  {
    title: "Test",
    image: Placeholder,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                  Voluptatem mollitia perferendis dolor autem odit repellat, \
                  ipsam saepe? Ab accusantium provident qui rerum nihil \
                  perspiciatis! Optio?",
    skills: ["react", "tailwind", "python"],
    blogpost: "#",
    demo: "#",
    repo: "#",
  },
  {
    title: "Test",
    image: Placeholder,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                  Voluptatem mollitia perferendis dolor autem odit repellat, \
                  ipsam saepe? Ab accusantium provident qui rerum nihil \
                  perspiciatis! Optio?",
    skills: ["react", "tailwind", "python"],
    blogpost: "#",
    demo: "#",
    repo: "#",
  },
]
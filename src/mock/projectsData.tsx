import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiDart, SiFlutter, SiPostgresql } from "react-icons/si";
import { TbBrandFigma, TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";


export interface Project {
  type: "freelance" | "university";
  title: string;
  image: string;
  description: string;
  repositoryLink?: string;
  projectLink?: string;
  badges?: ProjectBadge[];
}

interface ProjectBadge {
  text: string;
  icon: React.ElementType;
}

export const projectsData: Project[] = [
  {
    type: "freelance",
    title: "Brasequip",
    image: "brasequip.png",
    description:
      "Desenvolvimento de um WebSite Institucional para a empresa Brasequip, utilizando React.js/Vite.js com Typescript e Figma para prototipação, com a metodologia RAD",
    projectLink: "https://brasequip.com.br",
    badges: [
      {
        text: "Vite.js",
        icon: FaReact,
      },
      {
        text: "Typescript",
        icon: TbBrandTypescript,
      },
      {
        text: "Figma",
        icon: TbBrandFigma,
      },
    ],
  },
  {
    type: "university",
    title: "Fear & Hunger",
    image: "fear-hunger.png",
    description:
      "Desenvolvimento de um MMORPG web, em equipe de 4 desenvolvedores, utilizando Vite.js para o front-end, Express.js para o back- end com banco de dados relacional, gerenciador PostegreSQL e Docker",
    repositoryLink: "https://github.com/SBD1/2023.2_Fear_and_Hunger",
    projectLink: "https://sbd1.github.io/2023.2_Fear_and_Hunger/#/",
    badges: [
      {
        text: "Vite.js",
        icon: FaReact,
      },
      {
        text: "Typescript",
        icon: TbBrandTypescript,
      },
      {
        text: "Express",
        icon: FaNodeJs,
      },
      {
        text: "Postgre",
        icon: SiPostgresql,
      },
      {
        text: "JavaScript",
        icon: TbBrandJavascript
      },
      {
        text: "Docker",
        icon: FaDocker,
      },
    ],
  },
  {
    type: "university",
    title: "Guia UnB",
    image: "guia-unb.png",
    description:
      "Desenvolvimento de um aplicativo móvel em Dart com Flutter e Firabase, em equipe de 6 desenvolvedores para informar alunos da UnB sobre direitos estudantis",
    repositoryLink: "https://github.com/zzzBECK/2023.1-GuiaUnB",
    projectLink: "https://play.google.com/store/apps/details?id=br.com.mds.guiaunb&pli=1",
    badges: [
      {
        text: "Dart",
        icon: SiDart,
      },
      {
        text: "Flutter",
        icon: SiFlutter,
      },
      {
        text: "Firebase",
        icon: IoLogoFirebase,
      },
    ],
  },
  {
    type: "freelance",
    title: "Bizu da Aprovação",
    image: "bizu.png",
    description:
      "Primeira experiência de um projeto real utilzando React/Next.js, onde o site foi utilizado para inscrição do curso 'Bizu da Aprovação' do Patrulheiro Jota",
    projectLink: "https://bizu-aprovacao.vercel.app",
    badges: [
      {
        text: "Next.js",
        icon: FaReact,
      },
      {
        text: "JavaScript",
        icon: TbBrandJavascript
      },
      {
        text: "Figma",
        icon: TbBrandFigma,
      },
    ]
  },
];

import { Atom } from "lucide-react";

export interface Project {
  type: "freelance" | "university";
  title: string;
  description: string;
  repositoryLink?: string;
  projectLink?: string;
  badge?: ProjectBadge;
}

interface ProjectBadge {
  text: string;
  icon: React.ElementType;
}

export const projectsData: Project[] = [
  {
    type: "freelance",
    title: "Brasequip",
    description:
      "Desenvolvimento de um WebSite Institucional para a empresa Brasequip, utilizando React.js/Vite.js com Typescript e Figma para prototipação, com a metodologia RAD",
    badge: {
      text: 'React',
      icon: Atom
    }
  },
  {
    type: "university",
    title: "Fear & Hunger",
    description: "Desenvolvimento de um MMORPG web, em equipe de 4 desenvolvedores, utilizando Vite.js para o front-end, Express.js para o back- end com banco de dados relacional, gerenciador PostegreSQL e Docker",
  },
  {
    type: "freelance",
    title: "Guia UnB",
    description:
      "Desenvolvimento de um aplicativo móvel em Dart com Flutter e Firabase, em equipe de 6 desenvolvedores para informar alunos da UnB sobre direitos estudantis",
  },
  {
    type: "freelance",
    title: "Bizu da Aprovação",
    description: "Primeira experiência de um projeto real utilzando React/Next.js, onde o site foi utilizado para inscrição do curso 'Bizu da Aprovação' do Patrulheiro Jota",
    projectLink: "https://bizu-aprovacao.vercel.app",
    repositoryLink: "https://github.com/zzzBECK/bizu"
  },
];

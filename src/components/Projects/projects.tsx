import { PackageOpen } from "lucide-react";
import { ProjectCard } from "../ProjectCard/projectCard";
import { Badge } from "../ui/badge";
import { projectsData } from "@/mock/projectsData";

export function Projects() {
    return (
        <section
            className="flex flex-col items-center xl:items-start min-h-[80vh] w-full px-4 md:px-12 lg:px-24 xl:px-52 mt-24 md:mt-48"
            id="Projetos"
        >
            <Badge className="w-fit gap-2 text-5xl rounded-xl p-4 flex text-center items-center">
                <PackageOpen size={50} />
                Projetos
            </Badge>
            <div className="flex flex-wrap justify-center xl:justify-between mt-10 gap-4 w-full">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        type={project.type}
                        badges={project?.badges}
                        repositoryLink={project.repositoryLink}
                        projectLink={project.projectLink}
                        image={project.image}
                    />
                ))}
            </div>
        </section>
    );
}

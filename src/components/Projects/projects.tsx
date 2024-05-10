import { PackageOpen } from "lucide-react";
import { ProjectCard } from "../ProjectCard/projectCard";
import { Badge } from "../ui/badge";

export function Projects() {
    return (
        <section
            className="flex flex-col items-center xl:items-start h-[80vh] w-full px-4 md:px-12 lg:px-24 xl:px-52 mt-24 md:mt-48 gap-8 md:gap-16"
            id="Projetos"
        >
            <Badge className="w-fit gap-2 text-5xl rounded-xl p-4 flex text-center items-center">
                <PackageOpen size={50} />
                Projetos
            </Badge>
            <div className="flex flex-wrap justify-center xl:justify-between gap-5">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    );
}

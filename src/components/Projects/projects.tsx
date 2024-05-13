import { GitProject } from "@/types/git-project";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GiCardboardBox } from "react-icons/gi";
import { ProjectCard } from "../ProjectCard/projectCard";
import { RepositoryCard } from "../RepositoryCard/repositoryCard";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { useGetData } from "./hook/getData";

const url = "https://api.github.com/users/zzzBECK/repos";

export function Projects() {
    const [type, setType] = useState<"default" | "repos">("default");
    const [projects, setProject] = useState<GitProject[]>();
    const [isLoading, setLoading] = useState(true);
    const { t } = useTranslation();

    const projectsData = useGetData();

    const fetchRepositories = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const repos = await response.json();
            setProject(repos);
        } catch (error) {
            console.error("Failed to fetch repositories:", error);
        }
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <section
            className="flex flex-col items-center xl:items-start h-auto w-full px-4 md:px-12 lg:px-24 xl:px-52 mt-24 md:mt-48"
            id="Projetos"
        >
            <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-end">
                <Badge className="w-fit gap-2 text-5xl rounded-xl p-4 flex text-center items-center ">
                    <GiCardboardBox size={50} />
                    {t("projects")}
                </Badge>
                <div className="flex w-full md:w-fit gap-3 mt-10 md:mt-0 items-end">
                    <Button
                        className="w-1/2 md:w-fit"
                        variant={type === "default" ? "default" : "secondary"}
                        onClick={() => setType("default")}
                    >
                        {t("mainProjects")}
                    </Button>
                    <Button
                        className="w-1/2 md:w-fit"
                        variant={type === "repos" ? "default" : "secondary"}
                        onClick={() => {
                            setType("repos");
                            if (!projects) {
                                fetchRepositories();
                            }
                        }}
                    >
                        {t("allRepositories")}
                    </Button>
                </div>
            </div>
            {type === "default" && (
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
            )}
            {type === "repos" && (
                <Carousel
                    className="w-full my-10"
                    plugins={[
                        Autoplay({
                            delay: isLoading ? 3000 : 2000,
                        }),
                    ]}
                >
                    <CarouselContent className="ml-1">
                        {projects &&
                            projects.map((project, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="p-1 h-full">
                                        <RepositoryCard project={project} loading={isLoading} />
                                    </div>
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            )}
        </section>
    );
}

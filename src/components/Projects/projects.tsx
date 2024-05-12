import { PackageOpen } from "lucide-react";
import { ProjectCard } from "../ProjectCard/projectCard";
import { Badge } from "../ui/badge";
import { projectsData } from "@/mock/projectsData";
import { useEffect, useState } from "react";
import { GitProject } from "@/types/git-project";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const url = "https://api.github.com/users/zzzBECK/repos";

export function Projects() {
    const [type, setType] = useState<'default' | 'repos'>('default');
    const [projects, setProject] = useState<GitProject[]>();

    console.log(projects);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const resp = await fetch(url);
                const projects = await resp.json();
                setProject(projects);

            } catch (error) {
                console.log(error);
            }
        };
        fetchProject();
    }, []);

    return (
        <section
            className="flex flex-col items-center xl:items-start min-h-[80vh] w-full px-4 md:px-12 lg:px-24 xl:px-52 mt-24 md:mt-48"
            id="Projetos"
        >
            <div className="flex flex-col md:flex-row    w-full justify-between">
                <Badge className="w-fit gap-2 text-5xl rounded-xl p-4 flex text-center items-center">
                    <PackageOpen size={50} />
                    Projetos
                </Badge>
                <div className="flex w-fit gap-3 mt-10 md:mt-0">
                    <Button variant={type === 'default' ? 'default' : 'secondary'} onClick={() => setType('default')}>Projetos principais</Button>
                    <Button variant={type === 'repos' ? 'default' : 'secondary'} onClick={() => setType('repos')}>Todos os repositórios</Button>
                </div>
            </div>
            {type === 'default' &&
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
            }
            {type === 'repos' &&
                <Carousel className="w-full my-10">
                    <CarouselContent className="-ml-1">
                        {projects && projects.map((project, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-2xl font-semibold">{project.name}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            }
        </section>
    );
}

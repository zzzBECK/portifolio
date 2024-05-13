import { useTranslation } from "react-i18next";
import { GiBookCover } from "react-icons/gi";

import Autoplay from "embla-carousel-autoplay";
import { useGetData } from "../Projects/hook/getData";
import { RepositoryCard } from "../RepositoryCard/repositoryCard";
import { Badge } from "../ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export function Skills() {
    const { t } = useTranslation();

    const projects = useGetData();

    return (
        <section
            className="flex h-auto w-full px-4 md:px-12 lg:px-24 xl:px-52 my-24"
            id="Conhecimentos"
        >
            <div className="flex flex-col w-full h-fit gap-6">
                <Badge className="w-fit gap-2 text-5xl rounded-xl p-4 flex text-center items-center">
                    <GiBookCover size={50} />
                    {t("skills")}
                </Badge>

                <Carousel
                    className="w-full my-10"
                    plugins={[
                        Autoplay({
                            delay: 2000,
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
                                        <RepositoryCard project={project} loading={false} />
                                    </div>
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </section>
    )
}
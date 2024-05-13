import { useTranslation } from "react-i18next";
import { GiBookCover } from "react-icons/gi";

import Autoplay from "embla-carousel-autoplay";
import { SkillCard } from "../SkillCard/skillCard";
import { Badge } from "../ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export function Skills() {
    const { t } = useTranslation();

    return (
        <section
            className="flex h-auto w-full px-4 md:px-12 lg:px-24 xl:px-52 my-24"
            id="Conhecimentos"
        >
            <div className="flex flex-col w-full h-fit gap-6 items-center md:items-start">
                <Badge className="w-fit gap-2 text-4xl md:text-5xl rounded-xl p-4 flex text-center items-center">
                    <GiBookCover size={50} />
                    {t("skills")}
                </Badge>

                <Carousel
                    className="w-full my-10"
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                >
                    <CarouselContent className="ml-1">
                        {
                            [...Array(10)].map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-1 basis-full md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="p-1 h-full">
                                        <SkillCard />
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
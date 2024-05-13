import { cn } from "@/lib/utils";
import { animated, to, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";
import { useRef } from "react";
import { FaUniversity } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { useGesture } from "react-use-gesture";
import { AspectRatio } from "../ui/aspect-ratio";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Project } from "@/types/project";
import { useTranslation } from "react-i18next";
type CardProps = React.ComponentProps<typeof Card>;

export function ProjectCard({
    className,
    title,
    description,
    type,
    badges,
    repositoryLink,
    projectLink,
    image,
    ...props
}: CardProps & Project) {
    const domTarget = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    const calcX = (y: number) => {
        if (!domTarget.current) return;
        const cardRect = domTarget.current.getBoundingClientRect();
        const centery = (cardRect.top + cardRect.bottom) / 2;
        return -(y - centery) / 55;
    };

    const calcY = (x: number) => {
        if (!domTarget.current) return;
        const cardRect = domTarget.current.getBoundingClientRect();
        const centerx = (cardRect.left + cardRect.right) / 2;
        return (x - centerx) / 55;
    };

    const [{ x, y, rotateX, rotateY, rotateZ, scale, zoom }, api] = useSpring(
        () => ({
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            x: 0,
            y: 0,
            scale: 1,
            zoom: 0,
            config: { mass: 10, tension: 500, friction: 40 },
        })
    );

    useGesture(
        {
            onMove: ({ xy: [px, py], dragging }) =>
                !dragging &&
                api({
                    rotateX: calcX(py),
                    rotateY: calcY(px),
                    scale: 1.05,
                }),
            onHover: ({ hovering }) =>
                !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
        },
        { domTarget, eventOptions: { passive: false } }
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            layout
        >
            <animated.div
                ref={domTarget}
                style={{
                    x,
                    y,
                    transform: "perspective(700px) ",
                    scale: to([scale, zoom], (s, z) => s + z),
                    rotateX,
                    rotateY,
                    rotateZ,
                }}
            >
                <Card className={cn("w-[340px] h-[600px]", className)} {...props}>
                    <CardHeader className="h-[13em]">
                        <Badge className="w-fit mb-2 gap-1">
                            {type === "freelance" ? (
                                <SiFreelancer size={20} />
                            ) : (
                                <FaUniversity />
                            )}
                            {type === "freelance" ? t("freelanceProject") : t("academicProject")}
                        </Badge>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription className="text-justify">{description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col h-[16em]">
                        <div className="flex flex-wrap justify-between gap-y-2 min-h-[5em]">
                            {badges?.map((badge) => (
                                <Badge className="w-fit mb-2 gap-1 h-fit max-w-[35%] text-[12px]">
                                    <div className="text-2xl">
                                        <badge.icon />
                                    </div>
                                    {badge.text}
                                </Badge>
                            ))}
                        </div>

                        <div className="w-full mt-4">
                            <AspectRatio ratio={16 / 9} className="max-h-[165px] min-h-[165px] justify-center">
                                <img
                                    src={image}
                                    alt="Image"
                                    className="rounded-md object-cover max-h-[165px] min-h-[165px] w-full"
                                />
                            </AspectRatio>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3 justify-end min-h-[7.2em] pb-0">
                        {repositoryLink && (
                            <a className="w-full" href={repositoryLink} target="_blank">
                                <Button variant='secondary' className="w-full">
                                    <Github className="mr-2 h-4 w-4" /> {t("repository")}
                                </Button>
                            </a>
                        )}
                        {projectLink && (
                            <a className="w-full" href={projectLink} target="_blank">
                                <Button className="w-full flex">
                                    <Link className="mr-2 h-4 w-4" /> Link
                                </Button>
                            </a>
                        )}
                    </CardFooter>
                </Card>
            </animated.div>
        </motion.div>
    );
}

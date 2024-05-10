import { cn } from "@/lib/utils"
import { Project } from "@/mock/projectsData"
import { animated, to, useSpring } from "@react-spring/web"
import { Github, Link, PackageOpen } from "lucide-react"
import { useRef } from "react"
import { useGesture } from "react-use-gesture"
import { AspectRatio } from "../ui/aspect-ratio"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

type CardProps = React.ComponentProps<typeof Card>


export function ProjectCard({ className, title, description, type, badge, ...props }: CardProps & Project) {
    const domTarget = useRef<HTMLDivElement>(null);

    const calcX = (y: number) => {
        if (!domTarget.current) return;
        const cardRect = domTarget.current.getBoundingClientRect();
        const centery = (cardRect.top + cardRect.bottom) / 2;
        return -(y - centery) / 55;
    }

    const calcY = (x: number) => {
        if (!domTarget.current) return;
        const cardRect = domTarget.current.getBoundingClientRect();
        const centerx = (cardRect.left + cardRect.right) / 2;
        return (x - centerx) / 55;
    }


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
        }),
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
        { domTarget, eventOptions: { passive: false } },
    );


    return (
        <animated.div
            ref={domTarget}
            style={{
                x,
                y,
                transform: "perspective(580px)",
                scale: to([scale, zoom], (s, z) => s + z),
                rotateX,
                rotateY,
                rotateZ,
            }}
        >
            <Card className={cn("w-[340px] h-[600px]", className)} {...props}>
                <CardHeader className="h-[13em]">
                    <Badge className="w-fit mb-2 gap-2">
                        <PackageOpen />
                        {type}
                    </Badge>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col h-[16em]">

                    <div className="flex flex-wrap justify-between gap-y-2 h-[3em]">
                        {badge && <Badge className="w-fit mb-2 gap-2">
                            <badge.icon />
                            {badge.text}
                        </Badge>
                        }
                    </div>

                    <div className="w-full mt-4">
                        <AspectRatio ratio={16 / 9}>
                            <img src="setup.webp" alt="Image" className="rounded-md object-cover" />
                        </AspectRatio>
                    </div>

                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                    <Button className="w-full">
                        <Github className="mr-2 h-4 w-4" /> Repositório
                    </Button>
                    <Button className="w-full flex">
                        <Link className="mr-2 h-4 w-4" /> Link
                    </Button>
                </CardFooter>
            </Card>
        </animated.div>
    )
}
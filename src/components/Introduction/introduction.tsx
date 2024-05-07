import { GemIcon, Github, Linkedin } from "lucide-react";
import Typewriter from "typewriter-effect";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useSpring, animated, to } from "@react-spring/web";
import { useRef } from "react";
import { useGesture } from "react-use-gesture";

export function Introduction() {
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

        <section id="Introducao" className="pl-52 pr-52 h-[80vh] items-center flex justify-between">
            <div className="flex flex-col gap-4">
                <Badge className="gap-3 w-fit text-xl">
                    <GemIcon size={20} />
                    Welcome!
                </Badge>
                <h1 className="text-7xl">Alexandre Beck</h1>
                <h2 className="text-3xl">
                    <Typewriter
                        options={{
                            strings: [
                                'Developer',
                                'Front-end Developer',
                                'Back-end Developer'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </h2>
                <div className="flex justify-between">
                    <a className="flex w-2/5" href="https://github.com/zzzBECK" target="_blank">
                        <Button className="text-center flex justify-center items-center gap-2 w-full text-lg"><Github /> Github</Button>
                    </a>
                    <a className="flex w-2/5" href="https://www.linkedin.com/in/alexandre-de-santana-beck-b7336420b/" target="_blank">
                        <Button className="text-center flex justify-center items-center gap-2 w-full text-lg"><Linkedin />Linkedin</Button>
                    </a>
                </div>
            </div>
            <div className="h-1/2 flex w-fit justify-end">
                <animated.div
                    ref={domTarget}
                    style={{
                        x,
                        y,
                        transform: "perspective(600px)",
                        scale: to([scale, zoom], (s, z) => s + z),
                        rotateX,
                        rotateY,
                        rotateZ,
                    }}
                >
                    <img src="notebook.png" />
                </animated.div>
            </div>
        </section>
    )
}
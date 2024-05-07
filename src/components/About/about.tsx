import { animated, to, useSpring } from "@react-spring/web";
import { useRef } from "react";
import { useGesture } from "react-use-gesture";

export function About() {
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
        <section className="flex h-[80vh] w-full pl-52 pr-52 mt-48" id='Sobre'>
            <div className="w-1/3">
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
                    <img className="rounded-xl" src="foto.png" />
                </animated.div>
            </div>

            <div className="flex flex-col w-2/3 h-fit gap-6">
                <h1 className="text-6xl">Sobre Mim</h1>
                <div className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquid ex corrupti, consectetur ea quod animi id, eum nihil porro sunt adipisci totam nobis esse nam, a voluptatem eligendi explicabo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquid ex corrupti, consectetur ea quod animi id, eum nihil porro sunt adipisci totam nobis esse nam, a voluptatem eligendi explicabo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquid ex corrupti, consectetur ea quod animi id, eum nihil porro sunt adipisci totam nobis esse nam, a voluptatem eligendi explicabo!
                </div>
                <div className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquid ex corrupti, consectetur ea quod animi id, eum nihil porro sunt adipisci totam nobis esse nam, a voluptatem eligendi explicabo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquid ex corrupti, consectetur ea quod animi id, eum nihil porro sunt adipisci totam nobis esse nam, a voluptatem eligendi explicabo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquid ex corrupti, consectetur ea quod animi id, eum nihil porro sunt adipisci totam nobis esse nam, a voluptatem eligendi explicabo!
                </div>
            </div>

        </section>
    )
}

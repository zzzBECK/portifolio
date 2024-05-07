import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export function ParticleStar ()  {
    const particlesInit = useCallback(async (engine: Engine) => {
        

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                zLayers:1,
                fullScreen:{
                    enable:true,
                    zIndex:-1,
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            particles_nb: 1,
                        },

                    },
                },
                particles: {
                    color: {
                        value: "#a8cff0",
                    },
                    line_linked: {
                        enable: false,
                        opacity: 0.03,
                    },
                    move: {
                        direction: "right",
                        speed: 0.05,
                    },
                    number: {
                        value: 300,
                        density: {
                          enable: true,
                          value_area: 1500,
                        },
                    },
                    opacity: {
                        anim: {
                          enable: true,
                          speed: 1,
                          opacity_min: 0.05,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.3, max: 1 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
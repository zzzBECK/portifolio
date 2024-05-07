import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export function ParticleSnow ()  {
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
                
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            particles_nb: 2,
                        },

                    },
                },
                particles: {
                    color: {
                      value: "#cce3f7",
                    },
                    line_linked: {
                        enable: false,
                    },
                    move: {
                        direction: "bottom",
                        enable: true,
                        out_mode: "out",
                        speed: 1,
                    },
                    number: {
                        value: 150,
                        density: {
                          enable: false,
                        },
                    },
                    size: {
                        value: 2,
                        random: true,
                    },
                    opacity: {
                      anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.05,
                      },
                    },
                    
                },
                
            }}
        />
    );
}
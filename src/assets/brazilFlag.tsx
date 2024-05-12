import { SVGProps } from 'react';

export const BrazilFlag = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1400"
        xmlSpace="preserve"
        width="100%"
        height="100%"
        className="svg-icon rounded-sm"
        {...props}>
        <title>Bandeira Nacional</title>
        <desc>Desenho da bandeira do Brasil regulamentado pela Lei n° 5.700, de 1° de setembro de 1971, incluindo a alteração dada pela Lei n° 8.421, de 11 de maio de 1992. As cores seguem a paleta prioritária de cores do sistema de identidade visual do Ministério da Defesa, que consta no Manual de Identidade Visual do Ministério da Defesa, na edição de janeiro de 2015.</desc>
        <rect x="0" y="0" width="2000" height="1400" fill="rgb(0,112,36)" />
        <polygon points="170,700 1000,170 1830,700 1000,1230" fill="rgb(247,198,0)" />
        <circle cx="1000" cy="700" r="350" fill="rgb(33,42,116)" />
        <path d="M 661.20938 612.13125 A 350 350 0 0 1 679.86412 558.53261 A 850 850 0 0 1 1346.55097 749.01457 A 350 350 0 0 1 1334.07364 804.37818 A 800 800 0 0 0 661.20938 612.13125 Z" fill="rgb(255,255,255)" />
        <defs>
            <path id="faixa" d="M 659.73473 603.76015 A 808.5 808.5 0 0 1 1339.74817 798.04970" />
        </defs>
        <text font-family="Verdana" font-size="45" font-weight="600" word-spacing="10" letter-spacing="5" fill="rgb(0,112,36)" text-anchor="middle">
            <textPath xlinkHref="#faixa" startOffset="50%">ORDEM <tspan font-size="41">E</tspan> PROGRESSO</textPath>
        </text>
    </svg>
);


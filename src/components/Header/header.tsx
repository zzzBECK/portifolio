import { BrazilFlag } from "@/assets/brazilFlag";
import { UsaFlag } from "@/assets/usaFlag";
import i18next from "i18next";
import { LucideLinkedin } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function Header() {
    const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
    const { t } = useTranslation();

    useEffect(() => {
        const handleLanguageChange = (lng: string) => {
            setCurrentLanguage(lng);
        };

        i18next.on('languageChanged', handleLanguageChange);

        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const changeLanguage = (lang: string) => {
        i18next.changeLanguage(lang);
    };

    const scrollToComponent = useCallback((id: string) => {
        const element = document.getElementById(id);
        const header = document.querySelector('header');

        if (element && header) {
            const headerOffset = header.clientHeight;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 50;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            console.error('Element or header not found:', { element, header });
        }
    }, []);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-fit">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <a className="mr-6 flex items-center space-x-2" onClick={() => scrollToComponent('Introducao')}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            className="h-6 w-6"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <line
                                x1="208"
                                y1="128"
                                x2="128"
                                y2="208"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                            <line
                                x1="192"
                                y1="40"
                                x2="40"
                                y2="192"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="16"
                            ></line>
                        </svg>
                        <span className="hidden font-bold sm:inline-block">beck/ui</span>
                    </a>
                    <nav className="flex items-center gap-4 text-sm lg:gap-6">
                        <a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            onClick={() => scrollToComponent('Sobre')}
                        >
                            {t("aboutMe")}
                        </a>
                        <a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            onClick={() => scrollToComponent('Projetos')}
                        >
                            {t("projects")}
                        </a>
                        <a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            onClick={() => scrollToComponent('Conhecimentos')}
                        >
                            {t("skills")}
                        </a>
                        <a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            onClick={() => scrollToComponent('Contato')}
                        >
                            {t("contact")}
                        </a>
                    </nav>
                </div>
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:R16u6la:"
                    data-state="closed"
                >
                    <svg
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                    >
                        <path
                            d="M3 5H11"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        <path
                            d="M3 12H16"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        <path
                            d="M3 19H21"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </button>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/zzzBECK"
                        >
                            <Button variant="ghost" size="icon">
                                <FaGithub size={20} />

                            </Button>
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/alexandre-de-santana-beck-b7336420b/"
                        >
                            <Button variant="ghost" size="icon">
                                <LucideLinkedin size={20} />
                            </Button>
                        </a>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <div className="flex justify-center items-center w-full scale-75 transition-all">
                                        {currentLanguage === "en" ? <UsaFlag /> : <BrazilFlag />}
                                    </div>
                                    <span className="sr-only">Toggle language</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="max-w-[8em]" align="end">
                                <DropdownMenuItem onClick={() => changeLanguage("pt")} className="gap-2">
                                    <div className="flex justify-center items-center w-1/3 transition-all">
                                        <BrazilFlag />
                                    </div>
                                    Português
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => changeLanguage("en")} className="gap-2">
                                    <div className="flex justify-center items-center w-1/3 transition-all">
                                        <UsaFlag />
                                    </div>
                                    English
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}

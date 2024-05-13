import { About } from "./components/About/about";
import { Contact } from "./components/Contact/contact";
import { Header } from "./components/Header/header";
import { Introduction } from "./components/Introduction/introduction";
import { ParticleLight } from "./components/Particles/particleLight";
import { Projects } from "./components/Projects/projects";
import { Skills } from "./components/Skills/skills";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="w-screen min-h-screen flex flex-col">
        <Header />
        <Introduction />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <ParticleLight />
        <Toaster />
      </main>
    </ThemeProvider>
  );
}

export default App;

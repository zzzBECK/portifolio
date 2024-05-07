import { About } from "./components/About/about";
import { Header } from "./components/Header/header";
import { Introduction } from "./components/Introduction/introduction";
import { ParticleLight } from "./components/Particles/particleLight";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="w-screen min-h-screen flex flex-col">
        <Header />
        <Introduction />
        <About />
        <ParticleLight />
      </main>
    </ThemeProvider>
  );
}

export default App;

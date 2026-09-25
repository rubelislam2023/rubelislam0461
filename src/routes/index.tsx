import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ResearchBackground } from "@/components/lab/background";
import { Nav } from "@/components/lab/nav";
import { Hero } from "@/components/lab/hero";
import { SectionDoors } from "@/components/lab/board";
import { About } from "@/components/lab/about";
import { Experience } from "@/components/lab/experience";
import { Ecosystems } from "@/components/lab/ecosystems";
import { Skills } from "@/components/lab/skills";
import { Creative } from "@/components/lab/creative";
import { Contributions, Footer, Highlights, ResearchConsole } from "@/components/lab/rest";

const PANELS = new Set([
  "about",
  "experience",
  "ecosystems",
  "skills",
  "creative-work",
  "contributions",
  "research",
]);

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [panel, setPanel] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1);
      setPanel(PANELS.has(id) ? id : null);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (!panel) return;
    document.getElementById("open-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [panel]);

  return (
    <div className="relative min-h-screen">
      <ResearchBackground />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <SectionDoors active={panel} />
          {panel ? (
            <div id="open-panel" className="pb-6">
              <div className="flex justify-center px-5">
                <a href="#home" className="btn">
                  Close section
                </a>
              </div>
              {panel === "about" ? <About /> : null}
              {panel === "experience" ? <Experience /> : null}
              {panel === "ecosystems" ? <Ecosystems /> : null}
              {panel === "skills" ? <Skills /> : null}
              {panel === "creative-work" ? <Creative /> : null}
              {panel === "contributions" ? (
                <>
                  <Contributions />
                  <Highlights />
                </>
              ) : null}
              {panel === "research" ? (
                <div id="research">
                  <ResearchConsole />
                </div>
              ) : null}
            </div>
          ) : null}
        </main>
        <Footer />
      </div>
    </div>
  );
}

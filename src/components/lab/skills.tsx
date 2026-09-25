import {
  Activity,
  Clapperboard,
  Frame,
  Layers,
  Palette,
  Route,
  Search,
  TrendingUp,
  Users,
  Waypoints,
} from "lucide-react";
import { SKILLS } from "@/data/site";

const ICONS = {
  activity: Activity,
  search: Search,
  layers: Layers,
  chart: TrendingUp,
  users: Users,
  palette: Palette,
  frame: Frame,
  clapper: Clapperboard,
  route: Route,
  waypoints: Waypoints,
} as const;

export function Skills() {
  return (
    <section id="skills" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Practice</p>
        <h2 className="section-title mt-3">Core expertise</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => {
            const Icon = ICONS[skill.icon];
            return (
              <li key={skill.name}>
                <article className="skill-card glass flex items-center gap-4 p-5">
                  <Icon aria-hidden="true" className="size-6 shrink-0 text-cyan" />
                  <h3 className="font-display text-lg">{skill.name}</h3>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

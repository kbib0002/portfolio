import { Database, Laptop, LayoutDashboard, SquareTerminal, Zap } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: Laptop,
    name: "Full-stack Development",
    description: "Developing desktop and web-based applications from the ground up.",
    href: "/",
    cta: "Learn more",
    background: <picture><img className="absolute -right-20 -top-20 opacity-60" alt="full stack development"/></picture>,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: LayoutDashboard,
    name: "UI / UX Design",
    description: "Designing wireframes and high-fidelity mockups, complete with user journeys.",
    href: "/",
    cta: "Learn more",
    background: <picture><img className="absolute -right-20 -top-20 opacity-60" alt="ui / ux design"/></picture>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: SquareTerminal,
    name: "Scripting",
    description: "Automating operating system tasks and CI / CD.",
    href: "/",
    cta: "Learn more",
    background: <picture><img className="absolute -right-20 -top-20 opacity-60" alt="scripting"/></picture>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Zap,
    name: "Code Optimisation",
    description: "Ensuring that code has the lowest possible time and space complexities.",
    href: "/",
    cta: "Learn more",
    background: <picture><img className="absolute -right-20 -top-20 opacity-60" alt="code optimisation"/></picture>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Database,
    name: "Database Design",
    description: "Designing entity-relationship diagrams based on a set of requirements.",
    href: "/",
    cta: "Learn more",
    background: <picture><img className="absolute -right-20 -top-20 opacity-60" alt="database design"/></picture>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function ServicesBento() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

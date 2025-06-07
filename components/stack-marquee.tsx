import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const stack_code = [
  {
    name: "React",
    icon: "react"
  },
  {
    name: "Typescript",
    icon: "typescript"
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss"
  },
  {
    name: "HTML",
    icon: "html5"
  },
  {
    name: "Python",
    icon: "python"
  },
  {
    name: ".NET",
    icon: ".net"
  }
];

const stack_else = [
  {
    name: "Vite",
    icon: "vite"
  },
  {
    name: "Git",
    icon: "git"
  },
  {
    name: "MongoDB",
    icon: "mongodb"
  },
  {
    name: "Next.js",
    icon: "next.js"
  },
  {
    name: "Docker",
    icon: "docker"
  },
  {
    name: "Figma",
    icon: "figma"
  },
  {
    name: "Node.js",
    icon: "node.js"
  }
];

const StackCard = ({
  name,
  icon
}: {
  name: string;
  icon: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row justify-center items-center gap-2">
        <picture><img width="32" height="32" alt={name} src={`https://cdn.simpleicons.org/${icon}`}/></picture>
        <p>{name}</p>
      </div>
    </figure>
  );
};

export function StackMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {stack_code.map((stack) => (
          <StackCard key={stack.name} {...stack} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {stack_else.map((stack) => (
          <StackCard key={stack.name} {...stack} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

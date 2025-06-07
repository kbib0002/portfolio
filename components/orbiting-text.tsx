import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export default function OrbitingText() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={40}>
            <p>Engineer</p>
            <p className="text-center">Software Developer</p>
            <p className="text-center">UI / UX Designer</p>
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={75} reverse speed={2}>
            <p>Frontend</p>
            <p>Backend</p>
        </OrbitingCircles>
    </div>
  );
}
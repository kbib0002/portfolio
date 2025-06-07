import { MagicCard } from "@/components/magicui/magic-card";

export default function Experience() {
    return (
        <section id="experience" className="mb-32 md:mb-48 flex flex-col container w-[80%] mx-auto">
            <h1 className="text-3xl font-bold  sm:text-4xl lg:text-5xl/none">Experience</h1>
        
            <div className="mt-16 flex xl:w-[70%] mx-auto">
                <div className="flex flex-col w-full space-y-32 lg:space-y-16">
                     <div>
                        <MagicCard className="rounded-lg">
                            <div className="p-8 space-y-8">
                                <div className="flex justify-between border-b pb-8">
                                    <span className="text-lg font-bold  sm:text-xl lg:text-2xl/none">Software Developer</span>
                                    <span className="text-lg font-bold  sm:text-xl lg:text-2xl/none text-right text-muted-foreground">Architectural Window Systems</span>
                                </div>
                                <p className="text-muted-foreground text-sm md:text-base">
                                    In this role I have been leading development on a <span className="font-semibold">CNC automation project</span>,
                                    building a <span className="font-semibold">desktop application</span> and maintaining
                                    <span className="font-semibold"> existing software solutions</span> for clients.
                                </p>
                                <p className="text-muted-foreground text-sm md:text-base">
                                    The legacy software which the business works with is all within the
                                    <span className="font-semibold"> .NET</span> ecosystem, hence I have experience
                                    with <span className="font-semibold">C#</span>, <span className="font-semibold">VBA</span>
                                    , <span className="font-semibold">SQL</span> and <span className="font-semibold">WinForms</span>
                                    . On the other hand, the new desktop application which I am involved in building utilises 
                                    <span className="font-semibold"> React</span> and <span className="font-semibold">Typescript </span>
                                    with <span className="font-semibold">Vite</span> and an <span className="font-semibold">SQL</span> backend.
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        <img width="32" height="32" alt="react" src="https://cdn.simpleicons.org/react"/>
                                        <img width="32" height="32" alt="typescript" src="https://cdn.simpleicons.org/typescript"/>
                                        <img width="32" height="32" alt="node.js" src="https://cdn.simpleicons.org/node.js"/>
                                        <img width="32" height="32" alt="vite" src="https://cdn.simpleicons.org/vite"/>
                                    </div>
                                    <div>
                                        <p className="text-sm md:text-base">Aug 2024 - present</p>
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </div>
            </div>
        </section>
    );
}           
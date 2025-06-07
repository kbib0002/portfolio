import { MagicCard } from "@/components/magicui/magic-card";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen mb-32 flex flex-col container w-[80%] mx-auto">
            <h1 className="text-3xl font-bold  sm:text-4xl lg:text-5xl/none">Projects</h1>
        
            <div className="mt-16 flex xl:w-[70%] mx-auto">
                <div className="flex flex-col w-full space-y-32 lg:space-y-16">
                    <div>
                        <MagicCard className="rounded-lg">
                            <div className="p-8 space-y-8">
                                <div className="flex justify-between border-b pb-8">
                                    <span className="text-lg font-bold  sm:text-xl lg:text-2xl/none">Labour Allocation System</span>
                                    <span className="text-lg font-bold  sm:text-xl lg:text-2xl/none text-right text-muted-foreground">University Project</span>
                                </div>
                                <p className="text-muted-foreground text-sm md:text-base">
                                    A team and I are building an application in the <span className="font-semibold">Microsoft PowerApps
                                    ecosystem</span> for <a href="https://www.carlislehomes.com.au/" target="_blank"><AuroraText className="font-semibold">Carlisle Homes</AuroraText></a>. Due to a
                                    non-disclosure agreement, our development cannot be showcased.
                                </p>
                                <p className="text-muted-foreground text-sm md:text-base">
                                    The application integrates into the client&#39;s existing <span className="font-semibold">Microsoft
                                    Dynamics 365</span> environment and is expected to reduce house build times by <span className="font-semibold">
                                    40%</span>.
                                </p>
                            </div>
                        </MagicCard>
                    </div>

                     <div>
                        <MagicCard className="rounded-lg">
                            <div className="p-8 space-y-8">
                                <div className="flex justify-between border-b pb-8">
                                    <span className="text-lg font-bold  sm:text-xl lg:text-2xl/none">Behind the Veil</span>
                                    <span className="text-lg font-bold  sm:text-xl lg:text-2xl/none text-right text-muted-foreground">University Project</span>
                                </div>
                                <p className="text-muted-foreground text-sm md:text-base">
                                    A team and I built a web-based application which facilitated the online exchange of bridal
                                    services such as makeup and hair.
                                </p>
                                <div className="flex justify-between">
                                    <div className="flex space-x-2">
                                        <picture><img width="32" height="32" alt="react" src="https://cdn.simpleicons.org/react"/></picture>
                                        <picture><img width="32" height="32" alt="javascript" src="https://cdn.simpleicons.org/javascript"/></picture>
                                        <picture><img width="32" height="32" alt="mongodb" src="https://cdn.simpleicons.org/mongodb"/></picture>
                                        <picture><img width="32" height="32" alt="docker" src="https://cdn.simpleicons.org/docker"/></picture>
                                        <picture><img width="32" height="32" alt="node.js" src="https://cdn.simpleicons.org/node.js"/></picture>
                                    </div>
                                    <div>
                                        <a href="https://github.com/Monash-FIT3170/Behind-The-Veil" target="_blank">
                                            <Button className="text-sm md:text-base" variant="link">view project<ExternalLink/></Button>
                                        </a>
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
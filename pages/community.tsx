import Image from "next/image";
import { MagicCard } from "@/components/magicui/magic-card";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Community() {
    return (
        <section id="community" className="min-h-screen mb-32 flex flex-col container w-[80%] mx-auto">
            <h1 className="text-3xl font-bold  sm:text-4xl lg:text-5xl/none">Community</h1>
        
            <div className="mt-16 flex xl:w-[90%] mx-auto">
                <div className="flex flex-col w-full space-y-32 lg:space-y-16">
                    <div className="lg:flex gap-8">
                        <div className="lg:w-[50%] p-4 flex items-center">
                            <div className="columns-2 gap-4 space-y-4">
                                <Image className="rounded-lg w-full h-auto" src="/whc1.jpg" alt="whc 1" width={500} height={500}/>
                                <Image className="rounded-lg w-full h-auto" src="/whc2.jpg" alt="whc 2" width={500} height={500}/>
                                <Image className="rounded-lg w-full h-auto" src="/whc4.jpg" alt="whc 4" width={500} height={500}/>
                                <Image className="rounded-lg w-full h-auto" src="/whc3.jpg" alt="whc 3" width={500} height={500}/>
                            </div>
                        </div>

                        <div className="lg:w-[50%] flex items-center">
                            <MagicCard className="rounded-lg">
                                <div className="p-8 space-y-8">
                                    <p className="text-lg font-bold  sm:text-xl lg:text-2xl/none">Waverley Hockey Club</p>
                                    <p className="text-muted-foreground text-sm md:text-base">
                                        At just 19, I was instated in 2023 as the coach for the <span className="font-semibold">
                                        Men&#39;s Thirds team</span>. For this role, as well as taking it upon myself week-in,
                                        week-out to complete the menial tasks that kept the club running such as organising sausage
                                        sizzles and heading the kitchen or bar, I received the <AuroraText className="font-semibold">
                                        most significant contribution to the Men&#39;s Unit </AuroraText>award for the year.
                                    </p>
                                    <p className="text-muted-foreground text-sm md:text-base">
                                        In 2024, I continued my role as coach and also took on the responsibility of assistant coach
                                        for a juniors team. I helped coordinate events external to the typical winter season such as
                                        Waverley Hockey Club&#39;s participation in the <span className="font-semibold">Pride Cup </span>
                                        and the annual social summer competition.
                                    </p>
                                </div>
                            </MagicCard>
                        </div>
                    </div>

                    <div className="lg:flex gap-8">
                        <div className="lg:w-[50%] flex items-center">
                            <MagicCard className="rounded-lg">
                                <div className="p-8 space-y-8 text-right">
                                    <p className="text-lg font-bold  sm:text-xl lg:text-2xl/none">Bobby&#39;s Coaching Academy</p>
                                    <p className="text-muted-foreground text-sm md:text-base">
                                        I volunteered my time throughout 2022 and 2023 to be an assistant coach for an independent
                                        elite U16 boys hockey team. In November of both years, they competed in the <span className="font-semibold">
                                        Gryphon Cup</span>, <AuroraText className="font-semibold">winning bronze </AuroraText>in the
                                        latter year. This competition attracts teams from all over Australia and even international
                                        teams from Japan, Malaysia and Singapore.
                                    </p>
                                    <p className="text-muted-foreground text-sm md:text-base">
                                        Having created, over two years, a tight-knit group of coaching staff and young players, who had
                                        now outgrown juniors, the team remained banded in 2024 and were thrust into seniors competitions.
                                        Thus, I continued on with the team not as an assistant coach, but as a player. We
                                        <AuroraText className="font-semibold"> won gold </AuroraText>in Hockey Victoria&#39;s inaugural
                                        <span className="font-semibold"> Hockey 5s</span> tournament and <AuroraText className="font-semibold">
                                        silver </AuroraText> in the <span className="font-semibold">Senior Country Championships</span>.
                                    </p>
                                </div>
                            </MagicCard>
                        </div>

                        <div className="lg:w-[50%] p-4 flex items-center">
                            <div className="columns-2 gap-4 space-y-4">
                                <Image className="rounded-lg w-full h-auto" src="/bca1.jpg" alt="whc 1" width={500} height={500}/>
                                <Image className="rounded-lg w-full h-auto" src="/bca4.jpg" alt="whc 2" width={500} height={500}/>
                                <Image className="rounded-lg w-full h-auto" src="/bca3.jpg" alt="whc 3" width={500} height={500}/>
                                <Image className="rounded-lg w-full h-auto" src="/bca2.jpg" alt="whc 4" width={500} height={500}/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex gap-8">
                        <div className="lg:w-[50%] p-4 flex items-center">
                            <div className="gap-4 space-y-4 w-full">
                                <Image className="rounded-lg w-full h-auto" src="/run1.jpg" alt="run 1" width={500} height={500}/>
                                <Image className="rounded-lg w-full h-auto" src="/run2.jpg" alt="run 2" width={500} height={500}/>
                            </div>
                        </div>

                        <div className="lg:w-[50%] flex items-center">
                            <MagicCard className="rounded-lg">
                                <div className="p-8 space-y-8">
                                    <p className="text-lg font-bold  sm:text-xl lg:text-2xl/none">Athletics</p>
                                    <p className="text-muted-foreground text-sm md:text-base">
                                        In 2025, I turned my attention to the world of athletics. I began to compete in
                                        middle-distance and long-distance running, placing well and <AuroraText className="font-semibold">
                                        winning prize money</AuroraText> in my debut season.
                                    </p>
                                </div>
                            </MagicCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
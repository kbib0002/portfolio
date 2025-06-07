import { MoveRight} from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function About() {
    return (
        <section id="about" className="container mb-32 md:mb-48 w-[80%] mx-auto justify-content space-y-16">
            <h1 className="text-3xl font-bold  sm:text-4xl lg:text-5xl/none">About</h1>
            
            <div className="w-[90%] mx-auto space-y-4">
                <span className="block sm:text-lg lg:text-xl/none">Currently <span className="text-2xl sm:text-3xl lg:text-4xl/none"><AuroraText>...</AuroraText></span></span>
                
                <div className="flex items-start">
                    <MoveRight className="w-12 h-12 mr-4"/>
                    <span className="sm:text-lg lg:text-xl/none">Working full-time as a <AuroraText>software developer</AuroraText> at <a href="https://www.awsaustralia.com.au/" className="font-semibold transition-colors hover:text-foreground/70" target="_blank">Architectural Window Systems</a><span className="text-2xl sm:text-3xl lg:text-4xl/none"><AuroraText>.</AuroraText></span></span>
                </div>

                <div className="flex items-start">
                    <MoveRight className="w-12 h-12 align-middle mr-4"/>
                    <span className="sm:text-lg lg:text-xl/none mt-1.25">Studying for a <AuroraText>Bachelor of Engineering</AuroraText> (Honours) - Major in Software Engineering at <a href="https://www.monash.edu/" className="font-semibold transition-colors hover:text-foreground/70" target="_blank">Monash University</a><span className="text-2xl sm:text-3xl lg:text-3xl/none"><AuroraText>.</AuroraText></span></span>
                </div>
            </div>
        </section>
    )
}
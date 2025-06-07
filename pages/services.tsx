import { ServicesBento } from "@/components/services-bento";
import { StackMarquee } from "@/components/stack-marquee";

export default function Services() {
    return (
        <section id="services" className="min-h-screen flex flex-col w-full">
            <div className="w-[80%] mx-auto">
                    <h1 className="text-3xl font-bold  sm:text-4xl lg:text-5xl/none">Services</h1>
            
                <div className="mt-16 mb-16 w-[90%] mx-auto">
                    <ServicesBento/>
                </div>
            </div>
            <div className="mb-32 md:mb-48">
                <StackMarquee/>
            </div>
        </section>
    );
}
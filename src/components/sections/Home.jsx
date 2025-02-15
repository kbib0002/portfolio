import RevealOnScroll from "../RevealOnScroll";

export const Home = () => {

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                    g&#39;day, i&#39;m Kyle!
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I&#39;m a software developer based in Melbourne, Australia.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500/75 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        view projects
                    </a>

                    <a href="#contact" className="border border-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                        contact me
                    </a>
                </div>
            </div>
        </RevealOnScroll>
        </section>
    );
};

export default Home;
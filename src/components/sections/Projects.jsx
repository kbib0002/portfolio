import RevealOnScroll from "../RevealOnScroll";

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            bridal services marketplace site
                        </h3>

                        <p className="text-gray-400 mb-4">
                            A web-application for the exchange of bridal services such as hair and makeup. This project was successfully hosted online but is now deprecated.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["react.js", "javascript", "tailwind", "mongoDB", "node.js", "docker", "meteor.js"].map((tech, key) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)], transition-all" key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Monash-FIT3170/Behind-The-Veil" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                view project ➞
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            video game
                        </h3>

                        <p className="text-gray-400 mb-4">
                            A simple terminal-based video game using ASCII characters for visualisation. This project taught me the fundamentals of object-oriented programming and class design.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["java"].map((tech, key) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)], transition-all" key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            project management tool
                        </h3>

                        <p className="text-gray-400 mb-4">
                            A website that allowed individuals and teams to track their project workflow. This project was never live.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["javscript", "html", "css"].map((tech, key) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)], transition-all" key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">
                            internal student team website
                        </h3>

                        <p className="text-gray-400 mb-4">
                            A collaboration between ~30 students to create a faux internal website for a student team to progress our frontend skills. This project was never live.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["javscript", "html", "css"].map((tech, key) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)], transition-all" key={key}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </RevealOnScroll>
        </section>
    );
};

export default Projects;
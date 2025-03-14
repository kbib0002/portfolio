import RevealOnScroll from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["react.js", "typescript", "html", "css", "tailwind", "javascript"];
    const backendSkills = ["java", "python", "c#", "sql", ".net", "node.js", "mongoDB", "docker", "meteor.js", "vb", "matlab"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    about me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:border-blue-500/30 hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I work full-time as a software developer at Architectural Window Systems and study software engineering part-time at Monash University.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition" key={key}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                backend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition" key={key}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            education
                        </h3>

                        <ul className="list-disc list-inside text-gray-300 space-y-8">
                            <li>
                                <strong>Bachelor of Engineering (Honours) - Major in Software Engineering</strong> at Monash University (2022 - 2027)

                                <p className="text-gray-400 mt-2">University is where I have learned much of my tech-stack knowledge - fine-tuned through numerous projects.</p>
                            </li>
                            <li>
                                <strong>Victorian Certificate of Education</strong> at Caulfield Grammar School (2016 - 2021)
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            work experience
                        </h3>

                        <ul className="list-disc list-inside text-gray-300 space-y-8">
                            <li>
                                <strong>Software Developer </strong>at Architectural Window Systems (Aug 2024 - present)

                                <p className="text-gray-400 mt-2">In this role, i&#39;ve mainly been working within the .NET ecosystem, using C#, SQL and VB languages with technologies such as WinForms and MS SQL. My responsibilites have been: leading development on a connectivity project for the business (which will be an industry-first) and assisting in maintaining the software solutions already available for the business&#39; clients.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
        </section>
    );
};

export default About;

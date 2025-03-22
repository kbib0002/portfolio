export const NavigationBar = () => {
    

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">kylebibby<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">.au</span></a>

                    

                    <div className="md:flex item-center space-x-8">
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>

                        <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
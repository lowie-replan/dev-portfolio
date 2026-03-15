import { useState, useEffect } from "react";

type SectionId = 'home' | 'tech_toolkit' | 'projects' | 'contact';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<SectionId>('home');
    const classContent = "px-4 py-1 transition-all duration-500";
    const activeClass = "bg-accent text-background rounded-full";
    const inactiveClass = "hover:bg-accent/20 hover:rounded-full";

    // ======== HANDLE USEEFFECT ======== 
    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            rootMargin: '-30% 0px -60% 0px',
            threshold: 0
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id as SectionId);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        const sections: SectionId[] = ['home', 'tech_toolkit', 'projects', 'contact'];

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    
    // ======== RENDER NAVIGATION LINKS ========
    const renderNavLinks = (isMobile: boolean) => {
        const links: { name: string; id: SectionId }[] = [
            { name: 'Home', id: 'home' },
            { name: 'Technical Toolkit', id: 'tech_toolkit' },
            { name: 'Projects', id: 'projects' },
            { name: 'Contact', id: 'contact' },
        ];

        return links.map((link) => (
            <li key={link.id}>
                <a 
                    href={`#${link.id}`} 
                    className={isMobile 
                        ? `block py-2 ${activeSection === link.id ? 'text-accent font-bold' : 'hover:text-accent'}`
                        : `${classContent} ${activeSection === link.id ? activeClass : inactiveClass}`
                    }
                    onClick={() => setIsOpen(false)}
                >
                    {link.name}
                </a>
            </li>
        ));
    };

    return (

        // ======== NAVBAR ========
        <nav className="bg-background/20 backdrop-blur-sm p-4 px-8 lg:px-12 text-white sticky top-0 z-50 shadow-[0_4px_15px_0_rgba(178,250,255,0.1)]">
            <div className="flex justify-between items-center max-w-7xl mx-auto">

                {/* ======== NAV LOGO ======== */}
                <div className="text-white hover:cursor-pointer">
                    <img src="./images/Logo.png" alt="Logo" className="w-10 h-10 object-contain"/>
                </div>

                {/* ======== NAV LINKS ======== */}
                <ul className="text-white hidden lg:flex gap-8 items-center">
                    {renderNavLinks(false)}
                </ul>

                {/* ======== NAV BUTTON ======== */}
                <button 
                    className="lg:hidden text-2xl focus:outline-none hover:cursor-pointer" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>
            
            {isOpen && (
                <ul className="
                    absolute top-full left-0 w-full bg-background/90 
                    backdrop-blur-md flex flex-col gap-4 p-6 animate-fadeIn 
                    lg:hidden text-center items-center"
                >
                    {renderNavLinks(true)}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
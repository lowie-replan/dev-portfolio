import {aboutData} from "./AboutData";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 md:px-12">

            {/* ======== SECTION HEADER ======== */}
            <div className="flex items-center">
                <div className="h-[30px] w-[8px] bg-accent rounded-full"></div>
                <h1 className="p-4 text-2xl md:text-3xl font-bold text-accent flex items-center whitespace-nowrap">About</h1>
            </div>

            <div>
                {/* ======== DESCRIPTION ======== */}
                <p className="text-zinc-500 mb-10">
                    I build accessible, user-friendly, and innovative digital experiences. 
                    I develop using the power of 
                    technolgy to bridge gaps and solve real-world problems. I specialize in 
                    <span className="text-accent font-semibold"> Full-Stack Development</span> and 
                    <span className="text-accent font-semibold"> Mobile Applications</span>, 
                    with a deep interest in integrating 
                    <span className="text-accent font-semibold"> AI & Machine Learning</span> to 
                    create smarter, more impactful technical solutions.
                </p>

                {/* ======== MAPPING ACHIEVEMENTS AND CERTIFICATIONS ======== */}
                <h2 className="text-white text-lg md:text-xl font-bold mb-4">Achievements & Certifications</h2>
                <div className="flex gap-5 flex-col md:flex-row md:flex-wrap">
                    {aboutData.map((data) => (
                        <div className="border border-accent/10 items-center px-4 py-2 rounded-xl bg-accent/5 text-sm md:text-base">
                            <div className="text-white font-semibold">{data.label}</div>
                            <div className="text-xs text-accent/50">{data.from}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
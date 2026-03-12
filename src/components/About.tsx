import TechCards from "./TechCards";

const About = () => {
    return (
        <div className="flex-1 items-center mx-8 md:mx-12">
            <div className="flex items-start flex-col mb-5">
                <div className="flex items-center">
                    <div className="h-[30px] w-[8px] bg-accent rounded-full"></div>
                    <h1 className="p-4 text-2xl md:text-3xl font-semibold text-accent flex items-center whitespace-nowrap">Technical Toolkit</h1>
                </div>
                <div className="text-zinc-500">
                    <p>A curated collection of frameworks, languages, and technologies I used to build scalable AI solutions, web and mobile applications.</p>
                </div>
                {/* <div className="h-[3px] w-full bg-accent"></div> */}
            </div>
            <div>
                <TechCards/>
            </div>
            {/* <div className="p-6 py-8 md:p-8 rounded-xl text-center text-white ">
                <p>
                    I build and develop accessible, user-friendly, and innovative web and mobile applications. 
                    Since I created my first program in computer laboratory, I am captivated and impressed by the power of technology 
                    to connect people and to solve real-world problems. I am interested in AI & Machine Learning, Software 
                    & Web Development, and UI & UX Design, and actively honing my skills in these areas to produce and develop 
                    innovative technical solutions.
                </p>
                <SkillCards/>
            </div> */}
            
        </div>
    );
};

export default About;
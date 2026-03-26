import TypingEffect from '../../components/TypingEffect';
import SocialLinks from '../../components/SocialLinks';


const effects = "rounded-lg hover:cursor-pointer hover:scale-101 hover:shadow-[0_0_20px_0_rgba(178,250,255,0.5)] transition-all duration-300 p-2.5 px-8 font-medium";

const Hero = () => {

    return (

        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-24 lg:py-20 flex items-center justify-center">
            <div className="flex-1 flex flex-col text-center items-center gap-4">

                {/* ======== INTRODUCTION ======== */}
                <span className="text-white text-2xl font-bold lg:text-4xl font-mono">Hi, I am</span>
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#7ebefe] to-[#b2faff] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(178,250,255,0.5)] animate-pulse">Lowie John Replan</h1>
                <span><TypingEffect/></span>

                {/* ======== HERO BUTTONS ======== */}
                <div className="flex gap-3 mt-8">
                    <a href="#projects"><button className={`bg-accent ${effects}`}>View Projects</button></a>
                    <a 
                        href="/Lowie_Replan_CV.pdf" 
                        download="Lowie_Replan_CV.pdf"><button 
                        className={`bg-transparent text-accent border border-accent ${effects}`}>Download CV</button>
                    </a>
                </div>
                    
                {/* ======== SOCIAL LINKS ======== */}
                <div className='mt-4'>
                    <SocialLinks></SocialLinks> 
                </div>
            </div>
        </div>
    );
};

export default Hero;
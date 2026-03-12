import TypingEffect from './TypingEffect';
import SocialLinks from './SocialLinks';

interface HeroProps {
  name: string;
}

const effects = "rounded-lg hover:cursor-pointer hover:shadow-[0_0_20px_0_rgba(178,250,255,0.5)] transition-all duration-300 p-2.5 px-8 mt-8 font-medium";

const Hero: React.FC<HeroProps> = ({ name }) => {
    return (
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 flex flex-col gap-2 order-2 md:order-1 md:items-start md:text-left text-center items-center">
                <span className="text-accent">Hi, I am</span>
                <h1 className="text-3xl md:text-5xl font-semibold text-white">{name}</h1>
                <span><TypingEffect/></span>

                <div className="flex gap-3">
                    <button className={`bg-accent ${effects}`}>View Projects</button>
                    <button className={`bg-transparent text-accent border border-accent ${effects}`}>Download CV</button>
                </div>
                    
                <div className='mt-8'>
                    <SocialLinks></SocialLinks>
                </div>
            </div>

            <div className="flex-1 flex justify-center order-1 md:order-2">
                <img 
                src="./images/Personal_Logo.png" 
                alt="Lowie John Replan" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-[4px] border-accent shadow-[0_0_30px_0_rgba(178,250,255,1)] animate-pulse"
                />
            </div>
            
        </div>
    );
};

export default Hero;
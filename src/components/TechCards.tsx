import { FaCode, FaMobileAlt, FaMicrochip, FaPalette } from "react-icons/fa";

const mobile = [];
const ai = [];
const others = [];

const TechCards = () => {
    const webLanguages = [
        {label: "Javascript", color: "#F7DF1E"},
        {label: "Typescript", color: "#3178C6"},
        {label: "PHP", color: "#777BB4"}
    ];

    return (
        <div className="flex-1 items-center grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white/5 p-5 items-start rounded-xl">
                <div className="flex gap-5 items-center mb-3">
                    <div className="p-4 rounded-xl text-accent bg-accent/10 text-2xl"><FaCode/></div>
                    <h4 className="text-xl font-semibold text-white">Web Development</h4>
                </div>
                <div className="flex text-center items-center mb-3">
                    <p className="text-white text-sm">Languages:</p>
                    {webLanguages.map((webLang) => (
                        <div 
                         style={{backgroundColor: `${webLang.color}1A`, borderColor: `${webLang.color}33`}}
                         className={`flex gap-3 items-center p-1 px-3 ml-2 rounded-full inline-flex border border-white/5`}
                        >
                        <span
                         style={{color: `${webLang.color}`}}
                         className="text-xs font-medium">
                            {webLang.label}
                        </span>
                    </div>
                    ))}
                </div>
                <div className="flex text-center items-center">
                    <p className="text-white text-sm">Frameworks/Tech:</p>
                    {webLanguages.map((webLang) => (
                        <div 
                         style={{backgroundColor: `${webLang.color}1A`, borderColor: `${webLang.color}33`}}
                         className={`flex gap-3 items-center p-1 px-3 ml-2 rounded-full inline-flex border border-white/5`}
                        >
                        <span
                         style={{color: `${webLang.color}`}}
                         className="text-xs font-medium">
                            {webLang.label}
                        </span>
                    </div>
                    ))}
                </div>
                
            </div>
            <div className="bg-white/5">
                <h6>card 1</h6>
            </div>
            <div className="bg-white/5">
                <h6>card 1</h6>
            </div>
            <div className="bg-white/5">
                <h6>card 1</h6>
            </div>

        </div>
    );
};

export default TechCards;
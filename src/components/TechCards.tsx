import { FaCode, FaMobileAlt, FaMicrochip, FaPalette } from "react-icons/fa";

const TechCards = () => {

    // Web Dev Data
    const webLanguages = [
        {label: "Javascript", color: "#F7DF1E"},
        {label: "Typescript", color: "#3178C6"},
        {label: "PHP", color: "#777BB4"}
    ];
    const webTech = [
        {label: "React", color: "#61DAFB"},
        {label: "Laravel", color: "#FF2D20"},
        {label: "HTML", color: "#E34F26"},
        {label: "CSS", color: "#1572B6"},
        {label: "Bootstrap", color: "#7952B3"}
    ];
    const database = [
        {label: "MySQL", color: "#4479A1"}
    ];

    //Mobile Dev Data
    const mobileLanguages = [
        {label: "Java", color: "#007396"},
        {label: "Kotlin", color: "#7F52FF"}
    ];

    const mobileFramework = [
        {label: "React-Native", color: "#007396"},
        {label: "XML", color: "#7F52FF"},
        {label: "Gradle", color: "#7F52FF"},
    ];

    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
                {header: "Web Developmet", icon: <FaCode/> },
                {header: "Mobile Developmet", icon: <FaMobileAlt/>},
                {header: "AI & Machine Learning", icon: <FaMicrochip/>},
                {header: "Design & Dev Tools", icon: <FaPalette/>}
            ].map((item) => (
                
                <div className="bg-accent/5 p-5 items-start rounded-xl">

                    {/* Header Section */}
                    <div className="flex gap-5 items-center mb-3">
                        <div className="p-4 rounded-xl text-accent bg-accent/10 text-2xl">{item.icon}</div>
                        <h4 className="text-xl font-bold text-white">{item.header}</h4>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-zinc-500 text-sm leading-relaxed">
                        Building scalable, full-stack applications with a focus on 
                        responsive frontend interfaces and robust backend logic.
                    </p>

                    {/* Mapping the categories and pills */}
                    {[
                        { title: "Languages", data: webLanguages },
                        { title: "Frameworks & Tech", data: webTech },
                        { title: "Database", data: database },
                    ].map((section, idx) => (
                        <div key={idx} className="mb-5 last:mb-0">
                            <p className="text-white text-sm font-semibold mb-2">
                                {section.title}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {section.data.map((item) => (
                                    <div
                                    key={item.label}
                                    style={{
                                        backgroundColor: `${item.color}1A`,
                                        borderColor: `${item.color}33`
                                    }}
                                    className="px-3 py-1 rounded-full border flex items-center">
                                        <span 
                                        style={{color:`${item.color}`}}
                                        className="text-xs font-medium">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div> 
    );
};

export default TechCards;
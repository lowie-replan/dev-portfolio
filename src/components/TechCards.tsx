import { FaCode, FaMobileAlt, FaMicrochip, FaPalette } from "react-icons/fa";

const TechCards = () => {

    // ================ WEB DEV DATA ================
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
    const webDatabase = [
        {label: "MySQL", color: "#4479A1"}
    ];

    // ================ MOBILE DEV DATA ================
    const mobileLanguages = [
        {label: "Java", color: "#007396"},
        {label: "Kotlin", color: "#7F52FF"}
    ];

    const mobileTech = [
        {label: "React-Native", color: "#61DAFB"},
        {label: "XML", color: "#E34C26"},
        {label: "Gradle", color: "#851bdc"},
    ];
    const mobileDatabase = [
        {label: "SQLite", color: "#005f8a"}
    ];

    //================ MACHINE LEARNING DATA ================
    const aiLanguage = [
        {label: "Python", color: "#3776AB"}
    ];
    const toolMods = [
        {label: "YOLOv8", color: "#0062FF"},
        {label: "TFLite", color: "#FF6F00"},
        {label: "Roboflow", color: "#6706CE"},
        {label: "Google Colab", color: "#F9AB00"}
    ];
    const expertise = [
        {label: "Data Annotation", color: "#61DAFB"},
        {label: "Model Evaluation", color: "#61DAFB"},
        {label: "Fine Tuning", color: "#61DAFB"},
        {label: "Transfer Learning", color: "#61DAFB"},
    ]

    // ================ DESIGN & DEV TOOLS DATA ================
    const design = [
        {label: "Figma", color: "#F24E1E"},
        {label: "Photoshop", color: "#31A8FF"},
        {label: "Canva", color: "#00C4CC"}
    ]

    const workflow = [
        {label: "Git", color: "#F05032"},
        {label: "VS Code", color: "#007ACC"},
        {label: "Android Studio", color: "#3DDC84"}
    ]


    // ================ ARRAY OF ALL CATEGORIES ================
    const categories = [
        {
            header: "Web Development",
            icon: <FaCode/>,
            description: "Building scalable, full-stack applications with a focus on responsive frontend interfaces and robust backend logic.",
            sections: [
                {title: "Languages", data: webLanguages},
                {title: "Frameworks & Tech", data: webTech},
                {title: "Database", data: webDatabase}
            ]
        },
        {
            header: "AI & Machine Learning",
            icon: <FaMicrochip/>,
            description: "Specializing in real-time computer vision and model optimization, from data augmentation to edge deployment.",
            sections: [
                {title: "Languages", data: aiLanguage},
                {title: "Tools & Models", data: toolMods},
                {title: "Expertise", data: expertise}
            ]
        },
        {
            header: "Mobile Development",
            icon: <FaMobileAlt/>,
            description: "Designing and developing cross-platform and native-standard mobile applications",
            sections: [
                {title: "Languages", data: mobileLanguages},
                {title: "Frameworks & Tech", data: mobileTech},
                {title: "Database", data: mobileDatabase}
            ]
        },
        {
            header: "Design & Dev Tools",
            icon: <FaPalette/>,
            description: "Utilizing industry-standard design tools and version control systems to ensure clean, collaborative, and user-centric development.",
            sections: [
                {title: "Design", data: design},
                {title: "Workflow", data: workflow}
            ]
        }
    ];
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
                <div key={index} className="bg-accent/5 p-5 items-start rounded-xl">

                    {/* Header Section */}
                    <div className="flex gap-5 items-center mb-3">
                        <div className="p-4 rounded-xl text-accent bg-accent/10 text-2xl">{category.icon}</div>
                        <h4 className="text-xl font-bold text-white">{category.header}</h4>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-zinc-500 text-sm leading-relaxed">
                        {category.description}
                    </p>

                    {/* Sections */}
                    {category.sections.map((section, idx) => (
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
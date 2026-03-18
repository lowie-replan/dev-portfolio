import type { ReactNode } from "react";
import { FaCode, FaMobileAlt, FaMicrochip, FaPalette } from "react-icons/fa";

// ======== ITEM INTERFACES ========
interface TechItem {
  label: string;
  color: string;
}

interface Section {
  title: string;
  data: TechItem[];
}

interface Category {
  header: string;
  icon: ReactNode;
  description: string;
  sections: Section[];
}

// ======== WEB DEV DATA ========
const webLanguages: TechItem[] = [
    {label: "Javascript", color: "#F7DF1E"},
    {label: "Typescript", color: "#3178C6"},
    {label: "PHP", color: "#777BB4"}
];
const webTech: TechItem[] = [
    {label: "React", color: "#61DAFB"},
    {label: "Laravel", color: "#FF2D20"},
    {label: "HTML", color: "#E34F26"},
    {label: "CSS", color: "#1572B6"},
    {label: "Bootstrap", color: "#7952B3"}
];
const webDatabase: TechItem[] = [
    {label: "MySQL", color: "#4479A1"}
];


// ======== MOBILE DEV DATA ========
const mobileLanguages: TechItem[] = [
    {label: "Java", color: "#007396"},
    {label: "Kotlin", color: "#7F52FF"}
];
const mobileTech: TechItem[] = [
    {label: "React-Native", color: "#61DAFB"},
    {label: "XML", color: "#E34C26"},
    {label: "Gradle", color: "#851bdc"},
];
const mobileDatabase: TechItem[] = [
    {label: "MySQL", color: "#4479A1"}
];


// ======== MACHINE LEARNING DATA ========
const aiLanguage: TechItem[] = [
    {label: "Python", color: "#3776AB"}
];
const toolMods: TechItem[] = [
    {label: "YOLOv8", color: "#0062FF"},
    {label: "TFLite", color: "#FF6F00"},
    {label: "Roboflow", color: "#6706CE"},
    {label: "Google Colab", color: "#F9AB00"}
];
const expertise: TechItem[] = [
    {label: "Data Annotation", color: "#61DAFB"},
    {label: "Model Evaluation", color: "#61DAFB"},
    {label: "Fine Tuning", color: "#61DAFB"},
    {label: "Transfer Learning", color: "#61DAFB"},
]


// ======== DESIGN & DEV TOOLS DATA ========
const design: TechItem[] = [
    {label: "Figma", color: "#F24E1E"},
    {label: "Photoshop", color: "#31A8FF"},
    {label: "Canva", color: "#00C4CC"}
]
const workflow: TechItem[] = [
    {label: "Git", color: "#F05032"},
    {label: "Vite", color: "#646CFF"},
    {label: "VS Code", color: "#007ACC"},
    {label: "Android Studio", color: "#3DDC84"}
]


// ======== ARRAY OF ALL CATEGORIES ========
export const categories: Category[] = [
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

export default categories;
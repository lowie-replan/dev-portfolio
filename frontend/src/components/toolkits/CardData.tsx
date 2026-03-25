import type { ReactNode } from "react";
import { FaCode, FaMobileAlt, FaMicrochip, FaPalette } from "react-icons/fa";

// ======== ITEM INTERFACES ========
interface Section {
  title: string;
}

interface Category {
  header: string;
  icon: ReactNode;
  description: string;
  sections: Section[];
}

// ======== ARRAY OF ALL CATEGORIES ========
export const categories: Category[] = [
    {
        header: "Web Development",
        icon: <FaCode/>,
        description: "Building scalable, full-stack applications with a focus on responsive frontend interfaces and robust backend logic.",
        sections: [
            {title: "Languages"},
            {title: "Frameworks & Tech"},
            {title: "Database"}
        ]
    },
    {
        header: "AI & Machine Learning",
        icon: <FaMicrochip/>,
        description: "Specializing in real-time computer vision and model optimization, from data augmentation to edge deployment.",
        sections: [
            {title: "Languages"},
            {title: "Tools & Models"},
            {title: "Expertise"}
        ]
    },
    {
        header: "Mobile Development",
        icon: <FaMobileAlt/>,
        description: "Designing and developing cross-platform and native-standard mobile applications",
        sections: [
            {title: "Languages"},
            {title: "Frameworks & Tech"},
            {title: "Database"}
        ]
    },
    {
        header: "Design & Dev Tools",
        icon: <FaPalette/>,
        description: "Utilizing industry-standard design tools and version control systems to ensure clean, collaborative, and user-centric development.",
        sections: [
            {title: "Design"},
            {title: "Workflow"}
        ]
    }
];

export default categories;
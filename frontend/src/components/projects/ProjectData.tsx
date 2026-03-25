// ======== ITEM INTERFACES ========
interface Tags {
    label: string;
}

interface Projcards {
    imgSrc: string;
    cardTitle: string;
    description: string;
    tags: Tags [];
    techStack: TechItem [];
}

interface TechItem {
  label: string;
  color: string;
}

// ======== PROJECT CARD DATA ========
export const projectData: Projcards[] = [
    {
        imgSrc: "./images/projects/optispeak_ml.png", 
        cardTitle: "Riverside Medical Center Inc. Mobile Application and Management System",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur autem corrupti itaque dolor aperiam voluptatibus dignissimos eos nemo laborum distinctio quos dolores.",
        tags: [
            {label: "Mobile Development"},
            {label: "Full-Stack Development"}
        ],
        techStack: [
            {label: "Typescript", color: "#3178C6"},
            {label: "React-Native", color: "#61DAFB"},
            {label: "PHP", color: "#777BB4"},
            {label: "Laravel", color: "#FF2D20"},
            {label: "MySQL", color: "#4479A1"}
        ]
    },
    {
        imgSrc: "./images/projects/optispeak_ml.png", 
        cardTitle: "YOLOv8 in Real-Time Indoor Object Detection and Audio Assistance for Visually Impaired Users", 
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur autem corrupti itaque dolor aperiam voluptatibus dignissimos eos nemo laborum distinctio quos dolores.",
        tags: [
            {label: "Mobile Development"},
            {label: "Machine Learning"},
            {label: "Computer Vision"}
        ],
        techStack: [
            {label: "Python", color: "#3776AB"},
            {label: "Kotlin", color: "#7F52FF"},
            {label: "XML", color: "#E34C26"},
            {label: "Gradle", color: "#851bdc"},
            {label: "YOLOv8", color: "#0062FF"},
            {label: "TFLite", color: "#FF6F00"},
        ]
    },
    {
        imgSrc: "./images/Logo.png", 
        cardTitle: "Mr. Squidee Point of Sale (POS) System", 
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur autem corrupti itaque dolor aperiam voluptatibus dignissimos eos nemo laborum distinctio quos dolores.",
        tags: [
            {label: "Full-Stack Development"}
        ],
        techStack: [
            {label: "HTML", color: "#E34F26"},
            {label: "CSS", color: "#1572B6"},
            {label: "Javascript", color: "#F7DF1E"},
            {label: "Bootstrap", color: "#7952B3"},
            {label: "MySQL", color: "#4479A1"}
        ]
    },
    {
        imgSrc: "./images/projects/optispeak_ml.png", 
        cardTitle: "Power Fitness Gym Website", 
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur autem corrupti itaque dolor aperiam voluptatibus dignissimos eos nemo laborum distinctio quos dolores.",
        tags: [
            {label: "Web Development"}
        ],
        techStack: [
            {label: "HTML", color: "#E34F26"},
            {label: "CSS", color: "#1572B6"},
            {label: "Javascript", color: "#F7DF1E"},
            {label: "Bootstrap", color: "#7952B3"}
        ]
    },
    {
        imgSrc: "./images/projects/optispeak_ml.png", 
        cardTitle: "T-Shirt Full Sublimation Designs", 
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur autem corrupti itaque dolor aperiam voluptatibus dignissimos eos nemo laborum distinctio quos dolores.",
        tags: [
            {label: "Design and Concepts"}
        ],
        techStack: [
            {label: "Photoshop", color: "#31A8FF"}
        ]
    }
    
];
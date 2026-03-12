const SkillCards = () => {
    const skillSets = [
        {imageSrc: "./images/skills/java.png", label: "Java", animation: "3s"},
        {imageSrc: "./images/skills/html5.png", label: "HTML", animation: "4s"},
        {imageSrc: "./images/skills/css.png", label: "CSS", animation: "3.5s"},
        {imageSrc: "./images/skills/react.png", label: "React", animation: "3s"},
        {imageSrc: "./images/skills/typescript.png", label: "Typescript", animation: "4s"},
        {imageSrc: "./images/skills/javascript.png", label: "Javascript", animation: "3.5s"},
        {imageSrc: "./images/skills/python.png", label: "Python", animation: "3s"},
        {imageSrc: "./images/skills/php.png", label: "PHP", animation: "3.5s"},
        {imageSrc: "./images/skills/mysql.png", label: "MySQL", animation: "4s"},
        {imageSrc: "./images/skills/laravel.png", label: "Laravel", animation: "3.5s"},
        {imageSrc: "./images/skills/bootstrap.png", label: "Bootstrap", animation: "3s"},
        {imageSrc: "./images/skills/figma.png", label: "Figma", animation: "4s"},
        {imageSrc: "./images/skills/photoshop.png", label: "Photoshop", animation: "3s"}
    ];

    return (
        <div className="flex flex-wrap gap-4 md:gap-6 mt-8 justify-center">
            {skillSets.map((skills, index) => (
                <div 
                    key={skills.label}
                    className="animate-smooth-float flex gap-3 items-center p-2 px-4 rounded-md bg-white/5 border border-white/5"
                    style={{ 
                        '--float-duration': skills.animation, 
                        '--float-delay': `${index * 0.15}s` 
                    } as React.CSSProperties}>
                    <img src={skills.imageSrc} alt={skills.label} className="h-5 md:h-8 object-contain"/>
                    <div className="text-accent text-sm md:text-base font-medium">{skills.label}</div>
                </div>
            ))}
        </div>
    );
};
export default SkillCards;
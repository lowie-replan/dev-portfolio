const Projects = () => {

    const line = <div className="h-[3px] w-full bg-accent"></div>;

    const projectCards = [
        {imgSrc: "./images/Personal_Logo.png", cardTitle: "Riverside Medical Center Inc. Mobile Application", tags: "Full Stack | Mobile Development"},
        {imgSrc: "./images/projects/optispeak_ml.png", cardTitle: "YOLOv8 in Real-Time Indoor Object Detection and Audio Assistance for Visually Impaired Users", tags: "ML | Mobile Development"},
        {imgSrc: "./images/Personal_Logo.png", cardTitle: "Mr. Squidee Point of Sale (POS) System", tags: "Full Stack Development"},
        {imgSrc: "./images/Personal_Logo.png", cardTitle: "Power Fitness Gym Website", tags: "Web Development"},
        {imgSrc: "./images/Personal_Logo.png", cardTitle: "T-Shirt Full Sublimation Designs", tags: "Shirt Designs"}
        
    ];
    return (
        <div className="flex-1 items-center px-8 md:px-12">
            <div className="flex items-center">
                {line}
                <h1 className="text-2xl md:text-3xl font-bold text-accent flex items-center whitespace-nowrap p-4">Projects & Works</h1>
                {line}
            </div>
            <div className="px-2">
                <div className="
                    flex flex-col overflow-y-auto h-[700px] border-y-2 md:border-y-0
                    md:flex-row md:overflow-x-auto md:h-auto md:border-x-2 snap-x
                    gap-8 custom-scrollbar py-10 px-5 border-accent rounded-xl"
                    >
                    {projectCards.map((cards) => (
                        <div className="
                            min-w-[300px] bg-white/5 rounded-2xl snap-center 
                            p-5 flex flex-col justify-between text-left hover:scale-105 transition-all duration-500"
                            >
                            <div className="rounded-xl w-full border border-zinc-600">
                                <img src={cards.imgSrc} alt="" className="w-full h-full object-cover rounded-xl aspect-video"/>
                            </div>
                            <div className="mt-5">
                                <div className="text-white font-semibold line-clamp-2">{cards.cardTitle}</div>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="text-xs text-zinc-400 border border-zinc-400 px-2 p-0.5 inline-block mt-5 rounded-full">{cards.tags}</div>
                                <button className="text-accent text-sm rounded-full hover:cursor-pointer mt-3 flex items-center gap-2">View Details</button>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default Projects;
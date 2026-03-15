import { projectData } from "./ProjectData";

const Projects = () => {

    return (

        <div className="flex-1 items-center px-8 md:px-12">

            {/* ======== SECTION HEADER ======== */}
            <div className="flex items-center">
                <div className="h-[30px] w-[8px] bg-accent rounded-full"></div>
                <h1 className="p-4 text-2xl md:text-3xl font-bold text-accent flex items-center whitespace-nowrap">Works & Projects</h1>
            </div>

            {/* ======== SECTION DESCRIPTION ======== */}
            <div className="text-zinc-500 mb-5 leading-relaxed">
                <p>
                    Turning complex ideas into functional digital products. 
                    This gallery showcases my expertise in building intelligent systems, 
                    mobile applications, and scalable web architectures.
                </p>
            </div>

            {/* ======== WRAPPER ======== */}
            <div className="flex gap-5 flex-col">

                {/* ======== CARD BODY ======== */}
                {projectData.map((data) => (
                    <div className="
                        grid grid-cols-1 lg:grid-cols-2 bg-accent/5 p-5
                        rounded-xl gap-5 border border-accent/10 items-center">

                        {/* ======== CARD IMAGE ======== */}
                        <div>
                            <img 
                                src={data.imgSrc} 
                                alt="" 
                                className="w-full h-auto aspect-video object-cover rounded-xl border border-accent/10"
                            />
                        </div>

                        {/* ======== CARD CONTENT ======== */}
                        <div className="flex flex-col gap-3">

                            {/* ======== CARD TITLE & DESCRIPTION ======== */}
                            <div className="text-accent font-bold text-lg md:text-xl">{data.cardTitle}</div>
                            <div className="flex flex-col gap-5">
                                <p className="text-zinc-500 leading-relaxed text-base">
                                    {data.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {data.tags.map((dataTags) => (
                                        <span className="
                                            py-1 px-3 border border-accent/10 w-fit 
                                            bg-white/10 text-accent rounded-md text-sm">
                                            {dataTags.label}
                                        </span>
                                    ))}
                                </div> 
                            </div>

                            {/* ======== PROJECT TECH TAGS ======== */}
                            <span className="text-white text-sm font-bold mt-5">Tools & Frameworks</span>
                            <div className="flex flex-wrap gap-2">
                                {data.techStack.map((stacks) => (
                                    <div
                                    key={stacks.label}
                                    style={{
                                        backgroundColor: `${stacks.color}1A`,
                                        borderColor: `${stacks.color}33`
                                    }}
                                    className="px-3 py-1 rounded-md border flex items-center">
                                        <span 
                                        style={{color:`${stacks.color}`}}
                                        className="text-xs font-medium">
                                            {stacks.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
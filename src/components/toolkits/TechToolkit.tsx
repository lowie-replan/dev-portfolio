import TechCards from "./TechCards";

const TechToolkit = () => {
    return (

        // ================ TECHNICAL TOOLKIT ================ 
        <div className="max-w-7xl mx-auto flex-1 items-center px-8 md:px-12">
            <div className="flex items-start flex-col mb-5">

                {/* ======== SECTION HEADER ======== */}
                <div className="flex items-center">
                    <div className="h-[30px] w-[8px] bg-accent rounded-full"></div>
                    <h1 className="p-4 text-2xl md:text-3xl font-bold text-accent flex items-center whitespace-nowrap">Technical Toolkit</h1>
                </div>

                {/* ======== SECTION DESCRIPTION ======== */}
                <div className="text-zinc-500 leading-relaxed">
                    <p>
                        A curated collection of frameworks, languages, and technologies 
                        I used to build and develop scalable AI solutions, web and mobile applications.
                    </p>
                </div>
            </div>

            {/* ======== DISPLAY CARDS ======== */}
            <div>
                <TechCards/>
            </div>
        </div>
    );
};

export default TechToolkit;
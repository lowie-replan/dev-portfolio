import AdminProjectDisplay from "../../components/admin/AdminProjectDisplay";

const Projects = () => {
    
    return (

        <div className="max-w-7xl mx-auto flex-1 items-center px-8 md:px-12">

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

            <AdminProjectDisplay/>
        </div>
    );
};

export default Projects;
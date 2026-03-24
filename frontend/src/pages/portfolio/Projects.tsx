import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";

const Projects = () => {

    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase
                .from("projects")
                .select("*")
                .order("created_at", {ascending: false});
            if (error) {
                console.error("Error fetching projects:", error);
            } else {
                setProjects(data || []);
            }
            setLoading(false);
        };

        fetchProjects();

    }, []);

    if (loading) return <div className="text-center py-20 text-zinc-500 text-3xl font-semibold">Loading Projects...</div>;

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

            {/* ======== WRAPPER ======== */}
            <div className="flex gap-5 flex-col">

                {/* ======== CARD BODY ======== */}
                {projects.map((data) => (
                    <div key={data.id} className="
                        grid grid-cols-1 lg:grid-cols-2 bg-accent/5 p-5
                        rounded-xl gap-5 border border-accent/10 items-center">

                        {/* ======== CARD IMAGE ======== */}
                        <div>
                            <img 
                                src={data.image_url} 
                                alt={data.title} 
                                className="w-full h-auto aspect-video object-cover rounded-xl border border-accent/10"
                            />
                        </div>

                        {/* ======== CARD CONTENT ======== */}
                        <div className="flex flex-col gap-3">

                            {/* ======== CARD TITLE & DESCRIPTION ======== */}
                            <div className="text-accent font-bold text-lg md:text-xl">{data.title}</div>
                            <div className="flex flex-col gap-5">
                                <p className="text-zinc-500 leading-relaxed text-base">
                                    {data.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {data.dev_types?.map((type: string, i: number) => (
                                        <span 
                                            key={i}
                                            className="
                                                py-1 px-3 border border-accent/10 w-fit 
                                                bg-white/10 text-accent rounded-md text-sm">
                                                {type}
                                        </span>
                                    ))}
                                </div> 
                            </div>

                            {/* ======== PROJECT TECH TAGS ======== */}
                            <span className="text-white text-sm font-bold mt-5">Tools & Frameworks</span>
                            <div className="flex flex-wrap gap-2">
                                {data.tech_stack?.map((stack: any, i: number) => (
                                    <div
                                    key={i}
                                    style={{
                                        backgroundColor: `${stack.color}1A`,
                                        borderColor: `${stack.color}33`
                                    }}
                                    className="px-3 py-1 rounded-md border flex items-center">
                                        <span 
                                        style={{color:`${stack.color}`}}
                                        className="text-xs font-medium">
                                            {stack.name}
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
import { FaBriefcase, FaLaptopCode, FaAward, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";


const AdminHome = () => {
    
    const [totalProjectRows, setTotalProjectRows] = useState<number>(0);
    const [totalTechRows, setTotalTechRows] = useState<number>(0);
    const [totalCredentialRows, setTotalCredentialRows] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    // ======== FETCH DATA FROM THE SUPABASE TABLES ======== 
    const totalProjects = async () => {
        const {count, error} = await supabase
            .from ('projects')
            .select('*', {count: 'exact', head: true});
        if (!error) {
            setTotalProjectRows(count || 0);
        }
        setLoading(false);
    };

    const totalTech = async () => {
        const {count, error} = await supabase
            .from ('tech_stacks')
            .select('*', {count: 'exact', head: true});
        if (!error) {
            setTotalTechRows(count || 0);
        }
        setLoading(false);
    };

    const totalCredentials = async () => {
        const {count, error} = await supabase
            .from ('certificates')
            .select('*', {count: 'exact', head: true});
        if (!error) {
            setTotalCredentialRows(count || 0);
        }
        setLoading(false);
    };

    useEffect (() => {
        totalProjects();
        totalTech();
        totalCredentials();
    }, []);

    const categories = [
        {link: "/Admin/AdminProject", icon: <FaBriefcase/>, title: "Projects", total: totalProjectRows },
        {link: "/Admin/AdminToolkits", icon: <FaLaptopCode/>, title: "Technologies", total: totalTechRows},
        {link: "/Admin/AdminCerts", icon: <FaAward/>, title: "Credentials", total: totalCredentialRows}
    ];
    
    return (
        <div className="px-8 lg:px-12">
            <div className="mt-8 flex gap-4 text-white text-4xl">
                <span><FaTachometerAlt></FaTachometerAlt></span>
                <h1 className="font-bold">Dashboard</h1>
            </div>

            {/* ======== MAPPING THE DATA ======== */}
            <div className="grid grid-cols-1 lg:grid-cols-3 py-8 bg-background text-white gap-6">
                {categories.map((data) => (
                    <div className="
                        flex flex-col gap-4 md:gap-8 p-8 border 
                        border-accent/10 rounded-xl bg-accent/3 
                        hover:scale-102 transition-all duration-500
                        hover:shadow-[0_0_15px_0_rgba(178,250,255,0.2)]
                        hover:border-accent/30"
                        >

                        {/* ======== TITLE HEADER ======== */}
                        <div className="flex items-center gap-4 text-2xl md:text-3xl text-accent">
                            <span>{data.icon}</span>
                            <h1 className="font-semibold">{data.title}</h1>
                        </div>
                        <div className="border border-accent/10"/>
                        <div>
                            <h3 className="text-white text-xl md:text-2xl font-semibold">Total</h3>
                            <h1 className="text-zinc-600 text-3xl font-bold">{loading ? <span className="animate-pulse text-zinc-600/50">...</span> : data.total}</h1>
                        </div>
                        <div className="flex justify-end">
                            <Link to={`${data.link}`}>
                                <button className="
                                    border border-accent px-3 py-1 bg-accent/5
                                    rounded-full text-accent hover:cursor-pointer 
                                    hover:bg-accent transition-all duration-500
                                    hover:text-background">
                                    View {data.title}
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminHome;

import { useState } from "react";
import { FaGithub, FaEnvelope, FaUsers, FaCalendar, FaPlus, FaBriefcase, FaLaptopCode, FaAward, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const categories = [
    {link: "/Admin/AdminProject", icon: <FaBriefcase/>, title: "Projects", total: "5"},
    {link: "/Admin/AdminToolkits", icon: <FaLaptopCode/>, title: "Technologies", total: "16"},
    {link: "/Admin/AdminCerts", icon: <FaAward/>, title: "Credentials", total: "6"}
];


const AdminHome = () => {
    // const [activeTab, setActiveTab] = useState('Projects');
    const cardElems = "bg-accent/5 border border-accent/10 flex flex-col md:flex-row rounded-xl justify-between gap-4 items-center p-4";
    return (
        <div className="px-8 lg:px-12">
            <div className="mt-8 flex gap-4 text-white text-4xl">
                <span><FaTachometerAlt></FaTachometerAlt></span>
                <h1 className="font-bold">Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-8 bg-background text-white gap-6">
                {categories.map((data) => (
                    <div className="
                        flex flex-col gap-4 md:gap-8 p-8 border 
                        border-accent/10 rounded-xl bg-accent/3 
                        hover:scale-102 transition-all duration-500
                        hover:shadow-[0_0_15px_0_rgba(178,250,255,0.2)]
                        hover:border-accent/30"
                        >
                        <div className="flex items-center gap-4 text-2xl md:text-3xl text-accent">
                            <span>{data.icon}</span>
                            <h1 className="font-semibold">{data.title}</h1>
                        </div>
                        <div className="border border-accent/10"/>
                        <div>
                            <h3 className="text-white text-xl md:text-2xl font-semibold">Total</h3>
                            <h1 className="text-zinc-600 text-3xl font-bold">{data.total}</h1>
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

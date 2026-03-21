import { useState } from "react";
import { FaGithub, FaEnvelope, FaUsers, FaCalendar } from "react-icons/fa";
import AdminProject from "./AdminProject";


const AdminHome = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const cardElems = "bg-accent/5 border border-accent/10 flex flex-col md:flex-row rounded-xl justify-between gap-4 items-center p-4";
    return (
        <div className="bg-background min-h-screen">

            {/* ======== DASHBOARD NAVBAR ======== */}
            <nav className="bg-background/20 backdrop-blur-sm p-4 px-8 lg:px-12 text-white sticky top-0 z-50 shadow-[0_4px_15px_0_rgba(178,250,255,0.1)]">
                <div className="flex justify-between items-center max-w-7xl mx-auto">

                    {/* ======== NAV LOGO ======== */}
                    <div className="text-white hover:cursor-pointer">
                        <a href="#">
                            <img src="../images/Personal_Logo.png" alt="Logo" className="w-10 h-10 object-contain"/>
                        </a>
                    </div>
                    <div className="flex gap-8">
                        <ul className="flex gap-8">
                            <li className="hover:text-accent flex gap-3 items-center"><FaEnvelope></FaEnvelope><a href="">Messages</a></li>
                            <li className="hover:text-accent flex gap-3 items-center"><FaUsers></FaUsers><a href="">Visits</a></li>
                        </ul>
                        <div className="text-white hover:cursor-pointer">
                            <a href="#">
                                <img src="../images/Profile_Picture.jpg" alt="Logo" className="w-10 h-10 object-contain rounded-full border border-accent"/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="p-8 bg-background min-h-screen text-white">
                {/* he Selection Header */}
                <div className="flex gap-12 mb-8 justify-center">
                    {['Projects', 'Technical Toolkits', 'Certificates & Achievements'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`p-2 capitalize transition-all ${
                        activeTab === tab 
                        ? "border border-accent text-accent items-center rounded-xl transition-all" 
                        : "text-zinc-500 hover:text-zinc-300 rounded-xl transition-all"
                        }`}
                    >
                        {tab}
                    </button>
                    ))}
                </div>

                {/* The Section Display */}
                <div className="mt-4 h-[500px] overflow-y-auto custom-scrollbar">
                    {activeTab === 'Projects' && <AdminProject />}
                    {/* {activeTab === 'projects' && <ProjectsComponent />}
                    {activeTab === 'analytics' && <AnalyticsComponent />} */}
                </div>
                </div>
        </div>
    );
};

export default AdminHome;

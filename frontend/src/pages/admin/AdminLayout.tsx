import { FaEnvelope, FaUsers } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
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
                            <li className="hover:text-accent flex gap-3 items-center text-xl"><a href=""><FaEnvelope/></a></li>
                            <li className="hover:text-accent flex gap-3 items-center text-xl"><a href=""><FaUsers/></a></li>
                        </ul>
                        <div className="text-white hover:cursor-pointer">
                            <a href="#">
                                <img src="../images/Profile_Picture.jpg" alt="Logo" className="w-10 h-10 object-contain rounded-full border border-accent"/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default AdminLayout;
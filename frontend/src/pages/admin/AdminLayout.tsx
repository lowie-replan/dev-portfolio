import { useEffect, useState } from "react";
import { FaEnvelope, FaUsers, FaSignOutAlt } from "react-icons/fa"; // Added Logout Icon
import { Link, Outlet, useNavigate } from "react-router-dom"; // Added useNavigate
import { supabase } from "../../lib/supabaseClient";

const AdminLayout = () => {
    const [unreadCount, setUnreadCount] = useState(0);
    const navigate = useNavigate();

    const fetchUnreadCount = async () => {
        const { count, error } = await supabase
            .from("contact_messages")
            .select("*", { count: 'exact', head: true })
            .eq("is_read", false);
        
        if (!error) setUnreadCount(count || 0);
    };

    // ======== LOGOUT FUNCTION ========
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            navigate("/Admin/Login");
        } else {
            console.error("Error logging out:", error.message);
        }
    };

    useEffect(() => {
        fetchUnreadCount();
        const channel = supabase
            .channel('admin-notifications')
            .on('postgres_changes', 
                { event: '*', schema: 'public', table: 'contact_messages' }, 
                () => fetchUnreadCount()
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    return (
        <div className="bg-background min-h-screen">

            {/* ======== DASHBOARD NAVBAR ======== */}
            <nav className="bg-background/20 backdrop-blur-sm p-4 px-8 lg:px-12 text-white sticky top-0 z-50 shadow-[0_4px_15px_0_rgba(178,250,255,0.1)]">
                <div className="flex justify-between items-center max-w-7xl mx-auto">

                    {/* ======== NAV LOGO ======== */}
                    <div className="text-white hover:cursor-pointer">
                        <Link to="/Admin/Dashboard">
                            <img src="../images/Personal_Logo.png" alt="Logo" className="w-10 h-10 object-contain"/>
                        </Link>
                    </div>

                    <div className="flex items-center gap-8">
                        <ul className="flex gap-8">

                            {/* ======== ENVELOPE WITH NOTIFICATION ======== */}
                            <li className="relative group flex items-center text-xl transition-colors duration-300">
                                <Link to="/Admin/AdminMessages" className="hover:text-accent">
                                    <FaEnvelope/>
                                    {unreadCount > 0 && (
                                        <span className="absolute -top-0 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-pulse border border-background">
                                            {unreadCount}
                                        </span>
                                    )}
                                </Link>
                            </li>
                            
                            <li className="hover:text-accent flex gap-3 items-center text-xl cursor-pointer">
                                <FaUsers/>
                            </li>
                        </ul>

                        {/* ======== PROFILE & LOGOUT GROUP ======== */}
                        <div className="flex items-center gap-4 border-l border-white/10 pl-8">
                            <Link to="/Admin/Profile" className="hover:opacity-80 transition-opacity">
                                <img src="../images/Profile_Picture.jpg" alt="Profile" className="w-10 h-10 object-contain rounded-full border border-accent"/>
                            </Link>
                            
                            {/* ======== LOG OUT BUTTON ======== */}
                            <button 
                                onClick={handleLogout}
                                className="text-white hover:text-red-500 transition-colors text-xl hover:cursor-pointer"
                                title="Logout"
                            >
                                <FaSignOutAlt />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto">
                <Outlet/>
            </main>
        </div>
    );
};

export default AdminLayout;
import type React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        navigate('/Admin/Dashboard');
    }
    return (
        <div className="flex items-center justify-center bg-background min-h-screen">
            <div className="flex flex-col p-8 md:p-12 m-8 md:m-12 border border-accent/10 bg-accent/2 rounded-2xl items-center gap-4">
            <h2 className="font-semibold text-accent text-3xl md:text-4xl">Welcome</h2>
            <span className="text-zinc-500 mb-8">Login to enter admin dashboard</span>
                <form className="space-y-4">
                    <input 
                        type="email"
                        placeholder="Email"
                        className="
                            w-full border border-accent/10 bg-transparent 
                            focus:outline-none focus:border-accent transition-colors 
                            text-white p-2 rounded-lg
                        " 
                    />

                    <input 
                        type="password"
                        placeholder="Password"
                        className="
                            w-full border border-accent/10 bg-transparent 
                            focus:outline-none focus:border-accent transition-colors 
                            text-white p-2 rounded-lg
                        " 
                    />

                    <button 
                        className="p-2 mt-10 bg-accent rounded-xl hover:scale-102 w-full hover:cursor-pointer
                        transition-all duration-500 hover:shadow-[0_0_15px_0_rgba(178,250,255,0.2)]"
                        onClick={handleLogin}
                        >
                        Login
                    </button>
                </form>
            </div>
        </div>
        
    );
};

export default AdminLogin;
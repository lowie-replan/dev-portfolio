import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            navigate('/Admin/Dashboard');
        }
    };

    return (
        <div className="flex items-center justify-center bg-background min-h-screen font-primary">
            <div className="flex flex-col p-8 md:p-12 m-8 md:m-12 border border-accent/10 bg-accent/2 rounded-2xl items-center gap-4 w-full max-w-md">
                <h2 className="font-semibold text-accent text-3xl md:text-4xl">Welcome</h2>
                <span className="text-zinc-500 mb-4 text-center">Login to enter admin dashboard</span>
                
                {error && <p className="text-red-500 text-xs bg-red-500/10 p-2 rounded-lg w-full text-center border border-red-500/20">{error}</p>}

                {/* ======== INPUT FORMS ======== */}
                <form className="space-y-4 w-full" onSubmit={handleLogin}>
                    <input 
                        type="email" required placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-accent/10 bg-transparent focus:outline-none focus:border-accent transition-colors text-white p-2 rounded-lg" 
                    />

                    <input 
                        type="password" required placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-accent/10 bg-transparent focus:outline-none focus:border-accent transition-colors text-white p-2 rounded-lg" 
                    />

                    <button 
                        disabled={loading}
                        className="p-3 mt-6 bg-accent text-background rounded-xl hover:scale-102 w-full transition-all duration-500 hover:shadow-[0_0_15px_0_rgba(178,250,255,0.2)] disabled:opacity-50"
                    >
                        {loading ? "Verifying..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
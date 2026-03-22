const AdminLogin = () => {
    return (
        <div className="bg-background min-h-screen">
            <div className="px-8 md:px-12 bg-accent/5 rounded-xl">
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
                </form>
            </div>
        </div>
        
    );
};

export default AdminLogin;
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const AdminCredentialDisplay = () => {

    const [credentials, setCredentials] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCredential = async() => {
            const { data, error } = await supabase
                .from("certificates")
                .select("*")
                .order("created_at", {ascending: false});
            if (error) {
                console.error("Error fetching projects:", error);
            } else {
                setCredentials(data || []);
            }
            setLoading(false);
        };
        fetchCredential();
    }, []);

    if (loading) {
        return (
            <div className="flex gap-5 flex-col md:flex-row md:flex-wrap">
                {[1, 2, 3, 4, 5].map((skeleton) => (
                    <div key={skeleton} className="w-[30%] h-15 bg-zinc-900/40 animate-pulse rounded-2xl border border-zinc-800/50"/> 
                ))}
            </div>
        );
    };

    return (

        // ======== CREDENTIAL CARDS ======== 
        <div className="flex gap-5 flex-col md:flex-row md:flex-wrap">
            {credentials.map((data) => (
                <div className="border border-accent/10 items-center px-4 py-2 rounded-xl bg-accent/5 text-sm md:text-base">
                    <div className="text-white font-semibold">{data.title}</div>
                    <div className="text-xs text-accent/50">{data.organization}</div>
                </div>
            ))}
        </div>
    )
};

export default AdminCredentialDisplay;
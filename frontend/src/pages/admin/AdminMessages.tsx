import { useEffect, useState } from "react";
import { FaArrowLeft, FaEnvelopeOpen, FaTrash, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

interface ContactMessage {
    id: string;
    created_at: string;
    name: string;
    email: string;
    message: string;
    is_read: boolean;
}

const AdminMessages = () => {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);

    {/* ======== FETCH FROM DATABASE ======== */}
    const fetchMessages = async () => {
        const { data, error } = await supabase
            .from("contact_messages")
            .select("*")
            .order("created_at", { ascending: false });

        if (!error) setMessages(data || []);
        setLoading(false);
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const markAsRead = async (id: string) => {
        const { error } = await supabase
            .from("contact_messages")
            .update({ is_read: true })
            .eq("id", id);

        if (!error) {
            setMessages(messages.map(m => m.id === id ? { ...m, is_read: true } : m));
        }
    };

    const deleteMessage = async (id: string) => {
        if (!window.confirm("Delete this message?")) return;
        const { error } = await supabase.from("contact_messages").delete().eq("id", id);
        if (!error) setMessages(messages.filter(m => m.id !== id));
    };

    return (
        <div className="bg-background min-h-screen px-8 lg:px-12 mt-8">
            <Link to="/Admin/Dashboard">
                <div className="flex gap-2 items-center text-zinc-600 mb-4 hover:text-zinc-400 transition-colors">
                    <FaArrowLeft />
                    <span>Back to Dashboard</span>
                </div>
            </Link>

            {/* ======== TITLE HEADING ======== */}
            <div className="flex items-center gap-4 text-white text-xl md:text-3xl mb-8">
                <FaEnvelopeOpen className="text-accent" />
                <h1 className="font-bold">Messages</h1>
            </div>

            {/* ======== DISPLAY MESSAGES ======== */}
            <div className="h-[calc(100vh-240px)] overflow-y-auto scrollbar-hide flex flex-col gap-4">
                {loading ? (
                    <div className="
                        w-full h-[70px] animate-pulse bg-zinc-900/40 flex
                        justify-center py-20 text-zinc-700 text-xl items-center 
                        font-semibold border border-zinc-800/50 rounded-xl">
                        <span>Loading Messages...</span>
                    </div>
                ) : messages.length > 0 ? (
                    messages.map((msg) => (
                        <div 
                            key={msg.id}
                            className={`p-6 rounded-2xl border transition-all duration-300 ${
                                msg.is_read 
                                ? "bg-zinc-900/20 border-zinc-800/50 opacity-70" 
                                : "bg-accent/5 border-accent/20 shadow-[0_0_15px_rgba(178,250,255,0.05)]"
                            }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-white font-bold text-lg">{msg.name}</h3>
                                    <p className="text-accent text-sm">{msg.email}</p>
                                    <p className="text-zinc-600 text-[10px] mt-1">
                                        {new Date(msg.created_at).toLocaleString()}
                                    </p>
                                </div>

                                {/* ======== CONTROL BUTTONS ======== */}
                                <div className="flex gap-2">
                                    {!msg.is_read && (
                                        <button 
                                            onClick={() => markAsRead(msg.id)}
                                            className="p-2 bg-accent/10 text-accent rounded-lg hover:cursor-pointer hover:bg-accent hover:text-background transition-all duration-500"
                                            title="Mark as Read"
                                        >
                                            <FaCheckCircle />
                                        </button>
                                    )}
                                    <button 
                                        onClick={() => deleteMessage(msg.id)}
                                        className="text-red p-2 bg-red/10 rounded-md hover:cursor-pointer hover:bg-red hover:text-white transition-colors duration-500"
                                        title="Delete Message"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-wrap">
                                {msg.message}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="text-zinc-600 text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
                        No messages yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminMessages;
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            title: 'New Portfolio Inquiry',
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE_ID, 
                import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
                templateParams, 
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );

            const { error } = await supabase
                .from("contact_messages")
                .insert([formData]);

            if (error) throw error;

            setFormData({ name: "", email: "", message: "" });
            setStatus("success");
            setTimeout(() => setStatus("idle"), 3000);

        } catch (err) {
            console.error("Form submission failed:", err);
            setStatus("idle");
            alert("Failed to send message. Please try again.");
        }
    };

    return (

        <div className="max-w-7xl mx-auto px-8 md:px-12">

            {/* ======== SECTION HEADER ======== */}
            <div className="flex items-center">
                <div className="h-[30px] w-[8px] bg-accent rounded-full"></div>
                <h1 className="p-4 text-2xl md:text-3xl font-bold text-accent flex items-center whitespace-nowrap">Contact</h1>
            </div>
            
            {/* ======== FORM WRAPPER ======== */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-accent/5 p-6 rounded-xl border border-accent/10">

                {/* ======== LEFT COLUMN (TEXTS) ======== */}
                <div className="">
                    <h2 className="text-white text-lg md:text-xl font-bold mb-4">Let's Connect!</h2>
                    <p className="text-zinc-500 mb-8">
                        I am currently open to new opportunities and collaborations. 
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                    <div className="flex gap-3 items-center text-accent mb-3"><FaEnvelope className="text-lg"/><span className="text-zinc-500">replanlowiejohn@gmail.com</span></div>
                    <div className="flex gap-3 items-center text-accent"><FaPhone className="text-lg"/><span className="text-zinc-500">+63 962 844 9823</span></div>
                </div>

                {/* ======== RIGHT COLUMN (INPUT FORMS) ======== */}
                <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input 
                            type="text" required placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full border border-accent/10 bg-transparent focus:border-accent text-white p-2 rounded-lg outline-none" 
                        />
                        <input 
                            type="email" required placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full border border-accent/10 bg-transparent focus:border-accent text-white p-2 rounded-lg outline-none" 
                        />
                        <textarea 
                            placeholder="Type a message..." required rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full border border-accent/10 bg-transparent focus:border-accent text-white p-2 rounded-lg outline-none"
                        />
                        <button 
                            disabled={status === "sending"}
                            className="p-3 bg-accent text-background rounded-xl w-full hover:cursor-pointer hover:shadow-[0_0_10px_0_rgba(178,250,255,0.2)] hover:scale-101 transition-all disabled:opacity-50"
                        >
                            {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
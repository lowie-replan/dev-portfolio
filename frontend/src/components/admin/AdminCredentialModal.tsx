import { FaTimes } from "react-icons/fa";

interface AdminCredentialModalProps {
    isOpen: boolean;
    onClose: () => void;
    isSaving: boolean;
    isEditing: boolean;
    onSubmit: (e: React.FormEvent) => Promise<void>;

    // Values
    title: string;
    setTitle: (val: string) => void;
    organization: string;
    setOrganization: (val: string) => void;
}

const AdminCredentialModal = ({
    isOpen,
    onClose,
    isSaving,
    isEditing,
    onSubmit,
    title,
    setTitle,
    organization,
    setOrganization,
}: AdminCredentialModalProps) => {
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* ======== MODAL BACKGROUND BLUR ======== */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose} 
            />

            {/* ======== MODAL BODY ======== */}
            <div className="relative bg-zinc-900 border border-white/5 p-6 rounded-2xl shadow-2xl w-full max-w-md z-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-white font-semibold text-xl">
                        {isEditing ? "Edit Credential" : "Add Credential"}
                    </h2>
                    <span 
                        className="text-zinc-500 text-xl hover:cursor-pointer hover:text-white transition-colors" 
                        onClick={onClose}
                    >
                        <FaTimes/>
                    </span>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                    {/* ======== CERTIFICATE TITLE ======== */}
                    <div className="flex flex-col gap-2">
                        <label className="text-zinc-500 text-sm">Credential Title</label>
                        <input 
                            type="text"
                            required
                            placeholder="e.g. DICT Proficiency Level 1"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-accent/10 bg-background focus:outline-none focus:border-accent transition-colors text-white p-2.5 rounded-lg text-sm placeholder:text-zinc-700" 
                        />
                    </div>

                    {/* ======== ISSUING ORGANIZATION ======== */}
                    <div className="flex flex-col gap-2">
                        <label className="text-zinc-500 text-sm">Issuing Organization</label>
                        <input 
                            type="text"
                            required
                            placeholder="e.g. DICT, Google, Coursera"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            className="w-full border border-accent/10 bg-background focus:outline-none focus:border-accent transition-colors text-white p-2.5 rounded-lg text-sm placeholder:text-zinc-700" 
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled={isSaving}
                        className="bg-accent text-background py-2.5 rounded-xl mt-4 w-full hover:cursor-pointer hover:shadow-[0_0_15px_0_rgba(178,250,255,0.3)] transition-all duration-300 disabled:opacity-50"
                    >
                        {isSaving ? "Processing..." : isEditing ? "Update Credential" : "Save Credential"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminCredentialModal;
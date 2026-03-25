import { FaTimes } from "react-icons/fa";

interface TechStackModalProps {
    isOpen: boolean;
    onClose: () => void;
    isSaving: boolean;
    isEditing: boolean;
    onSubmit: (e: React.FormEvent) => Promise<void>;

    // Values
    name: string;
    setName: (val: string) => void;
    selectedDomains: string[]; // e.g. ["Web Development"]
    setSelectedDomains: (val: string[]) => void;
    selectedSections: string[]; // e.g. ["Frameworks & Tech"]
    setSelectedSections: (val: string[]) => void;
    color: string;
    setColor: (val: string) => void;
}

const AdminTechStackModal = ({
    isOpen, 
    onClose, 
    isSaving, 
    isEditing, 
    onSubmit,
    name, 
    setName, 
    color,
    setColor,
    selectedDomains, 
    setSelectedDomains,
    selectedSections, 
    setSelectedSections

}: TechStackModalProps) => {

    const domains = ["Web Development", "Mobile Development", "AI & Machine Learning", "Design & Dev Tools"];
    const sections = ["Languages", "Frameworks & Tech", "Tools & Models", "Database", "Expertise", "Design", "Workflow"];

    if (!isOpen) return null;

    const toggleItem = (item: string, list: string[], setList: (val: string[]) => void) => {
        if (list.includes(item)) {
            setList(list.filter(i => i !== item));
        } else {
            setList([...list, item]);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-zinc-900 border border-white/5 p-6 rounded-2xl shadow-2xl w-full max-w-lg z-10 overflow-y-auto max-h-[90vh]">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-white font-semibold text-xl">
                        {isEditing ? "Edit Tech Stack" : "Add Tech Stack"}
                    </h2>
                    <FaTimes className="text-zinc-500 hover:text-white cursor-pointer" onClick={onClose} />
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-6">

                    {/* NAME & COLOR ROW */}
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-3 flex flex-col gap-2">
                            <label className="text-zinc-500 text-sm">Technology Name</label>
                            <input 
                                type="text" required placeholder="e.g. TypeScript"
                                value={name} onChange={(e) => setName(e.target.value)}
                                className="w-full border border-white/10 bg-background text-white p-2.5 rounded-lg text-sm focus:border-accent outline-none" 
                            />
                        </div>
                        <div className="col-span-1 flex flex-col gap-2">
                            <label className="text-zinc-500 text-sm">Color</label>
                            <div className="relative flex items-center">
                                <input 
                                    type="color" 
                                    value={color} 
                                    onChange={(e) => setColor(e.target.value)}
                                    className="w-full h-[42px] bg-transparent border-none cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    {/* DOMAINS (Checkboxes) */}
                    <div className="flex flex-col gap-3">
                        <label className="text-zinc-500 text-sm font-semibold">Belongs to (Domains)</label>
                        <div className="grid grid-cols-2 gap-2">
                            {domains.map(domain => (
                                <label key={domain} className="flex items-center gap-2 text-zinc-400 text-xs cursor-pointer hover:text-white transition-colors">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedDomains.includes(domain)}
                                        onChange={() => toggleItem(domain, selectedDomains, setSelectedDomains)}
                                        className="accent-accent"
                                    />
                                    {domain}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* SECTIONS (Checkboxes) */}
                    <div className="flex flex-col gap-3">
                        <label className="text-zinc-500 text-sm font-semibold">Section Category</label>
                        <div className="grid grid-cols-2 gap-2">
                            {sections.map(section => (
                                <label key={section} className="flex items-center gap-2 text-zinc-400 text-xs cursor-pointer hover:text-white transition-colors">
                                    <input 
                                        type="checkbox"
                                        checked={selectedSections.includes(section)}
                                        onChange={() => toggleItem(section, selectedSections, setSelectedSections)}
                                        className="accent-accent"
                                    />
                                    {section}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button 
                        type="submit" disabled={isSaving}
                        className="bg-accent text-background font-bold py-3 rounded-xl mt-2 w-full hover:shadow-[0_0_20px_0_rgba(178,250,255,0.3)] transition-all"
                    >
                        {isSaving ? "Saving..." : isEditing ? "Update Stack" : "Save Tech Stack"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminTechStackModal;
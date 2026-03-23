import { FaTimes, FaTrash, FaPlus } from "react-icons/fa";

interface AdminProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    isSaving: boolean;
    isEditing: boolean;
    onSubmit: (e: React.FormEvent) => Promise<void>;
    // Values
    title: string;
    setTitle: (val: string) => void;
    description: string;
    setDescription: (val: string) => void;
    techStackArray: any[];
    developmentTypeArray: string[];
    previewUrl: string | null;
    // Refs
    inputRef: React.RefObject<HTMLInputElement | null>;
    techNameRef: React.RefObject<HTMLInputElement | null>;
    techColorRef: React.RefObject<HTMLInputElement | null>;
    // Handlers
    onAddTech: () => void;
    onAddDevType: () => void;
    onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRemoveTech: (index: number) => void;
    onRemoveDevType: (index: number) => void;
    onRemoveImage: () => void;
}

const AdminProjectModal = ({
    isOpen,
    onClose,
    isSaving,
    isEditing,
    onSubmit,
    title, setTitle,
    description, setDescription,
    techStackArray,
    developmentTypeArray,
    previewUrl,
    inputRef,
    techNameRef,
    techColorRef,
    onAddTech,
    onAddDevType,
    onImageChange,
    onRemoveTech,
    onRemoveDevType,
    onRemoveImage
}: AdminProjectModalProps) => {
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* ======== MODAL BACKGROUND BLUR ======== */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose} 
            />

            {/* ======== MODAL BODY ======== */}
            <div className="
                relative bg-zinc-900 border border-white/5 
                p-6 rounded-2xl shadow-2xl w-full max-w-lg 
                z-10 overflow-y-auto max-h-[90vh] scrollbar-hide"
                >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-white font-semibold text-xl">
                        {isEditing ? "Edit Project" : "Add Project"}
                    </h2>
                    <span className="text-zinc-500 text-xl hover:cursor-pointer hover:text-white transition-colors" onClick={onClose}>
                        <FaTimes/>
                    </span>
                </div>

                <form onSubmit={onSubmit}>

                    {/* ======== PROJECT TITLE ======== */}
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="text-zinc-500">Project Title</label>
                        <input 
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="
                                w-full border border-accent/10 bg-background 
                                focus:outline-none focus:border-accent 
                                transition-colors text-white p-2 rounded-lg text-sm
                            " 
                        />
                    </div>

                    {/* ======== PROJECT DESCRIPTION ======== */}
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="text-zinc-500">Project Description</label>
                        <textarea
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="
                                w-full border border-accent/10 bg-background 
                                focus:outline-none focus:border-accent transition-colors 
                                text-white p-2 rounded-lg resize-none text-sm
                            " 
                        />
                    </div>

                    {/* ======== DEVELOPMENT TYPE ======== */}
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="text-zinc-500">Development Type</label>
                        <div className="flex gap-2">
                            <input 
                                type="text"
                                ref={inputRef}
                                placeholder="e.g. Web Development"
                                className="
                                    w-full border border-accent/10 bg-background 
                                    focus:outline-none focus:border-accent 
                                    transition-colors text-white p-2 rounded-lg text-sm
                                    placeholder:text-zinc-700
                                " 
                            />
                            <button 
                                className="
                                    bg-accent text-background rounded-lg 
                                    px-4 hover:opacity-90 transition-opacity 
                                    hover:cursor-pointer hover:shadow-[0_0_10px_0_rgba(178,250,255,0.2)]
                                    tansition-all duration-500
                                "
                                type="button"
                                onClick={onAddDevType}>
                                Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {developmentTypeArray.map((data, i) => (
                                <div key={i} className="flex items-center gap-2 border border-zinc-700 text-zinc-400 text-xs py-1.5 px-3 rounded-md bg-zinc-800/50">
                                    <span>{data}</span>
                                    <FaTimes className="hover:text-red-500 cursor-pointer" onClick={() => onRemoveDevType(i)}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ======== TECH STACK ======== */}
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="text-zinc-500 text-sm">Technologies Used</label>
                        <div className="flex flex-row gap-2">
                            <input ref={techNameRef} type="text" placeholder="Stack" className="w-full border border-accent/10 bg-background text-white p-2 rounded-lg text-sm placeholder:text-zinc-700" />
                            <input ref={techColorRef} type="text" placeholder="#Hex" className="w-30 border border-accent/10 bg-background text-white p-2 rounded-lg text-sm placeholder:text-zinc-700" />
                            <button 
                                onClick={onAddTech} 
                                className="
                                    bg-accent text-background rounded-lg px-4 
                                    hover:cursor-pointer hover:shadow-[0_0_10px_0_rgba(178,250,255,0.2)]
                                    tansition-all duration-500
                                " 
                                type="button">Add
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {techStackArray.map((data, i) => (
                                <div key={i} className="flex items-center gap-2 border border-zinc-700 text-zinc-400 text-xs py-1.5 px-3 rounded-md bg-zinc-800/50">
                                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: data.color}}/>
                                    <span>{data.name}</span>
                                    <FaTimes className="hover:text-red-500 cursor-pointer" onClick={() => onRemoveTech(i)} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ======== IMAGE UPLOAD ======== */}
                    <div className="flex flex-col gap-2 mt-4">
                        <label className="text-zinc-500 text-sm">Project Thumbnail</label>
                        <div className="relative group w-full h-40 border-2 border-dashed border-zinc-800 rounded-xl overflow-hidden flex items-center justify-center bg-zinc-800/20 hover:border-accent/50 transition-colors">
                            {previewUrl ? (
                                <>
                                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                        <button type="button" onClick={onRemoveImage} className="bg-red-500 text-white p-2 rounded-full hover:scale-110 transition-transform hover:cursor-pointer">
                                            <FaTrash size={14} />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <label className="flex flex-col items-center gap-2 cursor-pointer">
                                    <FaPlus className="text-zinc-600 text-xl" />
                                    <span className="text-zinc-600 text-xs">Upload Image</span>
                                    <input type="file" accept="image/*" className="hidden" onChange={onImageChange} />
                                </label>
                            )}
                        </div>
                    </div>

                    <button 
                        type="submit"
                        disabled={isSaving}
                        className="
                            bg-accent text-background p-2 rounded-xl 
                            mt-6 w-full hover:cursor-pointer 
                            hover:shadow-[0_0_10px_0_rgba(178,250,255,0.4)]
                            tansition-all duration-500">
                        {isSaving ? "Processing..." : isEditing ? "Update Project" : "Save Project"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminProjectModal;
import { FaArrowLeft, FaLayerGroup, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminTechStackModal from "../../components/admin/AdminTechStackModal";
import { AdminTechStackManager } from "../../hooks/AdminTechStackManager";
import { AdminTechStackItem } from "../../components/admin/AdminTechStackItem";

const AdminTech = () => {
    const {
        stacks,
        modalOpen,
        setModalOpen,
        isLoading,
        isSaving,
        editingId,
        name, setName,
        color, setColor,
        selectedDomains, setSelectedDomains,
        selectedSections, setSelectedSections,
        handlers
    } = AdminTechStackManager();

    return (
        <div className="bg-background min-h-screen px-8 lg:px-12 mt-8">
            <Link to={"/Admin/Dashboard"}>
                <div className="flex gap-2 items-center text-zinc-600 mb-4 hover:cursor-pointer hover:text-zinc-400 transition-colors duration-300">
                    <FaArrowLeft/>
                    <span>Back to Dashboard</span>
                </div>
            </Link>
            
            {/* ======== TITLE HEADER ======== */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 md:gap-4 text-white text-xl md:text-3xl">
                    <span><FaLayerGroup/></span>
                    <h1 className="font-bold">Tech Stack</h1>
                </div>
                <button 
                    className="flex items-center gap-2 py-2 px-4 rounded-xl bg-accent text-background hover:cursor-pointer font-semibold"
                    onClick={() => setModalOpen(true)}>
                    <FaPlus/> Tech Stack
                </button>
            </div>

            {/* ======== MAPPING ANF DISPLAYING TECH STACKS ======== */}
            <div className="h-[calc(100vh-240px)] overflow-y-auto scrollbar-hide flex flex-col gap-4">
                {isLoading ? (
                    [1, 2, 3, 4].map((skeleton) => (
                        <div 
                            key={skeleton} 
                            className="w-full h-24 bg-zinc-900/40 animate-pulse rounded-2xl border border-zinc-800/50"
                        />
                    ))
                ) : stacks.length > 0 ? (
                    stacks.map((stack) => (
                        <AdminTechStackItem 
                            key={stack.id} 
                            stack={stack} 
                            onEdit={handlers.handleEdit} 
                            onDelete={handlers.handleDelete} 
                        />
                    ))
                ) : (
                    <div className="text-zinc-600 text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
                        No technologies found. Click "Add Tech Stack" to get started.
                    </div>
                )}
            </div>

            <AdminTechStackModal 
                isOpen={modalOpen}
                onClose={handlers.resetForm}
                isSaving={isSaving}
                isEditing={!!editingId}
                onSubmit={handlers.handleSubmit}
                
                // ======== FORM DATA ========
                name={name}
                setName={setName}
                color={color}
                setColor={setColor}
                selectedDomains={selectedDomains}
                setSelectedDomains={setSelectedDomains}
                selectedSections={selectedSections}
                setSelectedSections={setSelectedSections}
            />
        </div>
    );
}

export default AdminTech;
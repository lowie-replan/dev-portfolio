import { Link } from "react-router-dom";
import { AdminProjectManager } from "../../hooks/AdminProjectManager";
import { AdminProjectItem } from "../../components/admin/AdminProjectItem";
import AdminProjectModal from "../../components/admin/AdminProjectModal";
import { FaArrowLeft, FaBriefcase, FaPlus } from "react-icons/fa";

const AdminProject = () => {
    const { 
        projects, 
        modalOpen, 
        setModalOpen, 
        handlers,
        isLoading, 
        isSaving,
        editingId,

        // ======== STATES ========
        title, setTitle,
        description, setDescription,
        techStackArray,
        developmentTypeArray,
        previewUrl,
        inputRef, 
        techNameRef, 
        techColorRef
    } = AdminProjectManager();

    return (
        <div className="bg-background min-h-screen px-8 lg:px-12 mt-8">

            {/* ======== NAVIGATION ======== */}
            <Link to={"/Admin/Dashboard"}>
                <div className="flex gap-2 items-center text-zinc-600 mb-4 hover:cursor-pointer hover:text-zinc-400 transition-colors duration-300">
                    <FaArrowLeft />
                    <span>Back to Dashboard</span>
                </div>
            </Link>
            
            <div className="flex justify-between mb-8">

                {/* ======== HEADER ======== */}
                <div className="flex items-center gap-2 md:gap-4 text-white text-xl md:text-3xl">
                    <FaBriefcase />
                    <h1 className="font-bold">Projects</h1>
                </div>

                {/* ======== ADD PROJECT BUTTON ======== */}
                <button 
                    className="flex items-center gap-2 py-2 px-4 rounded-xl bg-accent text-background hover:opacity-90 transition-opacity font-medium cursor-pointer"
                    onClick={() => setModalOpen(true)}>
                    <FaPlus />
                    Project
                </button>
            </div>

            {/* ======== PROJECT LIST ======== */}
            <div className="h-[calc(100vh-240px)] overflow-y-auto scrollbar-hide flex flex-col gap-4">
                {isLoading ? (
                    [1, 2, 3, 4].map((skeleton) => (
                        <div 
                            key={skeleton} 
                            className="w-full h-32 bg-zinc-900/40 animate-pulse rounded-2xl border border-zinc-800/50"
                        />
                    ))
                ) : projects.length > 0 ? (
                    projects.map((project) => (
                        <AdminProjectItem 
                            key={project.id} 
                            project={project} 
                            onEdit={handlers.handleEdit} 
                            onDelete={handlers.handleDelete} 
                        />
                    ))
                ) : (
                    <div className="text-zinc-600 text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
                        No projects found. Click "Add Project" to get started.
                    </div>
                )}
            </div>
            

            {/* ======== MODAL COMPONENT ======== */}
            <AdminProjectModal 
                isOpen={modalOpen}
                onClose={handlers.resetForm}
                isSaving={isSaving}
                isEditing={!!editingId}
                onSubmit={handlers.handleSubmit}
                
                // ======== FORM DATA ========
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                techStackArray={techStackArray}
                developmentTypeArray={developmentTypeArray}
                previewUrl={previewUrl}

                // ======== REFS ========
                inputRef={inputRef}
                techNameRef={techNameRef}
                techColorRef={techColorRef}

                // ======== HANDLERS ========
                onAddTech={handlers.handleAddTech}
                onAddDevType={handlers.handleAddClick}
                onImageChange={handlers.handleImageChange}
                onRemoveTech={handlers.removeTech}
                onRemoveDevType={handlers.removeDevelopmentType}
                onRemoveImage={handlers.removeImage}
            />
        </div>
    );
};

export default AdminProject;
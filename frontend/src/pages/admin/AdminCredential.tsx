import { FaArrowLeft, FaAward, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminCertificateModal from "../../components/admin/AdminCredentialModal";
import { AdminCredentialManager } from "../../hooks/AdminCredentialManager";
import { AdminCredentialItem } from "../../components/admin/AdminCredentialItem";

const AdminCerts = () => {

    const {
        certificates,
        modalOpen,
        setModalOpen,
        isLoading,
        isSaving,
        editingId,
        title, setTitle,
        organization, setOrganization,
        handlers
    } = AdminCredentialManager();

    return (
        <div className="bg-background  min-h-screen px-8 lg:px-12 mt-8">

            <Link to={"/Admin/Dashboard"}>
                <div className="flex gap-2 items-center text-zinc-600 mb-4 hover:cursor-pointer hover:text-zinc-400 transition-colors duration-300">
                    <FaArrowLeft/>
                    <span>Back to Dashboard</span>
                </div>
            </Link>
            
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 md:gap-4 text-white text-xl md:text-3xl">
                    <span><FaAward/></span>
                    <h1 className="font-bold">Credentials</h1>
                </div>
                <button 
                    className="
                        flex items-center gap-2 py-2 px-4 rounded-xl 
                        bg-accent text-background hover:cursor-pointer
                    "
                    onClick={()=> setModalOpen(true)}><FaPlus/>Credential
                </button>
            </div>
            <div className="h-[calc(100vh-240px)] overflow-y-auto scrollbar-hide flex flex-col gap-4">
                {isLoading ? (
                    [1, 2, 3, 4].map((skeleton) => (
                        <div 
                            key={skeleton} 
                            className="w-full h-32 bg-zinc-900/40 animate-pulse rounded-2xl border border-zinc-800/50"
                        />
                    ))
                ) : certificates.length > 0 ? (
                    certificates.map((cert) => (
                        <AdminCredentialItem 
                            key={cert.id} 
                            certificates={cert} 
                            onEdit={handlers.handleEdit} 
                            onDelete={handlers.handleDelete} 
                        />
                    ))
                ) : (
                    <div className="text-zinc-600 text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
                        No credentials found. Click "Add Credential" to get started.
                    </div>
                )}
            </div>

            <AdminCertificateModal 
                isOpen={modalOpen}
                onClose={handlers.resetForm}
                isSaving={isSaving}
                isEditing={!!editingId}
                onSubmit={handlers.handleSubmit}
                
                // ======== FORM DATA ========
                title={title}
                setTitle={setTitle}
                organization={organization}
                setOrganization={setOrganization}
            />
        </div>
    );
}

export default AdminCerts;
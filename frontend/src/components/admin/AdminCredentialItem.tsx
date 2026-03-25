import { FaEdit, FaTrash } from "react-icons/fa";

interface ProjectItemProps {
    certificates: any;
    onEdit: (project: any) => void;
    onDelete: (id: string) => void;
}

export const AdminCredentialItem = ({ certificates, onEdit, onDelete }: ProjectItemProps) => {
    return (
        <div className="p-4 flex justify-between border border-accent/10 rounded-xl items-center">
            <h1 className="text-white">{certificates.title}</h1>
            <div className="flex gap-4">

                {/* ======== EDIT BUTTON ======== */}
                <button 
                    type="button"
                    className="text-green p-2 bg-green/5 rounded-md hover:cursor-pointer hover:bg-green/30 hover:text-white transition-colors duration-500" 
                    onClick={() => onEdit(certificates)}>
                    <FaEdit />
                </button>
                
                {/* ======== DELETE BUTTON ======== */}
                <button 
                    type="button"
                    className="text-red p-2 bg-red/10 rounded-md hover:cursor-pointer hover:bg-red hover:text-white transition-colors duration-500" 
                    onClick={() => onDelete(certificates.id)}>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};
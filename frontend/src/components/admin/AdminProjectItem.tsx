import { FaEdit, FaTrash } from "react-icons/fa";

interface ProjectItemProps {
    project: any;
    onEdit: (project: any) => void;
    onDelete: (id: string, imageUrl: string) => void;
}

export const AdminProjectItem = ({ project, onEdit, onDelete }: ProjectItemProps) => {
    return (
        <div className="p-4 flex justify-between border border-accent/10 rounded-xl items-center">
            <h1 className="text-white">{project.title}</h1>
            <div className="flex gap-4">

                {/* ======== EDIT BUTTON ======== */}
                <button 
                    type="button"
                    className="text-green p-2 border border-green rounded-md hover:cursor-pointer hover:bg-green/10 transition-colors" 
                    onClick={() => onEdit(project)}>
                    <FaEdit />
                </button>
                
                {/* ======== DELETE BUTTON ======== */}
                <button 
                    type="button"
                    className="text-red p-2 border border-red rounded-md hover:cursor-pointer hover:bg-red/10 transition-colors" 
                    onClick={() => onDelete(project.id, project.image_url)}>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};
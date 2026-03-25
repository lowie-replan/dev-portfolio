import { FaEdit, FaTrash } from "react-icons/fa";

interface AdminTechStackItemProps {
    stack: any;
    onEdit: (stack: any) => void;
    onDelete: (id: string) => void;
}

export const AdminTechStackItem = ({ stack, onEdit, onDelete }: AdminTechStackItemProps) => {
    return (
        <div className="p-4 flex justify-between border border-accent/10 rounded-xl items-center">
            <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold text-lg">{stack.name}</h3>
                
                <div className="flex flex-wrap gap-2">

                    {/* ======== DOMAIN BADGES ======== */}
                    {stack.domains.map((domain: string) => (
                        <span key={domain=""} className="text-[10px] uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20">
                            {domain}
                        </span>
                    ))}
                    
                    {/* ======== SECTION BADGES ======== */}
                    {stack.sections.map((section: string) => (
                        <span key={section} className="text-[10px] uppercase tracking-wider bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700">
                            {section}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-2">
                {/* ======== EDIT BUTTON ======== */}
                <button 
                    type="button"
                    className="text-green p-2 bg-green/5 rounded-md hover:cursor-pointer hover:bg-green/30 hover:text-white transition-colors duration-500" 
                    onClick={() => onEdit(stack)}>
                    <FaEdit />
                </button>
                
                {/* ======== DELETE BUTTON ======== */}
                <button 
                    type="button"
                    className="text-red p-2 bg-red/10 rounded-md hover:cursor-pointer hover:bg-red hover:text-white transition-colors duration-500" 
                    onClick={() => onDelete(stack.id)}>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};
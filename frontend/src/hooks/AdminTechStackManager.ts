import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";

export const AdminTechStackManager = () => {
    // ======== BASIC STATES ========
    const [stacks, setStacks] = useState<any[]>([]);
    const [name, setName] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [color, setColor] = useState("#61DAFB");

    // ======== CHECKBOX STATES (Arrays) ========
    const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
    const [selectedSections, setSelectedSections] = useState<string[]>([]);

    // ======== FETCH DATA ========
    const fetchStacks = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('tech_stacks')
                .select('*')
                .order('name', { ascending: true });

            if (error) throw error;
            setStacks(data || []);
        } catch (err: any) {
            console.error("Fetch error:", err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchStacks();
    }, []);

    // ======== FORM CONTROL ========
    const resetForm = () => {
        setName("");
        setSelectedDomains([]);
        setSelectedSections([]);
        setEditingId(null);
        setModalOpen(false);
        setColor("#61DAFB");
    };

    const handleEdit = (stack: any) => {
        setEditingId(stack.id);
        setName(stack.name);
        setSelectedDomains(stack.domains || []);
        setSelectedSections(stack.sections || []);
        setModalOpen(true);
        setColor(stack.color || "#61DAFB");
    };

    // ======== DATABASE OPERATIONS ========
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) return alert("Technology name is required.");
        if (selectedDomains.length === 0 || selectedSections.length === 0) {
            return alert("Please select at least one Domain and one Section.");
        }

        setIsSaving(true);

        try {
            const techData = {
                name: name.trim(),
                domains: selectedDomains,
                color: color,
                sections: selectedSections,
            };

            let error;
            if (editingId) {
                const { error: updateError } = await supabase
                    .from('tech_stacks')
                    .update(techData)
                    .eq('id', editingId);
                error = updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('tech_stacks')
                    .insert([techData]);
                error = insertError;
            }

            if (error) throw error;

            alert(editingId ? "Tech updated!" : "Tech added!");
            await fetchStacks();
            resetForm();
        } catch (error: any) {
            console.error("Database Error:", error.message);
            alert("Action failed. Check console.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Delete this technology from your stack?")) return;

        try {
            const { error } = await supabase
                .from('tech_stacks')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setStacks(prev => prev.filter(s => s.id !== id));
        } catch (error: any) {
            alert("Delete failed: " + error.message);
        }
    };

    return {
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
        handlers: {
            handleSubmit,
            handleEdit,
            handleDelete,
            resetForm
        }
    };
};
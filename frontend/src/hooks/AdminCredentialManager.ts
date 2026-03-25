import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";

export const AdminCredentialManager = () => {
    // ======== STATES ========
    const [certificates, setCertificates] = useState<any[]>([]);
    const [title, setTitle] = useState("");
    const [organization, setOrganization] = useState("");
    
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    // ======== FETCH DATA ========
    const fetchCertificates = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('certificates') // Make sure your table is named 'certificates'
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setCertificates(data || []);
        } catch (err: any) {
            console.error("Fetch error:", err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCertificates();
    }, []);

    // ======== FORM CONTROL ========
    const resetForm = () => {
        setTitle("");
        setOrganization("");
        setEditingId(null);
        setModalOpen(false);
    };

    const handleEdit = (cert: any) => {
        setEditingId(cert.id);
        setTitle(cert.title);
        setOrganization(cert.organization);
        setModalOpen(true);
    };

    // ======== DATABASE OPERATIONS ========
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !organization.trim()) {
            return alert("Please fill in both fields.");
        }

        setIsSaving(true);

        try {
            const certData = {
                title: title.trim(),
                organization: organization.trim(),
            };

            let error;
            if (editingId) {

                // ======== UPDATE ========
                const { error: updateError } = await supabase
                    .from('certificates')
                    .update(certData)
                    .eq('id', editingId);
                error = updateError;
            } else {
                
                //  ======== INSERT ======== 
                const { error: insertError } = await supabase
                    .from('certificates')
                    .insert([certData]);
                error = insertError;
            }

            if (error) throw error;

            alert(editingId ? "Credential updated!" : "Credential saved!");
            await fetchCertificates();
            resetForm();
        } catch (error: any) {
            console.error("Database Error:", error.message);
            alert("Action failed. Check console.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm("Delete this ceredential?");
        if (!confirmed) return;

        try {
            const { error } = await supabase
                .from('certificates')
                .delete()
                .eq('id', id);

            if (error) throw error;

            setCertificates(prev => prev.filter(c => c.id !== id));
            alert("Deleted successfully.");
        } catch (error: any) {
            alert("Delete failed: " + error.message);
        }
    };

    return {
        certificates,
        modalOpen,
        setModalOpen,
        isLoading,
        isSaving,
        editingId,
        title, setTitle,
        organization, setOrganization,
        handlers: {
            handleSubmit,
            handleEdit,
            handleDelete,
            resetForm
        }
    };
};
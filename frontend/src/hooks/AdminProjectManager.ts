import { supabase } from "../lib/supabaseClient";
import { useEffect, useRef, useState } from "react";

export const AdminProjectManager = () => {

    interface TechStack {
        name: string;
        color: string;
    }

    // ======== NEW INPUT STATES ========
    const [projects, setProjects] = useState<any[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    // ======== MODAL STATES ========
    const [modalOpen, setModalOpen] = useState(false);
    const [techStackArray, setTechStackArray] = useState<TechStack[]>([]);
    const [developmentTypeArray, setDevelopmentTypeArray] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);


    // ======== REFS ========
    const techNameRef = useRef<HTMLInputElement>(null);
    const techColorRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);


    const fetchProjects = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Error fetching:", error.message);
            } else {
                setProjects(data || []);
            }
        } catch (err) {
            console.error("Unexpected error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);


    const resetForm = () => {
        setEditingId(null);
        setTitle("");
        setDescription("");
        setTechStackArray([]);
        setDevelopmentTypeArray([]);
        setSelectedImage(null);
        setPreviewUrl(null);
        setModalOpen(false);
    };

    const handleEdit = (project: any) => {
        setEditingId(project.id);
        setTitle(project.title);
        setDescription(project.description);
        setTechStackArray(project.tech_stack || []);
        setDevelopmentTypeArray(project.dev_types || []);
        setPreviewUrl(project.image_url);
        setModalOpen(true);
    };

    
    // ======== MODAL HANDLERS ========
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 

        if (!title.trim()) return alert("Please enter a project title.");
        setIsSaving(true);

        try {
            
            let finalImageUrl = "";

            // ======== UPLOAD IMAGE ========
            if (selectedImage) {

                if (editingId && previewUrl) {
                    const oldPath = previewUrl.split('project-thumbnails/').pop();
                    if (oldPath) {
                        await supabase.storage.from('project-thumbnails').remove([oldPath]);
                    }
                }

                // ======== UNIQUE IDENTIFIER ========
                const fileExt = selectedImage.name.split('.').pop();
                const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
                const filePath = `thumbnails/${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from('project-thumbnails')
                    .upload(filePath, selectedImage);

                if (uploadError) throw uploadError;

                // ======== IMAGE URL ========
                const { data: urlData } = supabase.storage
                    .from('project-thumbnails')
                    .getPublicUrl(filePath);
                
                finalImageUrl = urlData.publicUrl;
            }

            // ======== INSERT DATA ========
            const projectData = {
                title: title,
                description: description,
                dev_types: developmentTypeArray,
                tech_stack: techStackArray,
                image_url: finalImageUrl || previewUrl, 
            };

            // ======== DATABASE OPERATION ========
            let dbError;

            if (editingId) {

                // ======== UPDATE EXISTING ROW ========
                const { error } = await supabase
                    .from('projects')
                    .update(projectData)
                    .eq('id', editingId);
                dbError = error;

            } else {

                // ======== INSERT NEW ROW ========
                const { error } = await supabase
                    .from('projects')
                    .insert([projectData]);
                dbError = error;
            }

            if (dbError) throw dbError;

            // ======== UPDATE/UPLOAD SUCCESS ========
            alert(editingId ? "Project updated successfully!" : "Project added successfully!");
            await fetchProjects();
            resetForm();

        } catch (error: any) {
            console.error("Critical Error:", error.message);
            alert("Upload failed. Check the console for details.");
        } finally {
            setIsSaving(false);
        }
    };


    const handleDelete = async (id: string, imageUrl: string) => {
        const confirmed = window.confirm("Are you sure you want to delete this project?");
        if (!confirmed) return;

        try {
            // ======== DELETE IMAGE IF EXISTS ========
            if (imageUrl) {
                const path = imageUrl.split('project-thumbnails/').pop();
                if (path) {
                    await supabase.storage.from('project-thumbnails').remove([path]);
                }
            }

            // ======== DELETE ROW FROM DATABASE ========
            const { error } = await supabase
                .from('projects')
                .delete()
                .eq('id', id);
            if (error) throw error;

            // ======== UPDATE THE UI ========
            setProjects(projects.filter(p => p.id !== id));
            alert("Project deleted.");
        } catch (error: any) {
            alert("Error deleting: " + error.message);
        }
    };



    const handleAddTech = () => {
        const name = techNameRef.current?.value.trim();
        const color = techColorRef.current?.value.trim() || "#71717a";
        if (name) {
            setTechStackArray([...techStackArray, { name, color }]);
            if (techNameRef.current) techNameRef.current.value = "";
            if (techColorRef.current) techColorRef.current.value = "";
            techNameRef.current?.focus();
        }
    };

    const handleAddClick = () => {
        if (inputRef.current && inputRef.current.value.trim() !== "") {
            const newValue = inputRef.current.value.trim();
            setDevelopmentTypeArray([...developmentTypeArray, newValue]);
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };


    // ======== ITEM REMOVAL HANDLER ========
    const removeTech = (indexToRemove: number) => {
        setTechStackArray(techStackArray.filter((_, i) => i !== indexToRemove));
    };

    const removeDevelopmentType = (indexToRemove: number) => {
        setDevelopmentTypeArray((prevArray) => 
            prevArray.filter((_, index) => index !== indexToRemove)
        );
    };

    const removeImage = () => {
        setSelectedImage(null);
        setPreviewUrl(null);
    };

    return {
        projects,
        modalOpen,
        setModalOpen,
        isLoading,
        isSaving,
        editingId,
        title, setTitle,
        description, setDescription,
        techStackArray,
        developmentTypeArray,
        previewUrl,
        techNameRef,
        techColorRef,
        inputRef,
        handlers: {
            handleSubmit,
            handleEdit,
            handleDelete,
            handleAddTech,
            handleAddClick,
            handleImageChange,
            removeTech,
            removeDevelopmentType,
            removeImage,
            resetForm
        }
    };
};


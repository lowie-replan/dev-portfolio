import { supabase } from "../../lib/supabaseClient";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaBriefcase, FaEdit, FaPlus, FaTrash, FaTimes } from "react-icons/fa";




const AdminProject = () => {
    const [projects, setProjects] = useState<any[]>([]);

    const fetchProjects = async () => {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) console.error("Error fetching:", error.message);
        else setProjects(data || []);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    interface TechStack {
        name: string;
        color: string;
    }

    // ======== NEW INPUT STATES ========
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isSaving, setIsSaving] = useState(false);

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
    

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setTechStackArray([]);
        setDevelopmentTypeArray([]);
        setSelectedImage(null);
        setPreviewUrl(null);
        setModalOpen(false);
    };

    // ======== MODAL HANDLERS ========
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 

        if (!title.trim()) return alert("Please enter a project title.");
        setIsSaving(true);

        try {
            let finalImageUrl = "";

            // STEP 1: UPLOAD THE IMAGE FILE
            if (selectedImage) {
                // Create a unique name to avoid overwriting existing files
                const fileExt = selectedImage.name.split('.').pop();
                const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
                const filePath = `thumbnails/${fileName}`;

                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('project-thumbnails')
                    .upload(filePath, selectedImage);

                if (uploadError) throw uploadError;

                // Get the public URL of the uploaded image
                const { data: urlData } = supabase.storage
                    .from('project-thumbnails')
                    .getPublicUrl(filePath);
                
                finalImageUrl = urlData.publicUrl;
            }

            // INSERT DATA INTO POSTGRES
            const { error: dbError } = await supabase
                .from('projects')
                .insert([
                    {
                        title: title,
                        description: description,
                        dev_types: developmentTypeArray,
                        tech_stack: techStackArray,
                        image_url: finalImageUrl,
                    },
                ]);

            if (dbError) throw dbError;

            // SUCCESS
            alert("Project successfully added to your portfolio!");
            resetForm();

        } catch (error: any) {
            console.error("Critical Error:", error.message);
            alert("Upload failed. Check the console for details.");
        } finally {
            setIsSaving(false);
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

    return (
        <div className="bg-background  min-h-screen px-8 lg:px-12 mt-8">
            <div className="flex gap-2 items-center text-zinc-600 mb-4 hover:cursor-pointer"><FaArrowLeft/><span>Back to Dashboard</span></div>
            <div className="flex justify-between mb-8">

                {/* ======== HEADER ========  */}
                <div className="flex items-center gap-2 md:gap-4 text-white text-xl md:text-3xl">
                    <span><FaBriefcase/></span>
                    <h1 className="font-bold">Projects</h1>
                </div>

                {/* ======== ADD PROJECT BUTTON ========  */}
                <button className="
                    flex items-center gap-2 py-2 px-4 rounded-xl 
                    bg-accent text-background hover:cursor-pointer"
                    onClick={() => setModalOpen(true)}
                    >
                    <FaPlus/>
                    Project
                </button>
            </div>

            {/* ======== MAPPING ALL THE PROJECTS ========  */}
            <div className="h-[calc(100vh-240px)] overflow-y-auto scrollbar-hide flex flex-col gap-4">
                {projects.map((data) => (
                    <div className="p-4 flex justify-between border border-accent/10 rounded-xl items-center">
                        <h1 className="text-white">{data.title}</h1>
                        <div className="flex gap-4" >
                            <a href="" className="text-green p-2 border border-green rounded-md"><FaEdit></FaEdit></a>
                            <a href="" className="text-red p-2 border border-red rounded-md"><FaTrash></FaTrash></a>
                        </div>
                    </div>
                ))} 
            </div>

            {/* ======== MODAL ========  */}
            {modalOpen && (
                
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

                    {/* ======== MODAL BACKGROUND BLUR ======== */}
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setModalOpen(false)} 
                    />

                    {/* ======== MODAL BODY ======== */}
                    <div className="relative bg-zinc-800 p-6 rounded-lg shadow-xl w-full max-w-lg z-10 overflow-y-auto max-h-[90vh]">
                        <div className="flex items-center justify-between">
                            <h2 className="text-white font-bold text-xl">Add Project</h2>
                            <span className="text-zinc-500 text-xl hover:cursor-pointer" onClick={() => setModalOpen(false)}><FaTimes/></span>
                        </div>

                        <form onSubmit={handleSubmit} >

                            {/* ======== PROJECT TITLE INPUT ======== */}
                            <div className="flex flex-col gap-2 mt-4">
                                <label className="text-zinc-500">Project Title</label>
                                <input 
                                    type="text"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="
                                        w-full border border-accent/10 bg-transparent 
                                        focus:outline-none focus:border-accent transition-colors 
                                        text-white p-2 rounded-lg
                                    " 
                                />
                            </div>

                            {/* ======== PROJECT DESCRIPTION INPUT ======== */}
                            <div className="flex flex-col gap-2 mt-4">
                                <label className="text-zinc-500">Project Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="
                                        w-full border border-accent/10 bg-transparent 
                                        focus:outline-none focus:border-accent transition-colors 
                                        text-white p-2 rounded-lg
                                    " 
                                />
                            </div>

                            {/* ======== DEVELOPMENT TYPE INPUT ======== */}
                            <div className="flex flex-col gap-2 mt-4">
                                <label className="text-zinc-500">Development Type</label>
                                <div className="flex gap-2">
                                    <input 
                                        type="text"
                                        ref={inputRef}
                                        className="
                                            w-full border border-accent/10 bg-transparent 
                                            focus:outline-none focus:border-accent transition-colors 
                                            text-white p-2 rounded-lg
                                        " 
                                    />
                                    <button 
                                        className="bg-accent rounded-lg px-4 hover:cursor-pointer"
                                        type="button"
                                        onClick={handleAddClick}
                                        >
                                        Add
                                    </button>
                                </div>

                                {/* ======== MAPPING THE TYPE OF DEVELOPMENT USED ======== */}
                                <div className="flex flex-wrap gap-2">
                                    {developmentTypeArray.map((data, i) => (
                                        <div key={i} className="flex items-center gap-2 border border-zinc-500 text-zinc-500 text-sm py-1.5 px-3 rounded-lg">
                                            <span>{data}</span>
                                            <FaTimes className="text-[10px] hover:cursor-pointer hover:text-red" onClick={() => removeDevelopmentType(i)}/>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ======== TECH STACK INPUTS ======== */}
                            <div className="grid grid-cols-2 gap-2 mt-4 mb-2">
                                <label className="text-zinc-500">Technologies Used</label>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <input 
                                    ref={techNameRef}
                                    type="text"
                                    placeholder="Stack"
                                    className="
                                        w-full border border-accent/10 bg-transparent 
                                        focus:outline-none focus:border-accent transition-colors 
                                        text-white p-2 rounded-lg placeholder:text-zinc-700
                                    " 
                                />
                                <input 
                                    ref={techColorRef}
                                    type="text"
                                    placeholder="Hex Color"
                                    className="
                                        w-full border border-accent/10 bg-transparent 
                                        focus:outline-none focus:border-accent transition-colors 
                                        text-white p-2 rounded-lg placeholder:text-zinc-700
                                    " 
                                />
                                <button
                                    onClick={handleAddTech} 
                                    className="bg-accent rounded-lg px-4 py-2 hover:cursor-pointer"
                                    type="button"
                                    
                                    >
                                    Add
                                </button>
                            </div>

                            {/* ======== MAPPING THE TECH STACKS ======== */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {techStackArray.map((data, i) => (
                                    <div key={i} className="flex items-center gap-2 border border-zinc-500 text-zinc-500 text-sm py-1.5 px-3 rounded-lg">
                                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: data.color}}/>
                                        <span>{data.name}</span>
                                        <FaTimes className="text-[10px] ml-1 hover:text-red-500 cursor-pointer" onClick={() => removeTech(i)}></FaTimes>
                                    </div>
                                ))}
                            </div>

                            {/* ======== IMAGE UPLOAD SECTION ======== */}
                            <div className="flex flex-col gap-2 mt-4">
                                <label className="text-zinc-500 ">Project Thumbnail</label>
                                <div className="relative group w-full h-48 border-2 border-dashed border-zinc-700 rounded-2xl overflow-hidden flex items-center justify-center bg-zinc-800/30 hover:border-accent transition-colors">
                                    {previewUrl ? (
                                        <>
                                            {/* ======== PREVIEW THE IMAGE ======== */}
                                            <img 
                                                src={previewUrl} 
                                                alt="Preview" 
                                                className="w-full h-full object-cover"
                                            />

                                            {/* ======== OVERLAY TO REMOVE THE IMAGE ======== */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                <button 
                                                    type="button"
                                                    onClick={removeImage}
                                                    className="bg-red-500 text-white p-3 rounded-full hover:scale-110 transition-transform"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </>
                                    ) : (

                                        /* ======== EMPTY STATE OF THE IMAGE UPLOAD ======== */
                                        <label className="flex flex-col items-center gap-2 cursor-pointer w-full h-full justify-center">
                                            <FaPlus className="text-zinc-500 text-2xl" />
                                            <span className="text-zinc-500 text-sm">Upload Image</span>
                                            <input 
                                                type="file" 
                                                accept="image/*" 
                                                className="hidden"
                                                onChange={handleImageChange}
                                            />
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* ======== BUTTON TO SUBMIT AND UPLOAD THE PROJECT ======== */}
                            <button 
                                type="submit"
                                className="bg-accent p-2 rounded-lg mt-4 w-full"
                            >
                                {isSaving ? "Saving..." : "Save Project"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminProject;
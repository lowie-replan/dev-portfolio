import { FaArrowLeft, FaAward, FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const credentialData = [
    {title: "toolkit 1"},
    {title: "toolkit 1"},
    {title: "toolkit 1"},
    {title: "toolkit 1"},
    {title: "toolkit 1"},
    {title: "toolkit 1"},
    {title: "toolkit 1"},
    {title: "toolkit 1"},
    {title: "toolkit 1"},
    {title: "toolkit 1"},
    {title: "toolkit 1"}
];

const AdminCerts = () => {
    return (
        <div className="bg-background  min-h-screen px-8 lg:px-12 mt-8">
            <div className="flex gap-2 items-center text-zinc-600 mb-4 hover:cursor-pointer"><FaArrowLeft/><span>Back to Dashboard</span></div>
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 md:gap-4 text-white text-xl md:text-3xl">
                    <span><FaAward/></span>
                    <h1 className="font-bold">Credentials</h1>
                </div>
                <button className="flex items-center gap-2 py-2 px-4 rounded-xl bg-accent text-background hover:cursor-pointer"><FaPlus/>Credential</button>
            </div>
            <div className="h-[calc(100vh-240px)] overflow-y-auto scrollbar-hide flex flex-col gap-4">
                {credentialData.map((data) => (
                    <div className="p-4 flex justify-between border border-accent/10 rounded-xl items-center">
                        <h1 className="text-white">{data.title}</h1>
                        <div className="flex gap-4" >
                            <a href="" className="text-green p-2 border border-green rounded-md"><FaEdit></FaEdit></a>
                            <a href="" className="text-red p-2 border border-red rounded-md"><FaTrash></FaTrash></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminCerts;
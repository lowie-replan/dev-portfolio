import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

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
        <div className="bg-background  min-h-screen px-8 lg:px-12 mt-10">
            <div className="flex justify-end mb-8">
                <button className="flex items-center gap-2 py-2 px-4 rounded-xl bg-accent text-background"><FaPlus/>Add Credential</button>
            </div>
            <div className="h-[350px] overflow-y-auto scrollbar-hide flex flex-col gap-4">
                {credentialData.map((data) => (
                    <div className="p-4 flex justify-between border border-accent/10 rounded-xl">
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
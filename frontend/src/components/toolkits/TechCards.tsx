import { useEffect, useState } from "react";
import { categories } from "./CardData";
import { supabase } from "../../lib/supabaseClient";

const TechCards = () => {

    const [dbStacks, setDbStacks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTech = async () => {
            const { data, error } = await supabase
                .from('tech_stacks')
                .select('*');
            if (!error && data) {
                setDbStacks(data);
            }
            setLoading(false);
        };
        fetchTech();
    }, []);

    if (loading) {
        return (
            <div className="
                w-full h-[70px] animate-pulse bg-zinc-900/40 flex
                justify-center py-20 text-zinc-700 text-xl items-center 
                font-semibold border border-zinc-800/50 rounded-xl">
                <span>Loading Tech Stacks...</span>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
                <div 
                    key={index} 
                    className="
                        bg-accent/5 p-5 items-start rounded-xl border 
                        border-accent/10 hover:scale-102 transition-all 
                        duration-500 hover:border-accent/50"
                    >
    
                    {/* ======== CARD HEADER ======== */}
                    <div className="flex gap-5 items-center mb-3">
                        <div className="p-4 rounded-xl text-accent bg-accent/10 text-2xl">
                            {category.icon}
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-white">
                            {category.header}
                        </h4>
                    </div>

                    {/* ======== CARD DESCRIPTION ======== */}
                    <p className="mb-6 text-zinc-500 text-base leading-relaxed">
                        {category.description}
                    </p>

                    {/* ======== CARD SECTIONS ======== */}
                    {category.sections.map((section, idx) => {
                        const filteredData = dbStacks.filter(stack => 
                            stack.domains?.includes(category.header) && 
                            stack.sections?.includes(section.title)
                        );

                        if (filteredData.length === 0) return null;

                        return (
                            <div key={idx} className="mb-5 last:mb-0">
                                <p className="text-white text-sm font-semibold mb-2">
                                    {section.title}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {filteredData.map((item) => (
                                        <div
                                            key={item.id}
                                            style={{
                                                backgroundColor: `${item.color}1A`,
                                                borderColor: `${item.color}33`
                                            }}
                                            className="px-3 py-1 rounded-md border flex items-center">
                                            <span 
                                                style={{ color: item.color }}
                                                className="text-xs font-medium">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div> 
    );
};

export default TechCards;
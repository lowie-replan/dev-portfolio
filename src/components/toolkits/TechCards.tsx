import { categories } from "./CardData";

const TechCards = () => {

    return (
        
        // ======== CARDS ========
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (

                // ======== CARD BODY ========
                <div key={index} className="
                    bg-accent/5 p-5 items-start rounded-xl 
                    border border-accent/10 hover:scale-102 transition-all 
                    duration-500 hover:border-accent/50">

                    {/* ======== CARD HEADER ======== */}
                    <div className="flex gap-5 items-center mb-3">
                        <div className="p-4 rounded-xl text-accent bg-accent/10 text-2xl">{category.icon}</div>
                        <h4 className="text-lg md:text-xl font-bold text-white">{category.header}</h4>
                    </div>

                    {/* ======== CARD DESCRIPTION ======== */}
                    <p className="mb-6 text-zinc-500 text-base leading-relaxed">
                        {category.description}
                    </p>

                    {/* ======== SECTIONS ======== */}
                    {category.sections.map((section, idx) => (
                        <div key={idx} className="mb-5 last:mb-0">
                            <p className="text-white text-sm font-semibold mb-2">
                                {section.title}
                            </p>

                            {/* ======== TAGS ======== */}
                            <div className="flex flex-wrap gap-2">
                                {section.data.map((item) => (
                                    <div
                                    key={item.label}
                                    style={{
                                        backgroundColor: `${item.color}1A`,
                                        borderColor: `${item.color}33`
                                    }}
                                    className="px-3 py-1 rounded-md border flex items-center">
                                        <span 
                                        style={{color:`${item.color}`}}
                                        className="text-xs font-medium">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div> 
    );
};

export default TechCards;
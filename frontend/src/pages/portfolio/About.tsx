import { FaAward } from "react-icons/fa";
import AdminCredentialDisplay from "../../components/admin/AdminCredentialDisplay";

const About = () => {

    return (
        <div className="max-w-7xl mx-auto px-8 md:px-12">

            {/* ======== SECTION HEADER ======== */}
            <div className="flex items-center">
                <div className="h-[30px] w-[8px] bg-accent rounded-full"></div>
                <h1 className="p-4 text-2xl md:text-3xl font-bold text-accent flex items-center whitespace-nowrap">About</h1>
            </div>

            <div>
                {/* ======== DESCRIPTION ======== */}
                <p className="text-zinc-500 mb-10">
                    I build accessible, user-friendly, and innovative digital experiences. 
                    I develop using the power of 
                    technolgy to bridge gaps and solve real-world problems. I specialize in 
                    <span className="text-accent font-semibold"> Full-Stack Development</span> and 
                    <span className="text-accent font-semibold"> Mobile Applications</span>, 
                    with a deep interest in integrating 
                    <span className="text-accent font-semibold"> AI & Machine Learning</span> to 
                    create smarter, more impactful technical solutions.
                </p>

                {/* ======== MAPPING ACHIEVEMENTS AND CERTIFICATIONS ======== */}
                <div className="flex flex-row items-center mb-4 gap-2">
                    <FaAward className="text-2xl text-white"/>
                    <h2 className="text-white text-lg md:text-2xl font-bold">Achievements & Certifications</h2>
                </div>
                <AdminCredentialDisplay/>
            </div>
        </div>
    );
};

export default About;
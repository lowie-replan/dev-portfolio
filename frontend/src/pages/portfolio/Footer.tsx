import SocialLinks from '../../components/SocialLinks';
const classContent = "hover:bg-accent hover:text-background hover:rounded-full px-4 py-1 transition-all duration-500";
const Footer = () => {
    return (
        <footer>
            <div className="text-center items-center mx-8 lg:mx-12">

                {/* ======== FOOTER CONTENT ======== */}
                <div className='flex flex-col mb-5 items-center text-center'>
                    <p className='mb-2 italic text-xs text-zinc-600'>"The computer was born to solve problems that did not exist before."— Bill Gates</p>
                    <a href="#home" className='flex flex-col text-center items-center'>
                        <img src="./images/Personal_Logo.png" className="w-10 h-10 object-cotain mb-2 hover:cursor-pointer" alt="" />
                        <div className="text-bold text-accent font-semibold">Lowie John Replan</div>
                    </a>
                    <div className='mb-3 text-xs text-zinc-600'>Full-Stack Developer | Mobile Application Developer | AI & Machine Learning</div>

                    {/* ======== NAVIGATIONS ======== */}
                    <ul className="
                        text-white text-xs flex flex-col md:flex-row gap-3 
                        md:gap-8 hover:cursor-pointer text-center mb-2 py-2
                        border border-zinc-400 md:rounded-full md:py-1 rounded-xl"
                    >
                        <li><a href="#home" className={classContent}>Home</a></li>
                        <li><a href="#about" className={classContent}>About</a></li>
                        <li><a href="#tech_toolkit" className={classContent}>Technical Toolkit</a></li>
                        <li><a href="#projects" className={classContent}>Projects</a></li>
                        <li><a href="#contact" className={classContent}>Contact</a></li>
                    </ul>

                    {/* ======== SOCIAL LINKS ======== */}
                    <div className='mt-3 flex gap-3'>
                        <SocialLinks/>
                    </div>
                </div>
            </div>
            
            {/* ======== CREDITS ======== */}
            <div>
                <div className='text-center text-xs p-2 border-t border-white'>
                    <p className='text-zinc-500'>© {new Date().getFullYear()} Lowie John Replan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
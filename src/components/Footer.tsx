import SocialLinks from './SocialLinks';
const classContent = "hover:bg-accent hover:text-background hover:rounded-full px-4 py-1 transition-all duration-500";
const Footer = () => {
    return (
        <footer>
            <div className="text-center items-center">
                <div className='flex flex-col mb-5 items-center text-center'>
                    <p className='mb-2 italic text-xs text-zinc-600'>"The computer was born to solve problems that did not exist before."— Bill Gates</p>
                    <img src="./images/Personal_Logo.png" className="w-10 h-10 object-cotain mb-2" alt="" />
                    <div className="text-bold text-accent font-semibold">Lowie John Replan</div>
                    <div className='mb-3 text-xs text-zinc-600'>Full-Stack Developer | Mobile Application Developer</div>
                    <ul className="text-white text-xs flex gap-8 items-start hover:cursor-pointer border border-zinc-600 py-1 rounded-full">
                        <li><a href="#home" className={classContent}>Home</a></li>
                        <li><a href="#about" className={classContent}>About</a></li>
                        <li><a href="#projects" className={classContent}>Projects</a></li>
                        <li><a href="#contact" className={classContent}>Contact</a></li>
                    </ul>
                    <div className='mt-3'>
                        <SocialLinks/>
                    </div>
                </div>
                <div>
                    <div className='text-center text-xs p-2 border-t border-white'>
                        <p className='text-zinc-500'>© {new Date().getFullYear()} Lowie John Replan. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
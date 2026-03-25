import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {

  // ======== LINK DATA ========
  const socials = [
    { id: 1, icon: <FaGithub />, href: "https://github.com/lowie-replan", label: "GitHub" },
    { id: 2, icon: <FaLinkedin />, href: "https://linkedin.com/in/lowie-replan", label: "LinkedIn" },
    { id: 3, icon: <FaFacebook />, href: "https://facebook.com/lowie.replan", label: "Facebook" },
    { id: 4, icon: <FaEnvelope />, href: "mailto:replanlowiejohn@gmail.com", label: "Email" },
  ];

  return (

    // ======== LINK HOLDER ========
    <div className="flex gap-6 items-center">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"   
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-2xl text-white hover:text-accent transition-all duration-300 hover:scale-130"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
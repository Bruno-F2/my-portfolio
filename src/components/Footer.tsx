import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    { title: "instagram", icon: <FaInstagram size={24} /> },
    { title: "linkedin", icon: <FaLinkedinIn size={24} /> },
    { title: "github", icon: <FaGithub size={24} /> },
  ];

  return (
    <>
      <section className="pt-16 md:pt-12 px-6 pb-16 bg-newBlue-200">
        <div className="">
          <div className="flex justify-center mb-8">
            <img src="/whiteLogo.png" alt="Logo" className="w-[200px]" />
          </div>
          <div className="flex justify-center gap-4 my-8">
            {socialLinks.map((link) => (
              <a
                href=""
                key={link.title}
                className="p-2 rounded-full text-white border transition-all ease duration-400 hover:bg-white hover:text-newBlue-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="flex justify-center">
            <p className="text-white">© 2025 Bruno Fernandez. Todos los derechos reservados.</p>
          </div>
        </div>
      </section>
    </>
  );
}

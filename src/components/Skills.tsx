import { FileImage, Terminal, Clapperboard } from "lucide-react";

const skills = [
  {
    icon: <FileImage size={30} />,
    title: "Diseño de Flyers",
    description:
      "Creo y diseño flyers para tu negocio o emprendimiento que comunique lo que necesitas.",
    langTitle: "",
    languages: "",
    toolsTitle: "Herramientas de Diseño",
    tools: ["Canva", "Gimp", "Inkscape"],
  },
  {
    icon: <Terminal size={30} />,
    title: "Creación de Landing Pages",
    description:
      "Creo Landing Pages para convertir a tus visitantes en clientes.",
    langTitle: "Lenguajes",
    languages: ["HTML", "CSS", "Javascript"],
    toolsTitle: "Herramientas de Desarrollo",
    tools: [
      "React",
      "Next JS",
      "Astro JS",
      "Tailwind CSS",
      "Bootstrap",
      "Shadcn UI",
      "Github",
      "Netlify",
      "VS Code",
      "Wordpress",
    ],
  },
  {
    icon: <Clapperboard size={30} />,
    title: "Edición de Video",
    description: "Edición de videos básica pero eficiente.",
    langTitle: "",
    languages: "",
    toolsTitle: "Herramientas para edición",
    tools: ["Canva", "Blender", "Shotcut"],
  },
];

export default function Skills({ id }) {
  return (
    <>
      <section
        className="mt-[-8rem] md:mt-[-12rem] pb-4 py-[5rem] px-[1.5rem]"
        id={id}
      >
        <div className="pt-0 mb-0 ml-auto mr-auto relative w-auto">
          <div className="p-0 rounded-xl bg-white block">
            <div>
              <h2 className="text-center font-bold text-[2rem] md:text-5xl text-newGrey-200 p-5 mb-4">
                Servicios
              </h2>
            </div>
            <div className="grid smp:grid-cols-3 grid-cols-1 gap-6">
              {skills.map((skill, index) => (
                <div className="text-center " key={index}>
                  {/* Icon */}
                  <div className="bg-newBlue-200 flex justify-self-center w-fit rounded-full p-4 text-white m-3">
                    {skill.icon}
                  </div>
                  {/* Title */}
                  <div className="mt-4 mb-6">
                    <h2 className="text-xl font-medium text-newBlue-100 p-3">
                      {skill.title}
                    </h2>
                    <p className="text-newGrey-200 w-[70%] justify-self-center smp:h-20">
                      {skill.description}
                    </p>
                  </div>

                  {/* Language */}
                  <div className="mt-4 mb-6">
                    {skill.langTitle && (
                      <>
                        <h3 className="text-xl text-newBlue-50 p-3">
                          {skill.langTitle}
                        </h3>
                        {Array.isArray(skill.languages) ? (
                          <ul className="">
                            {skill.languages.map((lang, i) => (
                              <li key={i}>{lang}</li>
                            ))}
                          </ul>
                        ) : (
                          <div>{skill.languages}</div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Tools */}
                  <div className="mt-4 mb-6">
                    <h3 className="text-xl text-newBlue-50 p-3">
                      {skill.toolsTitle}
                    </h3>
                    <div className="">
                      {skill.tools.map((tool, index) => (
                        <ul key={index}>
                          <li>{tool}</li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

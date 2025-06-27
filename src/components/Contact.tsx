export default function Contact({ id }) {
  const column = "block basis-0 grow shrink p-3 my-3";

  return (
    <>
      <section
        id={id}
        className="pt-20 pl-6 pr-6 pb-8 md:pl-10 md:pr-10 bg-newBlue-200 mt-6"
      >
        <div className="grow mt-0 mb-0 ml-auto mr-auto relative w-auto">
          <div className="py-14 px-5 mt-[-9rem] bg-newGrey-200 rounded-xl">
            <div className="smp:flex items-center justify-between text-white text-center">
              <div className={column}>
                <h3 className="text-3xl font-semibold">Comienza un Proyecto</h3>
              </div>
              <div className={column}>
                <p className="text-lg font-medium">
                  ¿Estás interesado en trabajar conmigo? ¡Ponéte en contacto
                  conmigo y charlamos!
                </p>
              </div>
              <div className={column}>
                <a href="/contact" className="contact-btn">
                  ¡Vamos a hacerlo!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

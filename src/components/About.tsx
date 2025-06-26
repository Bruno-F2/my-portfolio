export default function About({ id }) {
  return (
    <>
      <div
        className="bg-newBlue-200 pt-20 pb-20 pl-6 pr-6 md:pt-36 md:pb-36 md:pl-[4.5rem] md:pr-[4.5rem] lg:pb-[14rem]"
        id={id}
      >
        <div className="mt-0 mb-0 ml-auto mr-auto relative w-auto text-center md:flex md:justify-center">
          <div className="flex-none md:w-3/5">
            <h2 className="text-white font-bold text-2xl mb-6">
              Hola, soy Bruno. Encantado de conocerte.
            </h2>
            <p className="text-white font-normal text-xl">
              Soy un programador web freelancer, que no tiene tanto tiempo de
              trabajo en el rubro, pero tengo muchas ganas de aprender y mejorar
              todos los días.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

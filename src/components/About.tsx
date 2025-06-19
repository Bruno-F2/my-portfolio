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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              fugiat, voluptatibus eius eos, doloribus aliquid perferendis,
              sequi repellat veritatis saepe obcaecati id facere eveniet
              similique architecto pariatur. Quas, veritatis cum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

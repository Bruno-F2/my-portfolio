export default function Hero({ id }) {
  return (
    <>
      {/* Hero Section */}
      <section
        className="items-stretch flex flex-col justify-between text-center!important md:pt-8 pt-0"
        id={id}
      >
        {/* Hero Body */}
        <div className="md:p-12 py-12 px-4 grow shrink-0">
          {/* Container */}
          <div className="my-0 mx-auto  w-auto">
            {/* Columns */}
            <div className="flex justify-center text-center">
              {/* Column */}
              <div className="block basis-0 grow shrink p-3">
                {/* Text */}
                <h1 className="font-nunitoSans md:text-5xl sm:text-4xl text-3xl font-bold text-newGrey-200 mb-6">
                  Diseño de Flyers, Edición de Video & Creación de Landing Pages
                </h1>
                <h2 className="font-nunitoSans md:text-2xl text-lg font-normal text-newGrey-200 mb-6">
                  Creo y diesño cosas simples que transmiten lo que necesitas
                </h2>
                {/* Image */}
                <img
                  src="avatar.png"
                  alt="Avatar"
                  className="md:w-64 w-[200px] rounded-full justify-self-center bg-newBlue-200 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Hero Footer */}
        <div className="py-0 px-6 grow-0 shrink-0">
          {/* Container */}
          <div className="mt-0 mb-0 ml-auto mr-auto relative w-auto">
            <img
              src="background.png"
              alt="Background"
              className="h-auto w-full sm:w-[640px] md:w-[760px] justify-self-center"
            />
          </div>
        </div>
      </section>
    </>
  );
}

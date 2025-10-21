import React from "react";

function Hero() {
  return (
    <>
      <main className="flex flex-col-reverse lg:flex-row mb-10">
        <section className="w-screen lg:w-1/2 lg:pl-[180px] lg:pt-12 headline">
          <h1 className="hidden lg:block">
            <span className="hidden lg:inline">Make</span>
            <span className="hidden">remote work</span>
          </h1>

          <h1 className="mt-4 lg:mt-0">
            <span className="inline lg:hidden">Make</span>{" "}
            <span className="inline lg:inline">remote work</span>
          </h1>
          <p className="lg:mt-15 font-medium lg:w-[350px] lg:text-[14px] lg:font-bold">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black text-white rounded-2xl text-[16px] mt-6 px-6 py-3 lg:px-8 lg:py-4 lg:mt-10 lg:text-[20px] font-semibold">
            Learn More
          </button>
          <div className="client flex items-center justify-between gap-4 mt-10 lg:gap-8 lg:mt-20">
            <img
              src="/assets/images/client-databiz.svg"
              alt="Databiz"
              className="h-auto w-auto max-h-10 object-contain"
            />
            <img
              src="/assets/images/client-audiophile.svg"
              alt="Audiophile"
              className="h-auto w-auto max-h-10 object-contain"
            />
            <img
              src="/assets/images/client-meet.svg"
              alt="Meet"
              className="h-auto w-auto max-h-10 object-contain"
            />
            <img
              src="/assets/images/client-maker.svg"
              alt="Maker"
              className="h-auto w-auto max-h-10 object-contain"
            />
          </div>
        </section>
        <section className="hero-col-2 mt-0 w-screen lg:w-1/2 mb-5 pr-[50px]">
        </section>
      </main>
    </>
  );
}

export default Hero;

import React from "react";

function Hero() {
  return (
    <>
      <main className="flex flex-row mb-10">
        <section className="w-1/2 pl-[180px] pt-12 headline">
          <h1>
            <span className="hidden lg:inline">Make</span>
            <span className="hidden">remote work</span>
          </h1>

          <h1>
            <span className="inline lg:hidden">Make</span>{" "}
            <span className="inline lg:inline">remote work</span>
          </h1>
          <p className="mt-15 w-[350px] text-[14px] font-medium ">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black text-white rounded-2xl px-8 py-4 mt-10 text-[20px] font-semibold">
            Learn More
          </button>
          <div className="flex items-center justify-between gap-8 mt-20">
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
        <section className="hero-col-2 w-1/2 mb-5 pr-[50px]"></section>
      </main>
    </>
  );
}

export default Hero;

import React from "react";

function Hero(){
    return (
        <>
            <main className="flex flex-row ">
                <section className="w-1/2 pl-[150px]">
                    <h1>
                    <span className="hidden lg:inline">Make</span>
                    <span className="hidden">remote work</span>
                    </h1>

                    <h1>
                        <span className="inline lg:hidden">Make</span> <span className="inline lg:inline">remote work</span>
                    </h1>
                    <p>
                        Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                    </p>
                    <button>
                        Learn More
                    </button>
                    <div>
                        <img src="/assets/images/client-databiz.svg" alt="" />
                        <img src="/assets/images/client-audiophile.svg" alt="" />
                        <img src="/assets/images/client-meet.svg" alt="" />
                        <img src="/assets/images/client-maker.svg" alt="" />
                    </div>

                </section>
                <section className="hero-col-2 w-1/2 mt-5 mb-5">

                </section>
            </main>
        </>
    );
}

export default Hero;
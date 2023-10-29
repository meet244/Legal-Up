import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { animated, useSpring } from "react-spring";
const HomeHero = () => {
    let navigate = useNavigate()
    const [btnHover, setBtnHover] = useState(false)
    const { bodyRef, inView, entry } = useInView({
        threshold: 0,
    });
    const props = useSpring({
        opacity: 1,
        config: {
            duration: 400,
        },
        transform: "translate(0px, 0px)",
        from: { opacity: 0, transform: "translate(0px, 200px)" }
    });
    return (
        <div ref={bodyRef} id="id-home-hero" className="flex gap-40 justify-center items-center bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/images/hero-bg.png')" }}>
            <div className=" relative md:min-h-[600px] lg:w-1/2  lg:h-screen flex  md:justify-center flex-col p-6 items-start  max-w-lg ">
                <div className=" text-3xl lg:text-5xl capitalize font-extrabold tracking-[.50px]">
                    <div className="lg:mb-4 mb-2 w-max">
                        <span id="homepage-heading-gradient">Connecting Users </span>
                        with
                    </div>
                    <div className="w-max">Legal Experts</div>
                </div>
                <div className="font-normal mb-6    tracking-[0.005rem]  text-xs mt-6 max-w-md">
                    Welcome to LegalUp, your premier destination for seamless legal matchmaking. We understand that finding the right lawyer for your unique case can be a daunting task. That's why we've created a platform designed to simplify the process.
                </div>
                <div
                    className="relative cursor-pointer mt-8"
                    onMouseOver={() => {
                        setBtnHover(true);
                    }}
                    onMouseOut={() => {
                        setBtnHover(false);
                    }}
                    onClick={() => { navigate("/lawyer") }}
                >
                    <div
                        className={`relative z-20 px-4 py-2 font-semibold flex items-center  ${btnHover ? "text-white" : "text-black"}`}
                    >
                        Find Your Lawyer
                        <svg
                            width="29"
                            height="17"
                            viewBox="0 0 29 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2"
                        >
                            <path
                                d="M24.6788 9.57516C24.2642 9.57516 24.0346 9.57516 23.805 9.57516C20.1948 9.57516 5.22929 9.57516 1.61909 9.57516C1.36379 9.57516 1.10163 9.58895 0.853188 9.53896C0.292896 9.42863 -0.000101972 9.03729 -0.000101996 8.48908C-0.000102019 7.9719 0.277476 7.58229 0.805212 7.46506C1.07251 7.40644 1.35693 7.41162 1.6328 7.41162C5.24299 7.40817 20.2085 7.40989 23.8187 7.40989C24.0466 7.40989 24.2744 7.40989 24.6668 7.40989C24.4235 7.12027 24.283 6.94787 24.1374 6.78065C22.9979 5.47046 21.8534 4.16544 20.7191 2.85179C20.1674 2.21221 20.1605 1.60538 20.6745 1.15199C21.1748 0.708936 21.8122 0.803752 22.3503 1.41575C24.1888 3.50861 26.0256 5.60148 27.8589 7.70124C28.3147 8.22359 28.301 8.79421 27.8401 9.31829C26.0187 11.3974 24.1939 13.4747 22.3708 15.5503C21.814 16.1847 21.2211 16.2951 20.7054 15.8675C20.1588 15.4141 20.1605 14.7901 20.7345 14.1229C21.7831 12.9041 22.8437 11.6973 23.8992 10.4837C24.1219 10.2285 24.3413 9.96994 24.6771 9.57861L24.6788 9.57516Z"
                                fill={btnHover ? "#ffffff" : "#335e9e"}
                            />
                        </svg>
                    </div>
                    {/* {!btnHover ? (
            <div className="overflow-visible z-10 absolute top-0 left-0  h-full border px-4 py-2 rounded-md w-1/2 border-[#FFFFFF80] border-2 border-r-0"></div>
            ) : (
              <div className="overflow-visible z-10 absolute top-0 left-0  h-full w-full bg-lime  px-4 py-2 rounded-md"></div>
            )} */}

                    <div
                        className={`overflow-visible text-black z-10 absolute top-0 left-0  h-full transition-all duration-700 ${btnHover
                            ? "w-full bg-accent  px-4 py-2 rounded-md"
                            : " px-4 py-2 rounded-md w-1/2 border-[#335e9e] border-2 border-r-0"
                            }`}
                    ></div>
                </div>
            </div>
            {/* <motion.div
                initial={{ x: 400, opacity: 1 }}
                animate={{
                    x: inView && 0,
                    opacity: inView && 1,
                    transition: {
                        duration: 1,
                        ease: "easeIn",
                    },
                }}
                exit={{
                    x: 0,
                    opacity: 1
                }}
                className="">
                <img

                    className="w-96 relative rounded-lg"
                    src="https://evolvelaw.ca/wp-content/uploads/2022/01/consult-1.webp"
                    alt="A group of People"
                />
            </motion.div> */}
            <animated.div style={props} className="max-w-[500px]">
                <img
                    className="w-full relative rounded-lg"
                    src="https://evolvelaw.ca/wp-content/uploads/2022/01/consult-1.webp"
                    alt="A group of People"
                />
            </animated.div>


            {/* <AnimatePresence>
                {inView && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, duration: 1000 }}
                        exit={{ opacity: 0 }}
                    >
                        <img

                            className="w-96 relative rounded-lg"
                            src="https://evolvelaw.ca/wp-content/uploads/2022/01/consult-1.webp"
                            alt="A group of People"
                        />
                    </motion.div>
                )}
            </AnimatePresence> */}
        </div>
    )
}

export default HomeHero
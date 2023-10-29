import React, { useEffect, useState } from 'react'

const Heropage = ({ type }) => {
    const [btnHover, setBtnHover] = useState(false);
    const [data, setData] = useState({ backgroundImageLg: "", backgroundImageSm: "", title: "", btntxt: "" })
    const [mohit, setmohit] = useState(<div>hi</div>)
    useEffect(() => {
        if (type == "About") {
            setData({ backgroundImageLg: "lg:bg-[url('/images/elements/lg-about-hero.png')]", backgroundImageSm: "/images/elements/sm-about-hero.png", title: <>supplying you the web dev <span id="homepage-heading-gradient"> build </span>Blocks</>, btntxt: "start your journey today" });
        } else if (type == "Consultation") {
            setData({ backgroundImageLg: "lg:bg-[url('/images/lg-consultation-hero.png')]", backgroundImageSm: "/images/elements/sm-consultation-hero.png", title: <>need   <span id="homepage-heading-gradient"> Personalised </span>consultation?</>, btntxt: "contact our team today" });
        }
    }, [])
    return (
        <div className={`relative bg-cover   bg-no-repeat  mt-20 lg:mt-0 ${data.backgroundImageLg}`}  >
            <div className="lg:hidden">
                <img src={data.backgroundImageSm} alt="" />
            </div>
            <div className="relative md:min-h-[600px]  lg:w-1/2 lg:ml-40  flex md:justify-center flex-col p-6 items-start  text-white max-w-lg ">
                <div className="text-3xl lg:text-4xl capitalize font-bold tracking-[1.5px] ">
                    <div className="lg:mb-4 mb-2">
                        {data.title}
                    </div>
                </div>
                <div className="font-xs   tracking-[0.001rem] text-xs lg:my-4 my-8 max-w-md">
                    Lorem ipsum dolor sit amet consectetur. Facilisi nunc eu egestas at
                    blandit. Quisque egestas quam nibh et semper. Dictum sit a mi
                    tristique in tincidunt porta tincidunt fringilla. Scelerisque magna
                    ipsum vitae pharetra bibendum. Morbi pretium ullamcorper penatibus.
                </div>
                <div
                    className="relative cursor-pointer"
                    onMouseOver={() => {
                        setBtnHover(true);
                    }}
                    onMouseOut={() => {
                        setBtnHover(false);
                    }}
                >
                    <div
                        className={`relative capitalize z-20 px-4 py-2 flex items-center  ${btnHover ? "text-black" : "text-lime"
                            }`}
                    >
                        {data.btntxt}
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
                                fill={btnHover ? "#000000" : "#D4F229"}
                            />
                        </svg>
                    </div>
                    <div
                        className={`overflow-visible z-10 absolute top-0 left-0  h-full transition-all duration-700 ${btnHover
                            ? "w-full bg-lime  px-4 py-2 rounded-md"
                            : " px-4 py-2 rounded-md w-1/2 border-[#FFFFFF80] border-2 border-r-0"
                            }`}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Heropage
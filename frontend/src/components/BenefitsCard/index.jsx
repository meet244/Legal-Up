import React from 'react'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
const BenefitsCard = () => {
    return (
        <div id="id-benefits-card" className="grid grid-cols-4 gap-12 mx-12">
            {BenefitsCardsdata.map((item, i) => {
                return <BenefitCard key={i} cardData={item} />
            })}
        </div>
    )
}
const BenefitCard = ({ cardData }) => {
    let { title, con, imageSvg } = cardData;
    return (<div className="px-4 relative mt-6 flex flex-col justify-between gap-2 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="">
            <div className="flex m-2 ">
                {imageSvg}
            </div>
            {/* <VscWorkspaceTrusted size={24} className="m-4 font-extrabold" /> */}
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {con}
            </p>
        </div>
        <div className="p-6 pt-0">
            <a
                className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                href="#"
            >
                <button
                    className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-accent transition-all hover:bg-accent/40 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                >
                    Learn More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                    </svg>
                </button>
            </a>
        </div>
    </div>)
}

let BenefitsCardsdata = [
    {
        imageSvg: <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="#335e9e" viewBox="0 -960 960 960" width="45"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z" /></svg>
        , title: "Smart Matchmaking",
        con: "Our advanced algorithms pair you with the perfect lawyer based on your case, streamlining your search for legal representation."
    },
    {
        imageSvg: <svg xmlns="http://www.w3.org/2000/svg" fill="#335e9e" height="45" viewBox="0 -960 960 960" width="45"><path d="M160-240v-320 13-173 480Zm0-400h640v-80H160v80Zm303 480H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v213q-35-25-76.5-39T716-560q-57 0-107.5 21.5T520-480H160v240h279q3 21 9 41t15 39Zm213 80-12-60q-12-5-22.5-10.5T620-164l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T664-420l12-60h80l12 60q12 5 22.5 10.5T812-396l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T768-140l-12 60h-80Zm40-120q33 0 56.5-23.5T796-280q0-33-23.5-56.5T716-360q-33 0-56.5 23.5T636-280q0 33 23.5 56.5T716-200Z" /></svg>
        , title: "Transparent Cost Estimations",
        con: "We provide tools to estimate legal costs, ensuring financial clarity as you navigate your legal journey."
    },
    {
        title: "24/7 Support",
        imageSvg: <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="#335e9e" viewBox="0 -960 960 960" width="45"><path d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" /></svg>
        , con: "Our round-the-clock customer support is here to assist you with any questions or concerns."
    },
    {
        title: "Secure Communication",
        imageSvg: <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="#335e9e" viewBox="0 -960 960 960" width="45"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v159h-80v-79L480-440 160-640v400h480v80H160Zm320-360 320-200H160l320 200ZM160-240v-480 480Zm600 80q-17 0-28.5-11.5T720-200v-120q0-17 11.5-28.5T760-360v-40q0-33 23.5-56.5T840-480q33 0 56.5 23.5T920-400v40q17 0 28.5 11.5T960-320v120q0 17-11.5 28.5T920-160H760Zm40-200h80v-40q0-17-11.5-28.5T840-440q-17 0-28.5 11.5T800-400v40Z" /></svg>
        , con: "Connect with your matched lawyers securely through our platform, protecting your privacy and data."
    },
]
export default BenefitsCard;
import React, { useState } from 'react'
import { BiCommentAdd } from 'react-icons/bi'
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
const LawyerPortfolio = () => {
    const [addcomment, setAddcomment] = useState(false);
    let { activeLawyer } = useSelector(state => state.user)

    return (
        <div className="bg-gray-100 pt-16">
            <div className="container mx-auto py-8">
                <div className="flex justify-center">
                    <div className="">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                {activeLawyer.gender === "F" &&
                                    <img src="data:image/jpeg;base64,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" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                                }
                                {activeLawyer.gender === "M" &&
                                    <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                                }
                                <h1 className="text-xl font-bold">{activeLawyer.name}</h1>
                                <p className="text-gray-600">{activeLawyer.experience} years experience</p>
                                <p className="text-gray-600">{activeLawyer.gender == "F" && "Female"}{activeLawyer.gender == "M" && "Male"}</p>
                            </div>
                            <div className="flex flex-col my-4">
                                <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">Speciality</span>
                                <ul>
                                    {activeLawyer.speciality.map((item, i) => {
                                        return <li key={i} className="mb-2">{item}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div class="flex flex-col justify-center items-center">
                            <div class="relative flex flex-col items-center rounded-lg   max-w-6xl mx-6  bg-white bg-clip-border shadow-3xl shadow-shadow-500 :!bg-navy-800 :text-white :!shadow-none p-3">
                                <div class="mt-2 mb-8 w-full">
                                    <h4 class="px-2 text-xl font-bold text-navy-700 :text-white">
                                        General Information
                                    </h4>
                                    <p class="mt-2 px-2 text-base text-gray-600">
                                        As we live, our hearts turn colder. Cause pain is what we go through
                                        as we become older. We get insulted by others, lose trust for those
                                        others. We get back stabbed by friends. It becomes harder for us to
                                        give others a hand. We get our heart broken by people we love, even
                                        that we give them all...
                                    </p>
                                </div>
                                <div class="grid grid-cols-2 gap-4 px-2 w-full">
                                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 :!bg-navy-700 :shadow-none">
                                        <p class="text-sm text-gray-600">Average Days of Case Completion</p>
                                        <p class="text-base font-medium text-navy-700 :text-white">
                                            {activeLawyer.avgDaysOfCompletion}
                                        </p>
                                    </div>

                                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 :!bg-navy-700 :shadow-none">
                                        <p class="text-sm text-gray-600">Client Type</p>
                                        <p class="text-base font-medium text-navy-700 :text-white">
                                            {activeLawyer.clientType}
                                        </p>
                                    </div>

                                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 :!bg-navy-700 :shadow-none">
                                        <p class="text-sm text-gray-600">Jurisdiction</p>
                                        <p class="text-base font-medium text-navy-700 :text-white">
                                            {activeLawyer.jurisdiction}
                                        </p>
                                    </div>

                                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 :!bg-navy-700 :shadow-none">
                                        <p class="text-sm text-gray-600">Languages</p>
                                        <p class="text-base font-medium text-navy-700 :text-white">
                                            {activeLawyer.languages.join(", ")}
                                        </p>
                                    </div>

                                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 :!bg-navy-700 :shadow-none">
                                        <p class="text-sm text-gray-600">Location</p>
                                        <p class="text-base font-medium text-navy-700 :text-white">
                                            {activeLawyer.location}
                                        </p>
                                    </div>
                                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 :!bg-navy-700 :shadow-none">
                                        <p class="text-sm text-gray-600">Price</p>
                                        <p class="text-base font-medium text-navy-700 :text-white">
                                            ${activeLawyer.price}
                                        </p>
                                    </div>

                                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 :!bg-navy-700 :shadow-none">
                                        <p class="text-sm text-gray-600">Rating</p>
                                        <p class="text-base font-medium text-navy-700 :text-white">
                                            <StarRatings
                                                rating={activeLawyer.rating}
                                                starDimension="20px"
                                                starSpacing="2px"
                                                starRatedColor="#335e9e"
                                                numberOfStars={5}
                                                name='rating'
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="shrink-0">
                                        <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" class="h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-6 grow">
                                        <p class="mb-2 font-bold :text-white">
                                            Technical support
                                        </p>
                                        <p class="text-neutral-700 :text-neutral-200">
                                            support@example.com
                                        </p>
                                        <p class="text-neutral-700 :text-neutral-200">
                                            +1 234-567-89
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg m-4">
                            <div className="flex justify-between items-center mx-4 px-4">
                                <div className="text-lg font-semibold">Comments</div>
                                <button onClick={() => { setAddcomment(v => !v) }} className="flex shadow-sm px-4 py-3 font-semibold gap-3 justify-center rounded-md items-center hover:bg-secondary">
                                    <BiCommentAdd size={24} /> Add Feedback Stars
                                </button>
                            </div>
                            {addcomment && (<div class="sm:col-span-3">
                                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                <div class="mt-2">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>)}
                            <article class="p-6 text-base bg-white border-t border-gray-200 :border-gray-700 :bg-gray-900">
                                <footer class="flex justify-between items-center mb-2">
                                    <div class="flex items-center">
                                        <p class="inline-flex items-center mr-3 text-sm text-gray-900 :text-white font-semibold"><img
                                            class="mr-2 w-6 h-6 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                            alt="Helene Engels" />Helene Engels</p>
                                        <p class="text-sm text-gray-600 :text-gray-400"><time pubdate datetime="2022-06-23"
                                            title="June 23rd, 2022">Jun. 23, 2022</time></p>
                                    </div>
                                    <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                                        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 :text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 :bg-gray-900 :hover:bg-gray-700 :focus:ring-gray-600"
                                        type="button">
                                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                    </button>
                                    <div id="dropdownComment4"
                                        class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow :bg-gray-700 :divide-gray-600">
                                        <ul class="py-1 text-sm text-gray-700 :text-gray-200"
                                            aria-labelledby="dropdownMenuIconHorizontalButton">
                                            <li>
                                                <a href="#"
                                                    class="block py-2 px-4 hover:bg-gray-100 :hover:bg-gray-600 :hover:text-white">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block py-2 px-4 hover:bg-gray-100 :hover:bg-gray-600 :hover:text-white">Remove</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block py-2 px-4 hover:bg-gray-100 :hover:bg-gray-600 :hover:text-white">Report</a>
                                            </li>
                                        </ul>
                                    </div>
                                </footer>
                                <p class="text-gray-500 :text-gray-400">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
                                <div class="flex items-center mt-4 space-x-4">
                                    <button type="button"
                                        class="flex items-center text-sm text-gray-500 hover:underline :text-gray-400 font-medium">
                                        <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                        </svg>
                                        Reply
                                    </button>
                                </div>
                            </article>
                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default LawyerPortfolio
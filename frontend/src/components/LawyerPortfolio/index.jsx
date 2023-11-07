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
                                    <img src="/images/women-profile.png" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                                }
                                {activeLawyer.gender === "M" &&
                                    <img src="/images/men-profile.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
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
import React from 'react'
import { useDispatch } from 'react-redux';
import { addLawyers } from '../../features/user';

const Admin = () => {
    let dispatch = useDispatch()
    return (
        <form className="pt-24" autocomplete='off'
            onSubmit={(e) => {
                e.preventDefault();
                let { name, experience, gender, speciality, location, clienttype, jurdiction, price, averageDays, languages } = e.target
                let dataObj = {
                    name: name.value,
                    experience: experience.value,
                    speciality: speciality.value.split(","),
                    location: location.value,
                    clientType: clienttype.value,
                    jurisdiction: jurdiction.value,
                    price: price.value,
                    avgDaysOfCompletion: averageDays.value,
                    languages: languages.value.split(","),
                    gender: gender.value
                }
                dispatch(addLawyers(dataObj))
            }}
        >
            <div className="space-y-12 max-w-xl border-2 shadow-xl p-8 m-auto rounded ">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-xl font-semibold leading-7 text-gray-900 font-aquire">Add Lawyer</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" type="text" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Select an option</label>
                            <select name="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500">
                                <option selected>Choose Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                        <div className="sm:col-span-3">
                            <label for="experience" className="block text-sm font-medium leading-6 text-gray-900">Experience</label>
                            <div className="mt-2">
                                <input name="experience" type="number" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>


                        <div className="col-span-full">
                            <label for="speciality" className="block text-sm font-medium leading-6 text-gray-900">Speciality</label>
                            <div className="mt-2">
                                <textarea id="speciality" name="speciality" rows="3" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write your Special Professions separated by commas</p>
                        </div>
                        <div className="sm:col-span-4">
                            <label for="location" className="block text-sm font-medium leading-6 text-gray-900">Location</label>
                            <div className="mt-2">
                                <input id="location" name="location" type="text" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label for="clienttype" className="block text-sm font-medium leading-6 text-gray-900">Client Type</label>
                            <div className="mt-2">
                                <input id="clienttype" name="clienttype" type="text" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <label for="jurdiction" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Select an option</label>
                            <select id="jurdiction" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500">
                                <option selected>Choose Jurisdiction</option>
                                <option value="District Court">District Court</option>
                                <option value="High Court">High Court</option>
                                <option value="Supreme Court">Supreme Court</option>
                            </select>
                        </div>
                        <div className="sm:col-span-3">
                            <label for="price" className="block text-sm font-medium leading-6 text-gray-900">Price for each Case</label>
                            <div className="mt-2">
                                <input id="price" name="price" type="number" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label for="averageDays" className="block text-sm font-medium leading-6 text-gray-900">Average days of Completion</label>
                            <div className="mt-2">
                                <input id="averageDays" name="averageDays" type="number" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label for="languages" className="block text-sm font-medium leading-6 text-gray-900">Languages</label>
                            <div className="mt-2">
                                <textarea id="languages" name="languages" rows="3" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write languages you know separating with commas</p>
                        </div>

























                        {/* <div className="col-span-full">
                            <label for="photo" className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                </svg>
                                <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label for="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                    </svg>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label for="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className=" border px-3 py-2 rounded-md text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </div>

        </form>
    )
}

export default Admin
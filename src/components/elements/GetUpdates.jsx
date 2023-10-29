import React from 'react'

const GetUpdates = () => {
    return (
        <div className="mx-auto my-24 flex h-52 w-[780px] flex-col rounded-lg bg-white font-serif text-black shadow-xl">
            <div className="mt-4">
                <h1 className="mx-11 my-1 font-bold text-[20px] text-gray-600">Get more updates...</h1>
            </div>
            <div className="mx-11 mb-4 text-sm text-gray-500"><p>Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter and you'll be among the first to find out about new features, components, versions, and tools.</p></div>
            <div className="relative flex justify-center space-x-3">
                <span className="absolute inset-y-1 left-12 flex items-center pl-2">
                </span>
                <input className="w-[570px] rounded-lg p-2 hover:outline-blue-400" type="email" placeholder="Your email address" />
                <button className="w-32 rounded-lg border bg-blue-700 font-medium text-white hover:bg-blue-800">Subscribe</button>
            </div>
            <div>
                <p className="mx-11 mt-2 text-[15px] font-thin">By subscribing, you agree with Revue’s <a className="text-blue-700" href="https://www.getrevue.co/terms" target="_blank">Terms of Service</a> and <a className="text-blue-700" href="https://www.getrevue.co/privacy" target="_blank">Privacy Policy.</a></p>
            </div>
        </div>
    )
}

export default GetUpdates
import React from 'react'
import { BsDot, BsGenderAmbiguous } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { LiaStarSolid } from 'react-icons/lia'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setActiveLawyer } from '../../features/user'
const LawyerCard = ({ card }) => {
    let { name, experience, speciality, rating, location, gender, id } = card;
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let { lawyers } = useSelector(state => state.user)
    const navi = async () => {
        let person = await lawyers.data.find(ob => (ob.id == id))
        dispatch(setActiveLawyer(person))
        navigate(`/lawyer/${id}`)
    }
    return (
        <div className="relative my-4 flex select-none  text-gray-700 border shadow-md  rounded-xl bg-clip-border">
            <div className="relative cursor-pointer" onClick={navi}>
                <img
                    src="/images/profile.png"
                    className="w-24 m-4"
                />
            </div>
            <div className="p-6 gap-1 flex flex-col cursor-pointer" onClick={navi}>
                <h5 className="block  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                    <span class="flex w-max my-2 bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">{experience} years experience</span>
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                    and near to "Naviglio" where you can enjoy the main night life in
                    Barcelona.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                    {speciality.map((item, i) => {
                        return <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">{item}</span>
                    })}
                </div>
            </div>
            <div className="m-4 pt-0 border-l w-max flex flex-col gap-2 pl-4">
                <a href="https://notenova.vercel.app" target="_blank" class="w-full  bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                    Website
                </a>
                <div className="flex items-center font-semibold  gap-2">
                    <FaLocationDot /> {location}
                </div>
                <div className="flex items-center font-semibold  gap-2">
                    <LiaStarSolid /> {rating}
                </div>
                <div className="flex items-center font-semibold  gap-2">
                    <BsGenderAmbiguous /> {gender === "F" && "Female"}{gender === "M" && "Male"}
                </div>
            </div>

        </div >
    )
}

export default LawyerCard
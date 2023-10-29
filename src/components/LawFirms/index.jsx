import React from 'react'

const LawFirms = () => {
   return (

      <section id="id-law-firms" className="pt-10 lg:pt-[120px] pb-8 lg:pb-20 bg-[#F3F4F6] bg-no-repeat bg-cover" style={{ backgroundImage: "url(/images/lawfirms-bg.png)" }}>
         <div className="container flex flex-col justify-center items-center ">
            <div className="w-full text-center pb-8 0">

               <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
                  Area of Practice

               </h1>
               <p className="text-gray-400 font-normal text-base max-w-4xl m-auto">We only practice family law so our awareness, knowledge, and experience in the field is extensive and current.
                  Narrowing our activity ensures we have a continuous pulse on the latest trends, precedents, and case law, and are at the forefront of new developments in family law and the family court system.</p>
            </div>
            <div className="grid grid-cols-3 gap-12 mx-12">
               {firmscarddata.map((item) => {
                  return <LawFirm key={item.id} lawcard={item} />
               })}
            </div>
         </div>
      </section>
   )
};
const LawFirm = ({ lawcard }) => {
   let { id, title, con } = lawcard
   return (
      <div className="w-full h-full">
         <div className="bg-white rounded-lg overflow-hidden  flex justify-center  flex-col items-center ">
            <img
               src={`/images/firm${id}.png`}
               alt="image"
               className="w-20 h-20 mt-8 "
            />
            <div className="p-8 sm:p-9 md:p-7 xl:p-6 text-center">
               <h3>
                  <a
                     href="javascript:void(0)"
                     className="font-bold first-letter:font-semibold first-letter:text-dark text-xl first-letter:sm:text-[22px] first-letter:md:text-xl first-letter:lg:text-[22px] first-letter:xl:text-xl first-letter:2xl:text-[22px] first-letter:mb-4 first-letter:block first-letter:hover:text-primary">
                     {title}
                  </a>
               </h3>
               <p className="text-base text-body-color leading-relaxed mb-7">
                  {con}
               </p>
               <a
                  href="javascript:void(0)"
                  className=" inline-block py-2 px-4 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-[#2596be] hover:text-white transition "
               >
                  View Details
               </a>
            </div>
         </div>
      </div>
   )
}

const firmscarddata = [
   {
      id: 1
      , title: "Divorce"
      , con: "Regardless of your reason for divorce, this is an emotional time. In Canada, there are three grounds for divorce."
   },
   {
      id: 2
      , title: "Support"
      , con: "It’s not uncommon for separations to cause financial stress. When this occurs the court can remediate the situation with different forms of financial support."
   },
   {
      id: 3
      , title: "Parenting & Access"
      , con: "Solutions are different for every family and we will navigate unique hurdles, such as long-distance, addictions or special needs."
   },
   {
      id: 4
      , title: "Agreements"
      , con: "For those who want special consideration in the event of a death or separation, an interspousal agreement is essential to protecting their interests."
   },
   {
      id: 5
      , title: "Property"
      , con: "When distributing property in a divorce, the first step is to determine which assets are considered family assets, business assets or individual assets."
   },
   {
      id: 6
      , title: "Independent Legal Advice"
      , con: "Our office can assist by advising you in relation to an agreement you have already reached with another party."
   },
   {
      id: 5
      , title: "Adoption & Guardianship"
      , con: "The process of welcoming a child into your home and family is heartwarming, but it can also be challenging when it comes to legal proceedings."
   },


]
export default LawFirms;
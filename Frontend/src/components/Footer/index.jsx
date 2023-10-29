import React from 'react'

const Footer = () => {
    return (
        <div className="p-8  bg-grey-100 bg-white " >
            <div className="justify-between bg-primary   flex flex-col text-center lg:text-left md:flex-row  lg:mx-32 py-6   rounded-md text-white    h-full ">
                <div className="font-normal  py-2 text-sm justify-around flex flex-col lg:flex-row w-full ">
                    <div>
                        Company
                        <div className="pt-6 flex flex-col gap-2     ">
                            <a href="#">Products</a>
                            <a href="#">About Us</a>
                            <a href="#">Consoltations</a>
                            <a href="#">Support</a>
                        </div>
                    </div>
                    <div>
                        Resources
                        <div className="pt-6 flex flex-col gap-2    ">
                            <a href="#">TermsD & Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                    <div>
                        Our Details
                        <div className="pt-6 flex flex-col gap-2     ">
                            <a href="#">
                                123 Street Name <br />
                                City,
                                <br />
                                Country, <br />
                                PostCode
                            </a>
                            <a href="#">Pinfo@Buildingonlinedevs.com</a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="/images/footer-logo.png" className="w-28 m-auto lg:ml-0 rounded-md" alt="" />
                    <div className="py-6 flex flex-col text-sm font-light   ">
                        Copyright © 2023 techTitans All Rights Reserved.
                    </div>
                    <img src="/images/footer-banks.png" className="w-48 m-auto lg:ml-0" alt="" />
                </div>
            </div>
        </div >
    )
}

export default Footer
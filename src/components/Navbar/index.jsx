import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCoords } from "../../features/user";
import { useGeolocated } from "react-geolocated";

const Navbar = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch()
  const [windowScrollY, setWindowScrollY] = useState(0);
  const handleScroll = () => {
    setWindowScrollY(window.scrollY);
  };

 
  useEffect(() => {

    window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, []);

  return (
    <div className="fixed z-50 bg-white lg:px-28 mx-auto  w-full " style={{ boxShadow: windowScrollY > 10 && "rgba(99, 99, 99, .8) 0px 1px 8px 0px" }}>
      <nav className="border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <img src="/images/dark-logo.png" className="w-48 cursor-pointer py-4" alt="" onClick={() => { navigate("/") }} />
          <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden md:block w-full md:w-auto">
            <ul className="flex-col md:flex-row flex lg:text-base md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li className="flex justify-center items-center cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('id-home-hero');
                  if (element) {
                    // 👇 Will scroll smoothly to the top of the next section
                    element.scrollIntoView({ behavior: 'smooth', block: "center" });
                  }
                }}
              >
                <div className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Home</div>
              </li>
              {/* <li className="flex justify-center" >
                <button className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Dropdown <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                <div className="hidden lg:mt-12  bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                  <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                  </div>
                </div>
              </li> */}
              <li className="flex justify-center items-center cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('id-benefits-card');
                  if (element) {
                    // 👇 Will scroll smoothly to the top of the next section
                    element.scrollIntoView({ behavior: 'smooth', block: "center" });
                  }
                }}
              >
                <div className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Features</div>
              </li>
              <li
                onClick={() => {
                  const element = document.getElementById('id-law-firms');
                  if (element) {
                    // 👇 Will scroll smoothly to the top of the next section
                    element.scrollIntoView({ behavior: 'smooth', block: "center" });
                  }
                }}
                className="flex justify-center items-center cursor-pointer">
                <div className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Law Firms</div>
              </li>
              <li className="flex justify-center items-center cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('id-testimonials');
                  if (element) {
                    // 👇 Will scroll smoothly to the top of the next section
                    element.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
              >
                <div className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Testinomials</div>
              </li>
              <li className="flex justify-center items-center cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('id-contact');
                  if (element) {
                    // 👇 Will scroll smoothly to the top of the next section
                    element.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
              >
                <div className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Contact</div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
import React from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { store } from './features/store'
import { BenefitsCard, Feedbacks, Footer, HomeHero, LawFirms, Navbar, Testimonails } from './components'

const Root = () => {
    
    return (
        <Provider store={store}>
            <Navbar />
            {/* <Heropage  type="Consultation"/> */}
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </Provider>
    )
}
export default Root;
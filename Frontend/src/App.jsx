import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Admin, BenefitsCard, Feedbacks, Footer, HomeHero, LawFirms, LawyerPortfolio, Lawyers, Navbar, Testimonails } from './components'

import "./App.css";
import Root from "./Root";
import { GetUpdates } from "./components/elements";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage />} />
        <Route path="/lawyer" element={<Lawyers />} />
        <Route path="/lawyer/:personid" element={<LawyerPortfolio />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route index element={<Homepage />} />
        <Route path="/products" element={<ProductCatalogue />} />
        <Route path="/login" element={<Login />} >
          <Route index element={<LoginPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
const Homepage = () => {
  return (<>
    <HomeHero />
    <BenefitsCard />
    <LawFirms />
    <Testimonails />
    {/* <GetUpdates /> */}
    <Feedbacks />
  </>
  )
}

export default App;

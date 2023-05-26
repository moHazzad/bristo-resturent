import { Outlet } from "react-router-dom"
import NavBar from "../shared/NavBar"
import Footer from "../shared/Footer"


function Main() {
  return (
    <>
    
    <div className="w-full bg-black  bg-opacity-20 fixed text-white z-10">
    <NavBar />
    </div>
    <Outlet></Outlet>
    <Footer />
    
    
    </>
  )
}

export default Main
import { Routes, Route } from "react-router-dom";



import LoginPage from "../Pages/Login";


import LandingPage from "../Pages/Landing";
import FilePage from "../Pages/File";
import RegisaterPage from "../Pages/Rregister";
import AboutPage from "../Pages/About";
function Path(){
    return (
        <Routes>
                <Route path="/" element={<LandingPage />} />
                
                <Route path="/Register" element={<RegisaterPage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/Files" element={<FilePage />} />
                <Route path="/About" element={<AboutPage />} />
               
            </Routes>
    )
}

export default Path;
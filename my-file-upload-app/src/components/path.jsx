import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





import Register from "./SignUp";
import LoginPage from "../Pages/Login";
import FileUpload from "./upload";

import LandingPage from "../Pages/Landing";
import FilePage from "../Pages/File";
import RegisaterPage from "../Pages/Rregister";
function Path(){
    return (
        <Routes>
                <Route path="/" element={<LandingPage />} />
                
                <Route path="/Register" element={<RegisaterPage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/Files" element={<FilePage />} />
               
            </Routes>
    )
}

export default Path;
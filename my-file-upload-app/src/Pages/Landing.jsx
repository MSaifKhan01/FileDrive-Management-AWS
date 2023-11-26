// import HomePage from "../components/Home";
import Navbar from "../components/Navbar";
import Register from "../components/SignUp";

import "../FileCSS/Landing.css";
function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="homepage-container">
        <div className="background-image">
          <div className="content">
            <div>
             
            </div>
            <div className="overlay">
              <h1>Welcome to File Drive – your seamless solution for efficient file management, offering secure sharing and collaboration</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

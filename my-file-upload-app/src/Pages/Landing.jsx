// import HomePage from "../components/Home";
import Navbar from "../components/Navbar";
import Register from "../components/SignUp";

import "../FileCSS/Landing.css";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="homepage-container">
        <div
          className="background-image"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/woman-holding-blank-business-card_53876-120096.jpg?w=900&t=st=1700857525~exp=1700858125~hmac=d54f19a82842f5e5d8c6210cbb95d4dbb937dab71f8f112629c1aaa0bf6192b2")',
          }}
        >
          <div className="overlay"></div>
        </div>
        <div className="content">
          <h1>Welcome to My Real Tape</h1>
          
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

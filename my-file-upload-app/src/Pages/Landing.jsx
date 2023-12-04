import React from "react";
import Navbar from "../components/Navbar";
import "../FileCSS/Landing.css"
import Footer from "../components/footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="body-wrap">
        <main>
          <section className="hero">
            <div className="container">
              <div className="hero-inner">
                <div className="hero-copy">
                  <h1 className="hero-title mt-0">Manage Your Files with Ease</h1>
                  <p className="hero-paragraph">Simplify file management. Upload, download, and organize your files securely.</p>
                  <div className="hero-cta">
                    <a className="button button-primary" href="/Login">Get Started</a>
                    <a className="button" href="/About">Learn More</a>
                  </div>
                </div>
                <div className="heroimage">
                  <img src="https://img.freepik.com/free-vector/all-data-concept-illustration_114360-4188.jpg?w=740&t=st=1701686217~exp=1701686817~hmac=06bbbdeb227de780d593dbcefed2d6e0dc4c34a3cf7bfbfa73e1a5102cf68e3d" alt="" />
                </div>
               
              </div>
            </div>
          </section>

          <section className="features section">
            <div className="container">
              <div className="features-inner section-inner has-bottom-divider">
                <div className="feature text-center is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src="https://img.freepik.com/free-vector/fingerprint-concept-illustration_114360-3630.jpg?w=740&t=st=1701671885~exp=1701672485~hmac=f30d2aebaefb6ba1f424e7562786f18d930362c5519c5afd706767c048ffc3cc" alt="Feature 01" />
                    </div>
                    <h4 className="feature-title mt-24">User Authentication</h4>
                    <p className="text-sm mb-0">Securely sign up or log in to your account, granting you access to a robust platform where you can effortlessly upload, organize, and manage all your files with confidence and ease</p>
                  </div>
                </div>

                
                <div className="feature text-center is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src="https://img.freepik.com/free-vector/illustration-downloading-icon_53876-6324.jpg?w=740&t=st=1701671981~exp=1701672581~hmac=219b1a5a7f76d597b8addce097b764a8bfe07887191dfc412c6ad392d7b5a301" alt="Upload Icon" />
                    </div>
                    <h4 className="feature-title mt-24">File Upload</h4>
                    <p className="text-sm mb-0">Easily upload your important files and documents to the secure and efficient cloud storage platform, ensuring seamless accessibility and peace of mind for all your data management needs.</p>
                  </div>
                </div>

                <div className="feature text-center is-revealing ">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src="https://img.freepik.com/free-vector/download-concept-illustration_114360-2857.jpg?w=740&t=st=1701672297~exp=1701672897~hmac=52739f57a8445f94afa34810a52e66a79eaf9bb4dbd00c4f93b0a0b61b15308f" alt="Download Icon" />
                    </div>
                    <h4 className="feature-title mt-24">File Download</h4>
                    <p className="text-sm mb-0">Effortlessly download your files at your convenience, ensuring quick and convenient access to your important documents whenever you need them.</p>
                  </div>
                </div>

                <div className="feature text-center is-revealing wntcentre">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src="https://img.freepik.com/premium-photo/computer-folders_165073-148.jpg?w=826" alt="Access Icon" />
                    </div>
                    <h4 className="feature-title mt-24">User Access</h4>
                    <p className="text-sm mb-0">Ensuring the highest level of security, users can securely access and manage only their own files, fostering a protected and personalized digital environment</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;

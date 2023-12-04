import React from "react";
import "../FileCSS/About.css"

const About = () => {
  return (
    <div className="about-container">
      <img
        className="about-image"
        src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=900&t=st=1701705140~exp=1701705740~hmac=a3a8256bf29d3a917a44dc1ebaa5578c7a2c41acf04c5fcfb638443b235bad37"
        alt="Business Concept"
      />
      <div className="about-text">
        <h2>About FileDrive</h2>
        <p>
          Welcome to FileDrive – a cutting-edge file management platform designed for secure and collaborative document control.
          Seamlessly upload, share, and organize files, enhancing productivity and ensuring efficient team workflows.
        </p>
        <p>
          This frontend is deployed on AWS EC2, and AWS S3 is utilized as a storage bucket for documents. The EC2 instance's deployment link is not provided due to fear of billing.
          However
        </p>
        <p>
          The backend, FileDrive API, is deployed on Render. The backend handles user registration, authentication, file uploads to AWS S3, and more.
          It ensures a secure and reliable infrastructure for the seamless functioning of the FileDrive platform.
        </p>
        <p>
          Explore the features, manage your files with ease, and experience the power of collaborative document control with FileDrive!
        </p>
        <p>
        <a href="https://www.linkedin.com/in/mohd-saif-khan-3b4979202/">
                <span className="screen-reader-text">LinkedIn</span>
              </a>
        </p>
      </div>
    </div>
  );
};

export default About;

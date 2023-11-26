import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../FileCSS/Navbar.css";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav>
      <div id="logo">
        <img
          src="https://img.freepik.com/free-photo/layout-icon-front-side_187299-39492.jpg?w=740&t=st=1699385274~exp=1699385874~hmac=ebe3b8cd1416f5b2bd53eb58cf1bb35a01d008df67e7cebc1b235dfe4859f8bf"
          alt=""
        />
      </div>
      {auth ?<ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Register">Sign Up</Link>
        </li>

        <li>
          <Link to="/Files">File Management</Link>
        </li>

        <li>
         
            <Link onClick={logout} to="/">
              Logout   ({auth})
            </Link>
          
        </li>
      </ul>
      :

      <ul className="nav-ul nav-right">
        <li>
          <Link to="/">Home </Link>
        </li>

        <li>
          <Link to="/Register">Sign Up</Link>
        </li>

        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
}
    </nav>
  );
};

export default Navbar;

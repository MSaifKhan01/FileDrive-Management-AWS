import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../FileCSS/Login.css'; 
import Swal from 'sweetalert2';
// import './Register.css'; 
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // let BaseUrl=`https://filemanagement-ikvm.onrender.com`
      // let BaseUrl=`http://localhost:3001`
      // this is latest Deploye Link which is below
      let BaseUrl=`https://filedrive-management.onrender.com`
      const response = await fetch(`${BaseUrl}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("res",response)

      const result = await response.json();
      console.log(result);
     

      if (result.token) {
        // Save the token to localStorage or sessionStorage
        localStorage.setItem('token', result.token);
        localStorage.setItem('userID', result.user._id);
        localStorage.setItem('user', result.user.name);
        localStorage.setItem('userRole', result.user.role);


        Swal.fire({
          title: result.msg,
      
          icon: 'success',
          
        });
        // Swal.fire(result.msg)
        navigate("/Files");
        // displayUserInfo(result.name);
      } else {
        Swal.fire({
          title: result.msg,
          icon: 'error',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Something went wrong',
        icon: 'error',
      });
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='LognDiv'>
      <h2 className='Lognheading'>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className='LognBtn'>Login</button>

      <Link to="/Register" className='linkForRgstr'> Create an Account </Link>
    </div>
  );
};

export default Login;

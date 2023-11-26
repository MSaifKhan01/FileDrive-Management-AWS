import React, { useState } from 'react';
import '../FileCSS/Register.css'; 
import {Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // let BaseUrl=`https://filemanagement-ikvm.onrender.com`
      // let BaseUrl=`http://localhost:3001`

      // this is latest Deploye Link which is below
      let BaseUrl=`https://filedrive-management.onrender.com`
      const response = await fetch(`${BaseUrl}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, mobile_No: mobileNo, password, age }),
      });

      const result = await response.json();
      Swal.fire({
        title: result.msg,
        icon: 'success',
      });
      navigate("/Login");
      // alert(result.msg);
    } catch (error) {
      Swal.fire({
        title: 'Something went wrong',
        icon: 'error',
      });
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='RgstrtDiv'>
      <h2 className='Signheading'>Register</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Mobile No" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
   
      <button onClick={handleRegister} className='rgstrBtn'>Register</button>
      <Link to="/Login" className='linkForLogin'> Log in Here</Link>
    </div>
  );
};

export default Register;

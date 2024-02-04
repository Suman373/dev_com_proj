import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeBG from "../home/HomeBG";
import axios from 'axios';

const SignUp = () => {

  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async()=>{
    try {
      if(!name || !email || !username || !password){
        alert("Fill all details");
      }
      const data = await axios.post('http://localhost:5000/auth/register',{
        name,email,username,password
      });
      if(!data?.data?.result){
        console.log("err");
      }
      console.log(data?.data);
      alert(data?.data?.message);
      localStorage.setItem('token',data?.data?.token);
      if(data?.data?.user?.completedDetails===false){
        navigate('/details');
      }else{
        navigate('/home');
      }
    } catch (err) {
      console.log(err);      
    }
  }


  return (
    <>
    
      <HomeBG />
      <div className="absolute font-devcombold text-3xl pt-10 w-full h-full flex flex-col items-center justify-center display-column">
        <span className="font-devcombold text-7xl text-custom-green p-5">
          Signup to Devcom
        </span>

        <div className="flex justify-center items-center p-5">
          <div className="rounded-md shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Name
              </label>
              <input
              required
              value={name}
              onChange={(e)=> setName(e.target.value)}
                type="text"
                className="mt-1 h-14 text-sm p-2 border rounded-md font-sm bg-transparent text-custom-green"
                style={{ width: "480px" }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Username
              </label>
              <input
              required
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
                type="text"
                className="mt-1 h-14 text-sm p-2 w-full border rounded-md font-sm bg-transparent text-custom-green"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <input
              required
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
                type="email"
                className="mt-1 h-14 text-sm w-full border rounded-md font-sm bg-transparent text-custom-green"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Password
              </label>
              <input
              required
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
                type="password"
                className="mt-1 h-14 text-sm p-2 w-full border rounded-md font-sm bg-transparent text-custom-green"
              />
            </div>
            <button
              onClick={registerUser}
              className="h-16 w-full mt-12 flex justify-center items-center shadow-custom bg-green-500 font-medium hover:cursor-pointer backdrop-blur-md"
            >
              Register
            </button>
          </div>
        </div>
        <span className="font-devcom text-sm text-gray-400">
          Already Registered ?{" "}
          <Link to="/login">
            <span className="text-white">Login Now</span>
          </Link>
        </span>
      </div>
    </>
  );
};

export default SignUp;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeBG from "../home/HomeBG";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      if (!email | !password) {
        alert("Fill all details");
      }
      const data = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      if (!data?.data?.result) {
        console.log("err");
      }
      console.log(data?.data);
      alert(data?.data?.message);
      localStorage.setItem("token", data?.data?.token);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HomeBG />
      <div className="absolute font-devcombold text-3xl pt-10 w-full h-full flex flex-col items-center justify-center display-column">
        <span className="font-devcombold text-7xl text-custom-green p-5">
          Login to Devcom
        </span>

        <div className="flex justify-center items-center p-5">
          <div className="rounded-md shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                className="mt-1 h-14 p-4 text-sm w-full border rounded-md font-sm bg-transparent text-custom-green"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                style={{ width: "480px" }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 h-14 text-sm p-4  w-full border rounded-md font-sm bg-transparent text-custom-green"
              />
            </div>
            <button
              onClick={loginUser}
              className="h-16 w-full mt-12 flex justify-center items-center shadow-custom bg-green-500 font-medium hover:cursor-pointer backdrop-blur-md"
            >
              Login
            </button>
          </div>
        </div>
        <span className="font-devcom text-sm text-gray-400">
          Not on DevCom yet?{" "}
          <Link to="/signup">
            <span className="text-white">Get Started Now</span>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Login;

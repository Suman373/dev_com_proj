import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeBG from "../home/HomeBG";

const SignUp = () => {
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
                type="text"
                className="mt-1 h-14 text-sm p-2 w-full border rounded-md font-sm bg-transparent text-custom-green"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                className="mt-1 h-14 text-sm w-full border rounded-md font-sm bg-transparent text-custom-green"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                className="mt-1 h-14 text-sm p-2 w-full border rounded-md font-sm bg-transparent text-custom-green"
              />
            </div>
            <Link
              to="/login"
              className="h-16 w-full mt-12 flex justify-center items-center shadow-custom bg-green-500 font-medium hover:cursor-pointer backdrop-blur-md"
            >
              Register
            </Link>
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

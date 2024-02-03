import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect, useRef } from "react";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

import NavBar from "../../constants/NavBar";
import ProfileBG from "../profile/ProfileBG";
import profileimg from "../../assets/profile.png";
import "../profile/profile.css";
import Select from "react-select";
import countries from "i18n-iso-countries";

import { DummyUser, DummyUserData } from "../../data/DummyUser";

const ProfileRegistration = () => {
  // NECESSARIES FOR CHART

  const chartRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  
  const [skillDataArray, setSkillDataArray] = useState([10, 12, 14, 16, 18]);
  const [chartHeight, setChartHeight] = useState();

  useEffect(() => {
    setTimeout(() => {
      setChartHeight(chartRef.current.height);
    }, 50);
  }, []);

  const findMaxInArray = (array) => {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    return max;
  };

  const [maxInDataArray, setMaxInDataArray] = useState(
    findMaxInArray(skillDataArray)
  );

  useEffect(() => {
    setMaxInDataArray(findMaxInArray(skillDataArray));
  }, [skillDataArray]);

  return (
    <div className="nav-blur noscroll w-screen h-screen overflow-y-auto">
      <ProfileBG />
      <NavBar currentPath={window.location.pathname} />
      <div className="noscroll absolute pt-20 w-full h-full flex flex-col items-center justify-start gap-20 font-devcom z-0 overflow-y-auto">
        <section className="profile-hero-1 w-full h-[calc(100vh-5rem)] flex-grow-0 flex-shrink-0 flex items-center">
          <div className="about-me w-1/4 h-full px-3 py-32 flex flex-col items-center gap-8">
            <div>
              <label className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                className="mt-1 h-14 w-100 text-sm p-2 border font-sm bg-transparent border-custom-green text-custom-green"
                style={{ width: "300px" }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Dropdown
              </label>
              <select className="mt-1 h-14 w-100 text-sm p-2 border font-sm bg-transparent border-custom-green text-custom-green"
                style={{ width: "300px" }}>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center ">
            <div className="h-full w-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40rem"
                height="40rem"
              >
                <circle
                  cx="20rem"
                  cy="20rem"
                  r="14.56rem"
                  stroke="#5BD45C"
                  opacity="0.4"
                  fill="none"
                />
                <circle
                  cx="20rem"
                  cy="20rem"
                  r="10.88rem"
                  stroke="#5BD45C"
                  opacity="0.6"
                  fill="none"
                />
                <circle
                  cx="20rem"
                  cy="20rem"
                  r="7.22rem"
                  stroke="#5BD45C"
                  opacity="1"
                  fill="none"
                />
                {/* <circle cx="20rem" cy="20rem" r="1px" stroke="#fff" opacity="1" fill="none"/> */}

                <image
                  href={profileimg}
                  x="10rem"
                  y="10rem"
                  width="20rem"
                  height="20rem"
                />
              </svg>
            </div>
          </div>
          <div className="w-1/4 h-full px-10 py-32 flex flex-col items-center gap-16">
            <div className="w-full flex flex-col gap-2">
              <p className="text-custom-green">Portfolio</p>
              <p
                className="text-left underline hover:cursor-pointer hover:text-sky-900"
                style={{ color: "#D9D9D9" }}
              >
                {DummyUserData.portfolio}
              </p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-custom-green">Hack Streak</p>
              <div className="grid grid-cols-11 gap-1">
                {Array(44)
                  .fill()
                  .map((_, index) => {
                    return (
                      <div key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height={26}
                          width={26}
                        >
                          <circle
                            cx="13"
                            cy="13"
                            r="10"
                            fill={`${index % 2 !== 0 ? "#5BD45C" : "#42403b"}`}
                          />
                        </svg>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileRegistration;

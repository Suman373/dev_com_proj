import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

// context
import UserState, { UserContext } from "../../contexts/UserState";

import axios from "axios";

import "./hackathons.css";

import { DummyHackathonsAndProjectsArray } from "../../data/DummyHackathonsAndProjects";

// bg
import HackathonsBG from "./HackathonsBG";

// svgs
import NavBar from "../../constants/NavBar";
import HackFooter from "../../components/hackathons/footer/HackFooter";
import HackathonOrProjectCard from "../../components/hackathons/cards/HackathonOrProjectCard";
import { RecentHackathonSVG } from "../../assets/ForHackathons";
import HackathonContent from "../../components/hackathons/content/HackathonContent";

const Hackathons = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  // NECESSARIES FOR FETCHING DATA

  const [hackathonsData, setHackathonsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/post/");
        const data = response.data;
        setHackathonsData(data.result);
        console(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [searchActive, setSearchActive] = useState(false);
  const [currentOpenHackathon, setCurrentOpenHackathon] = useState(-1);
  // const [leftPanelWidth, setLeftPanelWidth] = useState()

  const resetCurrentOpenHackathon = () => {
    setCurrentOpenHackathon(-1);
    setSearchActive(true);
  };

  return (
    <>
      <HackathonsBG />
      <NavBar currentPath={window.location.pathname} />
      <div className="bg-transparent absolute top-20 left-0 h-[calc(100vh-10rem)] px-10 pt-4 pb-4 w-full flex items-center justify-center gap-20">
        {searchActive && (
          <div
            id="hack2-left-panel"
            className="w-2/6 h-full px-2 flex flex-col justify-start items-start gap-16"
          >
            <p className="font-devcombold font-extrabold text-5xl xl:text-6xl text-custom-green">
              Recent Hackathons
            </p>
          </div>
        )}
        {currentOpenHackathon > -1 ? (
          <>
            <div className="w-4/6 h-full flex item-center">
              <HackathonContent
                currentOpenHackathon={currentOpenHackathon}
                resetCurrentOpenHackathon={resetCurrentOpenHackathon}
              />
            </div>
          </>
        ) : (
          <>
            <div
              id="hackathon-cards-section"
              className={`h-full bg-transparent grid ${
                searchActive ? "grid-cols-2 w-4/6" : "grid-cols-3 w-full"
              } gap-8 overflow-y-auto`}
            >
              {
                hackathonsData?.length > 0 ?
                hackathonsData?.map((item, index) => (
                    <HackathonOrProjectCard
                      cardDetails={item}
                      setSearchActive={setSearchActive}
                      setCurrentOpenHackathon={setCurrentOpenHackathon}
                      key={index}
                    />
                  ))
                  :
                  <>
                    <p>No posts are available</p>
                  </>
              }
            </div>
          </>
        )}
      </div>

      {currentOpenHackathon === -1 && (
        <HackFooter
          searchActive={searchActive}
          setSearchActive={setSearchActive}
        />
      )}
    </>
  );
};

export default Hackathons;

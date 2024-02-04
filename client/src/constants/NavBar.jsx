import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./navbar.css";

// svgs
import { NavDevCom } from "../assets/ForNavBar";

const NavBar = ({ currentPath }) => {
  const [displayLink, setDisplayLink] = useState();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function formatLink(link) {
    let upperCaseActive = true;
    let formattedLink = "";
    for (let i = 0; i < link.length; i++) {
      let letter = link[i];
      if (letter === " ") {
        upperCaseActive = true;
        continue;
      }
      if (upperCaseActive) {
        formattedLink += letter.toString().toUpperCase();
        upperCaseActive = false;
      } else {
        formattedLink += letter.toString();
      }
    }
    return formattedLink;
  }

  useEffect(() => {
    if (currentPath !== null && currentPath?.length > 0) {
      let actualPath = currentPath?.slice(1, currentPath.length);
      setDisplayLink(formatLink(actualPath));
    }
  }, [currentPath]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path) => {
    toggleMenu();
    navigate(path);
  };

  return (
    <div className="nav-blur w-full h-20 fixed top-0 left-0 flex justify-between px-12 items-center bg-transparent text-white font-devcom z-10">
      <div
        className="p-2 rounded-lg hover:cursor-pointer hover:bg-custom-hover"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.33337 4.33333L47.6667 47.6667M4.33337 47.6667L47.6667 4.33333"
              stroke="#D9D9D9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <div className="nav-ham z-0 w-10 h-4 border-t-2 border-b-2"></div>
        )}
      </div>
      <div className="absolute top-0 left-0 h-20 -z-10 w-full flex justify-center gap-2 items-center">
        <NavDevCom />
        {currentPath !== null && currentPath?.length > 0 && (
          <div className="flex gap-2 text-custom-green">
            <p className="text-3xl font-extrabold">/</p>
            <p className="underline text-custom-green text-3xl font-devcombold">
              {displayLink}
            </p>
          </div>
        )}
        {isMenuOpen && (
          <div className="menu-overlay fixed top-0 left-0 h-screen w-screen bg-black flex justify-center items-center">
            <div className="menu-content text-white flex-col text-3xl text-center">
              <p
                onClick={() => handleLinkClick("/home")}
                className={`cursor-pointer p-4 ${currentPath === '/home' ? 'active-link' : ''}`}
                
              >
                Home
              </p>
              <p
                onClick={() => handleLinkClick("/connect")}
                className={`cursor-pointer p-4 ${currentPath === '/connect' ? 'active-link' : ''}`}
              >
                Connect
              </p>
              <p
                onClick={() => handleLinkClick("/hackathons")}
                className={`cursor-pointer p-4 ${currentPath === '/hackathons' ? 'active-link' : ''}`}
              >
                Hackathons
              </p>
              <p
                onClick={() => handleLinkClick("/profile")}
                className={`cursor-pointer p-4 ${currentPath === '/profile' ? 'active-link' : ''}`}
              >
                Profile
              </p>
              <p
                onClick={() => handleLinkClick("/chat")}
                className={`cursor-pointer p-4 ${currentPath === '/chat' ? 'active-link' : ''}`}
              >
                Chat
              </p>
            </div>
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={toggleMenu}
            ></div>
          </div>
        )}
      </div>
      <Link
        className="relative w-10 h-10 rounded-full overflow-hidden hover:cursor-pointer hover:scale-110"
        to="/profile"
      >
        <img
          className="w-full h-full"
          src={
            "https://portal.bilardo.gov.tr/assets/pages/media/profile/profile_user.jpg"
          }
        />
      </Link>
    </div>
  );
};

export default NavBar;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./hackathonContent.css";

import { DummyHackathonsAndProjectsArray } from "../../../data/DummyHackathonsAndProjects";

import {
  HackathonContentArrowBg,
  HackathonContentOuterDivSVG,
} from "../../../assets/ForHackathonContent";
import { BlackArrowIconSVG } from "../../../assets/ForHackathonContent";
import {
  BehanceIconSvg,
  GitHubIconSvg,
} from "../../../assets/ForHackathonCard";

const HackathonContent = ({
  currentOpenHackathon,
  resetCurrentOpenHackathon,
}) => {
  const [cardDetails, setCardDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    DummyHackathonsAndProjectsArray.map((item) => {
      if (item.id === currentOpenHackathon) {
        setCardDetails(item);
      }
    });
  }, []);

  const requirements = cardDetails.requirement || [];
  const domains = cardDetails.domain || [];

  return (
    <div className="h-[503px] w-[808px] flex relative top-0 left-0 font-devcom">
      <HackathonContentOuterDivSVG />
      <div className="absolute top-0 left-0 flex items-center justify-center">
        <HackathonContentArrowBg />
        <div
          className="absolute top-6 left-5 hover:cursor-pointer"
          onClick={() => resetCurrentOpenHackathon()}
        >
          <BlackArrowIconSVG />
        </div>
      </div>
      <div className="absolute w-11/12 h-[108px] right-0 flex justify-between items-center px-10">
        <div className="flex flex-col justify-center">
          <span className="text-3xl text-white">
            {cardDetails?.type === "hackathon" ? (
              <>{cardDetails.hackathon}</>
            ) : (
              <>{cardDetails.project}</>
            )}
          </span>
          {cardDetails?.type === "hackathon" && (
            <span className="hackathon-date">
              {cardDetails.start} - {cardDetails.end}
            </span>
          )}
        </div>
        <div className="flex items-center justify-end gap-3">
          <div
            className="repo-link-bg h-12 w-12 rounded-full flex items-center justify-center hover:cursor-pointer"
            onClick={() => {}}
          >
            <GitHubIconSvg />
          </div>
          <div
            className="repo-link-bg h-12 w-12 rounded-full flex items-center justify-center hover:cursor-pointer"
            onClick={() => {}}
          >
            <BehanceIconSvg />
          </div>
        </div>
      </div>
      <div className="hackathon-desc-color border border-custom-green w-11/12 h-2/3 absolute right-0 bottom-[60px] px-5 py-3 flex flex-col gap-6">
        <p className="hackathon-desc-color h-24 w-full">{cardDetails.desc}</p>
        <div className="rules flex flex-col gap-1">
          <span className="font-devcombold font-bold">Rules</span>
          <ul className="">
            <li>
              Follow the
              <span className="pl-1 underline font-devcombold font-bold hover:cursor-pointer">
                Code of Conduct
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-devcombold font-bold">Entry Fee</span>
          <span className="">{cardDetails.entryFee}</span>
        </div>
        <div className="flex justify-start items-center gap-3">
          <span className="card-footer--tags px-2 bg rounded text-custom-green">
            {cardDetails.mode}
          </span>
          <span className="card-footer--tags px-2 bg rounded text-custom-green">
            {cardDetails.openStatus}
          </span>
          <span className="card-footer--tags px-2 bg rounded text-custom-green">
            {cardDetails.liveStatus}
          </span>
        </div>
      </div>
      <div className="absolute right-16 bottom-[13px] py-1 px-4 bg-custom-green rounded-md text-lg hover:cursor-pointer">
        Join now
      </div>
    </div>
  );
};

export default HackathonContent;

import {
  BehanceIconSvg,
  GitHubIconSvg,
} from "../../../assets/ForHackathonCard";
import moment from "moment";
import "./hackathonOrProjectCard.css";

const HackathonOrProjectCard = ({
  cardDetails,
  setSearchActive,
  setCurrentOpenHackathon,
}) => {
  const handleOpenHackathon = (hackathonId) => {
    setSearchActive(true);
    setCurrentOpenHackathon(hackathonId);
  };
  const startDateFormatted = moment(cardDetails?.startDate).format("MMM DD");
  const endDateFormatted = moment(cardDetails?.endDate).format("MMM DD");

  return (
    <div className="card-container flex flex-col justify-center items-center bg-zinc-800 font-devcom">
      <div className="card-header h-2/5 w-full p-4 flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-2xl text-white">
            {cardDetails?.hackathonName}
          </div>
          <div className="card-header--subheading text-xl">
            <span className="hackathon-date">
              {startDateFormatted} - {endDateFormatted}
            </span>
          </div>
          <div className="card-header--subheading text-xl">
            {cardDetails.hackathon}
          </div>
        </div>
        <div className="w-28 flex justify-between">
          <div className="w-12 h-12 flex justify-center items-center bg-custom-dark rounded-full">
            <GitHubIconSvg />
          </div>
          <div className="w-12 h-12 flex justify-center items-center bg-custom-dark rounded-full">
            <BehanceIconSvg />
          </div>
        </div>
      </div>

      <div className="card-middle h-3/6 w-full px-4 pb-2 flex flex-col justify-between items-center bg-custom-dark">
        <p className="text-zinc-600 w-full text-xl text-start">domain:</p>
        <div className="w-full flex justify-start items-center gap-6">
          {cardDetails?.domain?.slice(0,3)?.map((item, index) => (
            <div
              className="required-stack flex flex-start items-center px-1 rounded text-white"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>        <p className="text-zinc-600 w-full text-xl text-start">requirements:</p>
        <div className="w-full flex justify-start items-center gap-5">
          {cardDetails?.requirement?.slice(0,3)?.map((item, index) => (
            <div
              className="required-stack flex flex-start items-center px-1 rounded text-white"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      

      <div className="card-footer h-1/4 w-full px-4 pt-2 flex justify-between items-center">
        <div className="h-full flex items-center w-fit justify-start gap-3">
          <span className="card-footer--tags px-2 bg rounded text-custom-green">
            {cardDetails?.mode}
          </span>
          <span className="card-footer--tags px-2 bg rounded text-custom-green">
            {cardDetails?.status}
          </span>
        </div>
        <div
          className="hackathoncard-join-button px-3 py-2 flex items-center hover:cursor-pointer rounded-md text-custom-green text-lg"
          onClick={() => {
            handleOpenHackathon(cardDetails?._id);
          }}
        >
          Join Now
        </div>
      </div>
    </div>
  );
};

export default HackathonOrProjectCard;

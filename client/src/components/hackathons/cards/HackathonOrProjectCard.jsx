import { BehanceIconSvg, GitHubIconSvg } from "../../../assets/ForHackathonCard"

import './hackathonOrProjectCard.css'

const HackathonOrProjectCard = ({cardDetails}) => {
    return (
        <div 
            className="card-container flex flex-col justify-center items-center bg-zinc-800 font-devcom"
        >
            <div className="card-header h-2/5 w-full p-4 flex justify-between items-center">
                <div className="flex flex-col">
                    {
                        (cardDetails.type === 'hackathon') ? 
                            (
                                <>
                                    <div className="text-2xl text-white">
                                        {cardDetails.hackathon}
                                    </div>
                                    <div className="card-header--subheading text-xl">
                                        {cardDetails.start} - {cardDetails.end}
                                    </div>
                                </>
                            )
                        :
                            (
                                <>
                                    <div className="text-2xl text-white">
                                        {cardDetails.project}
                                    </div>
                                    <div className="card-header--subheading text-xl">
                                        {cardDetails.hackathon}
                                    </div>
                                </>
                            )
                    }
                </div>
                <div className="w-28 flex justify-between">
                    <div className="w-12 h-12 flex justify-center items-center bg-custom-dark rounded-full">
                        <GitHubIconSvg/>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center bg-custom-dark rounded-full">
                        <BehanceIconSvg/>
                    </div>

                </div>
            </div>

            <div className="card-middle h-2/6 w-full px-4 pb-2 flex flex-col justify-between items-center bg-custom-dark">
                
                {
                    (cardDetails.type === 'project') ?
                        (
                            <>
                                <p className="text-zinc-600 w-full text-xl text-start">
                                        requirements:
                                </p>
                                <div className="w-full flex justify-start items-center gap-5">
                                    {
                                        cardDetails.requirements.map((need, index) => (
                                            <div 
                                                className="required-stack flex flex-start items-center px-1 rounded text-white"
                                                key={index}
                                            >
                                                {need}
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        )
                    :
                        (
                            <>
                                <p className="text-zinc-600 w-full text-xl text-start">
                                    domain:
                                </p>
                                <div className="w-full flex justify-start items-center gap-5">
                                    {
                                        cardDetails.domains.map((domain, index) => (
                                            <div 
                                                className="required-stack flex flex-start items-center px-1 rounded text-white"
                                                key={index}
                                            >
                                                {domain}
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        )
                }
            </div>
            
            <div className="card-footer h-1/4 w-full px-4 flex justify-between items-center">
                <span className="card-footer--tags px-1 bg rounded text-custom-green">
                    {cardDetails.mode}
                </span>
            </div>
        </div>
    )
}

export default HackathonOrProjectCard
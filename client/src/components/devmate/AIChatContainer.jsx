import { LargeDevMateAiIconSVG, SendChatIconSVG } from "../../assets/ForDevMate"

const AIChatContainer = ({conversation}) => {
    return (
        <div className="w-full h-full rounded-lg p-2 flex flex-col justify-center items-center border border-red-500 text-white">
            <div className="h-[86%] w-full flex flex-col border border-blue-600">
                {
                    (conversation) ? 
                        <div>
                        
                        </div>
                    :
                        <div className="h-full w-full rounded-lg border border-blue-500 flex flex-col items-center justify-center">
                            <div className="h-3/4 w-full flex justify-center items-end py-10 border">
                                <div className="flex flex-col items-center gap-2">
                                    <LargeDevMateAiIconSVG/>
                                    <span className='text-lg'>What are your plans today?</span>
                                </div>
                            </div>
                            <div className="h-1/4 w-full flex justify-around items-center gap-12 py-10 px-20">
                                <div className="chat-initiate-box h-20 flex flex-1 flex-col p-2 justify-between items-center border rounded-lg px-2 py-1">
                                    <span className='w-full text-white'>Debug your code</span>
                                    <p className="custom-dark-gray text-sm">Paste your code and get the errors corrected.</p>
                                </div>
                                <div className="chat-initiate-box h-20 flex flex-1 flex-col justify-between items-center border rounded-lg px-2 py-1">
                                    <span className='w-full text-white'>Resume Builder</span>
                                    <p className="custom-dark-gray text-sm font-devcomthin">Enter your details and get your resume built in no time!</p>
                                </div>
                                <div className="chat-initiate-box h-20 flex flex-1 flex-col p-2 justify-between items-center border rounded-lg  px-2 py-1">
                                    <span className='w-full text-white'>Have a query?</span>
                                    <p className="custom-dark-gray text-sm">Ask here and I will do my best to have it resolved.</p>
                                </div>
                            </div>
                        </div>
                }
            </div>
            <div className="h-[14%] w-full border p-2">
                <div className="relative h-full w-full flex items-center">
                    <input 
                        className="devmate-chat-footer h-full w-full bg-transparent focus:outline-custom-green outline-none rounded-lg pl-5 pr-16 py-2" 
                        type="text"
                        placeholder="Write your query here..."
                    />
                    <div className="absolute right-2 h-10 w-10 border rounded-lg border-custom-green flex justify-center items-center cursor-pointer">
                        <SendChatIconSVG/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIChatContainer
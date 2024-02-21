import { DevMateAiIconSVG, LargeDevMateAiIconSVG, SendChatIconSVG } from "../../assets/ForDevMate"

const AIChatContainer = ({conversation, updateConversation}) => {

    const AIChatDP = ({type}) => {
        return (
            <div className="w-10 h-10 flex justify-center items-center border">
                {
                    (type === 'request') ?
                        <div className="h-12 w-12 p-1 border border-custom-green rounded-lg">
                            <DevMateAiIconSVG/>
                        </div>
                    :
                        <div className="h-12 w-12 p-1 border border-custom-gray rounded-lg">
                        
                        </div>
                }
            </div>
        )
    }

    return (
        <div className="w-full h-full rounded-lg p-2 flex flex-col justify-center items-center border border-red-500 text-white">
            <div className="h-[86%] w-full flex flex-col">
                {
                    (conversation) ? 
                        <div className="h-full w-full border border-blue-600 flex flex-col justify-end items-center p-2">
                            <div className="h-full w-full py-2 px-4 border flex flex-col gap-2">
                                {
                                    conversation?.chats?.map((conv, index) => {

                                        return (
                                            <>
                                                {   
                                                    (conv.request) &&
                                                        <div className="w-full p-2 flex justify-between items-start gap-2">
                                                            <AIChatDP type={'request'}/>
                                                            <p>{conv.request}</p>
                                                        </div>
                                                }
                                                {   
                                                    (conv.response) && 
                                                        <div className="w-full p-2 flex justify-between items-start gap-2">
                                                            <AIChatDP type={'response'}/>
                                                            <p>{conv.response}</p>
                                                        </div>   
                                                }
                                                
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    :
                        <div className="h-full w-full rounded-lg flex flex-col items-center justify-center">
                            <div className="h-3/4 w-full flex justify-center items-end py-10">
                                <div className="flex flex-col items-center gap-2">
                                    <LargeDevMateAiIconSVG/>
                                    <span className='text-lg'>What are your plans today?</span>
                                </div>
                            </div>
                            <div className="h-1/4 w-full flex justify-around items-center gap-12 py-10 px-20">
                                <div className="chat-initiate-box h-20 flex flex-1 flex-col p-2 justify-between items-center border rounded-lg px-2 py-1 cursor-pointer">
                                    <span className='w-full text-white'>Debug your code</span>
                                    <p className="custom-dark-gray text-sm">Paste your code and get the errors corrected.</p>
                                </div>
                                <div className="chat-initiate-box h-20 flex flex-1 flex-col justify-between items-center border rounded-lg px-2 py-1 cursor-pointer">
                                    <span className='w-full text-white'>Resume Builder</span>
                                    <p className="custom-dark-gray text-sm font-devcomthin">Enter your details and get your resume built in no time!</p>
                                </div>
                                <div className="chat-initiate-box h-20 flex flex-1 flex-col p-2 justify-between items-center border rounded-lg  px-2 py-1 cursor-pointer">
                                    <span className='w-full text-white'>Have a query?</span>
                                    <p className="custom-dark-gray text-sm">Ask here and I will do my best to have it resolved.</p>
                                </div>
                            </div>
                        </div>
                }
            </div>
            <div className="h-[14%] w-full p-2">
                <div className="relative h-full w-full flex items-center">
                    <input 
                        className="devmate-chat-footer h-full w-full bg-transparent focus:outline-gray-600 outline-none rounded-lg pl-5 pr-16 py-2" 
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
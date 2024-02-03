import './hackFooter.css'

const HackFooter = ({slashPromptOpen}) => {

    const promptArray = [
        {
            header: '/domain',
            desc: 'find hackathons on your domain'
        },
        {
            header: '/mode',
            desc: 'to choose mode of hackathon'
        },
        {
            header: '/open',
            desc: 'registration open'
        },
        {
            header: '/closed',
            desc: 'registration closed'
        },
        {
            header: '/time',
            desc: 'this week, this month, next month etc.'
        },
        {
            header: '/help',
            desc: 'dor any queries or help you need'
        }
    ]

    return (
        <>
            {
                (slashPromptOpen) && 
                    (
                        <div className="slash-prompt-box min-w-fit absolute left-10 bottom-24 z-10 h-56 px-6 py-4 bg-zinc-800 flex flex-col justify-evenly items-center font-devcom">
                            {
                                promptArray.map((option, index) => (
                                    <div className="min-w-full flex justify-between items-center" key={index}>
                                        <span 
                                            className="w-1/3 text-custom-green text-start text-xl"
                                        >
                                            {option.header}
                                        </span>
                                        <span 
                                            className="w-2/3 whitespace-nowrap text-zinc-500 text-sm font-thin text-start"
                                        >
                                            {option.desc}
                                        </span>
                                    </div>
                                ))
                            } 
                        </div>
                    )
            }
            <div className="absolute left-0 bottom-0 z-10 w-full h-24 px-10 flex justify-between items-center gap-5 bg-transparent">
                <input 
                    className='h-16 w-full pl-20 pr-20 py-2 border-2 border-custom-green focus:outline-none bg-custom-dark text-white font-devcom text-2xl' 
                    autoFocus
                    placeholder='type "/" to see the menu'
                />
                <span className="absolute left-[4.5rem] font-devcom font-extrabold text-3xl text-custom-green">
                    /
                </span>
                <div className='h-16 w-1/5 flex justify-center items-center shadow-custom text-white text-3xl font-devcom hover:cursor-pointer'>
                    search
                </div>
            </div>
        </>    
    )
}

export default HackFooter
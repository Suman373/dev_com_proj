import './sentMessage.css'

const SentMessage = ({message}) => {
    return (
        <div className='sent-message-bg faint-white rounded-lg pl-4 pr-6 pt-2 pb-5 h-fit min-w-20 max-w-96 left-4 text-sm text-start relative font-devcomthin'>
            {message.message}
            <span className='absolute bottom-1 right-2 font-devcomthin text-xs faint-gray'>
                {message.timestamp}
            </span>
        </div>
    )
}

export default SentMessage
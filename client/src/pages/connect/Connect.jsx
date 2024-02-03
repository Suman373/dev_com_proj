
import NavBar from '../../constants/NavBar'
import ConnectBG from './ConnectBG'

import CollabCard from '../../components/collab/CollabCard'

import './connect.css'
import { DummCollabUsersArray } from '../../data/DummyCollabUsers'

const Connect = () => {
    return (
        <>
            <ConnectBG/>
            <NavBar currentPath={window.location.pathname}/>
            <div className="bg-transparent absolute top-20 left-0 h-[calc(100vh-10rem)] px-10 pt-4 pb-4 w-full flex items-center justify-center">
    
                <div id='hack2-left-panel' className='w-2/6 h-full px-2 flex flex-col justify-start items-start gap-16'> 
                    <p className='font-devcombold font-extrabold text-5xl xl:text-6xl text-custom-green px-2'>
                        Connect With People
                    </p>
                </div>
                        
                <div id='collab-cards-section' className={`noscroll h-full bg-transparent grid grid-cols-3  w-4/6 gap-8 gap-y-1 overflow-y-auto`}>
                    {
                        DummCollabUsersArray.map((item, index) => (
                            <CollabCard cardDetails={item} key={index}/>
                        ))   
                    }
                </div>
            </div>
           
            {/* <HackFooter searchActive={searchActive} setSearchActive={setSearchActive}/> */}
        </>
    )
}   

export default Connect
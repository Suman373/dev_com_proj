import { createContext, useContext, useState } from "react"

export const UserContext = createContext(null)

const UserState = (props) => {
    const blankUser = {
        name: '',
        dp: ''
    }

    const [user, setUser] = useState(blankUser)
    const [loggedIn, setLoggedIn] = useState(false)

    const updateUser = (newUser) => {
        setUser({
            name: newUser.name,
            dp: newUser.dp
        })
        setLoggedIn(true)
        console.log('check')
    } 

    const logoutUser = () => {
        setUser(blankUser)
        setLoggedIn(false)
    }

    return (
        <UserContext.Provider value={{user, updateUser, logoutUser, loggedIn}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
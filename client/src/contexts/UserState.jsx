import { createContext, useContext, useEffect, useState } from "react"

export const UserContext = createContext(null)

const UserState = (props) => {
    const blankUser = {
        name: '',
        dp: ''
    }

    const [user, setUser] = useState()
    const [loggedIn, setLoggedIn] = useState(false)

    const getInitialUser = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        // console.log(user)
        if (typeof(user) === 'object') {
            setUser({...user})
            setLoggedIn(true)
        } else {
            setUser({...blankUser})
        }
    }

    useEffect(() => {
        getInitialUser() 
    }, [])

    const updateUser = (newUser) => {
        setUser({...newUser})
        setLoggedIn(true)
        localStorage.setItem('user', JSON.stringify(newUser))
        // console.log('check')
    } 

    const logoutUser = () => {
        setUser({...blankUser})
        localStorage.removeItem('user')
        setLoggedIn(false)
    }

    return (
        <UserContext.Provider value={{user, updateUser, logoutUser, loggedIn}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
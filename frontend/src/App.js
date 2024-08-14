import React, {createContext, useState} from 'react'
import './App.css'
import './Api'
import NavBar from './Navbar'
import Router from './Routes'
import TokenContext from './User/TokenContext'

function App() {
const [token, setToken] = useState('')
const [currUser, setCurrUser] = useState('')

return (
        <TokenContext.Provider value={{token, setToken}}>
         <div className='App'>
               <NavBar />
          </div>
        </TokenContext.Provider>
    )
}

export default App
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Login from './Components/Auth/Login'
import CreateAccount from './Components/Auth/CreateAccount'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'


const App = () => {

  return (
    <div>
      {/* <Header /> */}
      {/* <Login /> */}
      <CreateAccount />
      <Routes>
        <Route path='/createAccount' element={<CreateAccount />}/>
        <Route path='/loginAccount' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App

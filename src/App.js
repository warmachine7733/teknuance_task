import React from 'react'
import SideBar from './components/layouts/sideBar/index'
import Header from './components/layouts/header'
import UserDetails from './components/layouts/body/index'
import './App.css'

let App = props => {
  return (
    <div className='container'>
      <SideBar />
      <Header />
      <UserDetails />
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Chat from './Chat'

function WithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Chat />
    </>
  )
}

export default WithNavbar
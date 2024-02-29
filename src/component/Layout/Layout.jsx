import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Foooter from '../Footer/Foooter'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
     <Foooter />
    </>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../components/navbar'
const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <ToastContainer position='top-right' autoClose ={5000} />
    </>
  )
}

export default MainLayout
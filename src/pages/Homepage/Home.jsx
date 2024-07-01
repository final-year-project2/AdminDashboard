import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'

const Home = () => {
  return (
    <div className='flex'>
        <div  className='flex-2'>
            <SideBar/>
        </div>

        <div className='flex-1'>
            <NavBar/>
            home page
        </div>
    </div>
  )
}

export default Home


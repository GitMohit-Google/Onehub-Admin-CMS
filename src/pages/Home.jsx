import React from 'react'
import { MainSection, NavigationBar, SideNavbar } from '../components'

const Home = () => {
  return (
    <div className='overflow-auto flex flex-row'>
      <SideNavbar/>
      <div className='flex flex-col w-full'>
        <NavigationBar/>
        <MainSection/>
      </div>
    </div>
  )
}

export default Home

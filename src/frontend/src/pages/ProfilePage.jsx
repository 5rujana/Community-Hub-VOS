import React from 'react'
import NavBar from '../components/NavBar'
import Profile from '../components/profile'
import Recommended from '../components/recommended'
import Card from '../components/CARD'
import CreatePost from '../components/post'

const ProfilePage = () => {
  return (
    <>
    <NavBar />
    <Profile />
    <div className='flex flex-row'>
        <Recommended />
        <Recommended />      
    </div>
    
    
    </>
  )
}

export default ProfilePage
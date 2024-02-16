import React from 'react'
import "./home.css"
import LeftPane from '../../components/LeftPane/LeftPane'
import PostPane from '../../components/PostPane/PostPane'
import RightPane from '../../components/RightPane/RightPane'
import NavBar from '../../components/Navigation/NavBar'


export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="bottomContainer">
        <LeftPane/>
        <PostPane/>
        <RightPane/>
      </div>
    </>
  )
}

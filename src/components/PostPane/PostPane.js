import React from 'react'
import AddPost from '../AddPost/AddPost'
import Post from '../Post/Post'
import "./postPane.css"

export default function PostPane() {
  return (
    <div className='postPaneBox'>
      <AddPost/>
      <Post/>
    </div>
  )
}

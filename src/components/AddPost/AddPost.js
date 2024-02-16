import { AddLocation, InsertPhoto, LiveTv, LocalOffer } from '@mui/icons-material'
import React from 'react'
import './addPost.css'

export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="/images/Profile/11.jpg" alt="" className="addPostPic" />
                <input placeholder='Whats in your mind' type="text" className="addPostInput" />
            </div>
            <hr className='postHr'/>
            <div className="addPostBottom">
                <div className="addPostOptions">
                    <div className="addPostOption">
                      <InsertPhoto htmlColor='orange' className='addPhoto' />
                      <span className="addPostOptionText">Add Photo/Video</span>
                    </div>
                    <div className="addPostOption">
                      <AddLocation htmlColor='red' className='addPhoto' />
                      <span className="addPostOptionText">Add Location</span>
                    </div>
                    <div className="addPostOption">
                      <LocalOffer htmlColor='blue' className='addPhoto' />
                      <span className="addPostOptionText">Add Tag</span>
                    </div>
                    <div className="addPostOption">
                      <LiveTv htmlColor='tomato' className='addPhoto' />
                      <span className="addPostOptionText">Go Live</span>
                    </div>
                </div>
                <button className="PostButton">Post</button>
            </div>
        </div>
    </div>
  )
}

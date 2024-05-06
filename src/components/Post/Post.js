import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className="allPosts">
        
        <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/images/Profile/13.jpg" alt="" className="postImage" />
                    <span className="postUserName">Kate Jonson</span>
                    <span className="postTime">15 mins ago</span>
                </div>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    DJ Kate...
                </div>
                <img src="/images/Post/05.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/Heart.png" alt="" className="reactionPic" />
                    <img src="/images/Like.png" alt="" className="reactionPic" />
                    <span className="likeCount">Iraj and 2K others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentConunt">5k Comments</span>
                </div>
            </div>
        </div>
        </div>
        
        <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/images/Profile/01.jpg" alt="" className="postImage" />
                    <span className="postUserName">Tom Cruise</span>
                    <span className="postTime">2 Weeks ago</span>
                </div>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    Real Heros
                </div>
                <img src="/images/Post/14.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/Heart.png" alt="" className="reactionPic" />
                    <img src="/images/Like.png" alt="" className="reactionPic" />
                    <span className="likeCount">Johnny Depp and 78K others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentConunt">6K Comments</span>
                </div>
            </div>
        </div>
        </div>

        <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/images/Profile/12.jpg" alt="" className="postImage" />
                    <span className="postUserName">Elisabeth Swon</span>
                    <span className="postTime">5 mins ago</span>
                </div>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    My favourite...
                </div>
                <img src="/images/Post/01.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    {/* <img src="/images/Haha.png" alt="" className="reactionPic" /> */}
                    <img src="/images/Like.png" alt="" className="reactionPic" />
                    <img src="/images/Heart.png" alt="" className="reactionPic" />
                    <span className="likeCount">Elon Musk and 225 others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentConunt">1K Comments</span>
                </div>
            </div>
        </div>
        </div>

        <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/images/Profile/07.jpg" alt="" className="postImage" />
                    <span className="postUserName">Tommy Hanseen</span>
                    <span className="postTime">8 hours ago</span>
                </div>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    The Time is Gold
                </div>
                <img src="/images/Post/12.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    {/* <img src="/images/Haha.png" alt="" className="reactionPic" /> */}
                    <img src="/images/Heart.png" alt="" className="reactionPic" />
                    <img src="/images/Like.png" alt="" className="reactionPic" />
                    <span className="likeCount">Kevin Hanseen and 2M others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentConunt">15K Comments</span>
                </div>
            </div>
        </div>
        </div>

        <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/images/Profile/14.jpg" alt="" className="postImage" />
                    <span className="postUserName">Jessica Love</span>
                    <span className="postTime">1 hour ago</span>
                </div>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    The Last of Us
                </div>
                <img src="/images/Post/07.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/Haha.png" alt="" className="reactionPic" />
                    <img src="/images/Like.png" alt="" className="reactionPic" />
                    <img src="/images/Heart.png" alt="" className="reactionPic" />
                    <span className="likeCount">Bill Gates and 22K others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentConunt">15K Comments</span>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

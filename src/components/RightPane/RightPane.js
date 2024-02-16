import React from 'react'
import "./rightPane.css"

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsered">Sponsored</span>
          <img src="/images/DHL.jpg" alt="" className="adImage" />
          <span className="adtext">
            Order Your food with DHL Delivery Service.Contact Us Now....!
          </span>
        </div>
        <div className="birthDayContainer">
          <img src="/images/BirthDay.png" alt="" className="birthDayImage" />
          <span className="birthDayText"><b>Kasun Kalhara</b> and <b>two others</b> having birthday tomorrow.</span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/Profile/01.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Tom Cruise</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/Profile/02.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Jess Benz</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/Profile/03.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Elizebeth Knadal</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/Profile/04.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Elsa Afridi</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/Profile/05.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Umar Gul</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/Profile/06.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Salter Vitori</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/Profile/07.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Tommy Hanseen</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/Profile/08.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Priya Kholi</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/Profile/09.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Rebeca Bidden</span>
          </li>
        </div>
      </div>
    </div>
  )
}

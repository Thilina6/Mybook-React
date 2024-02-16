import { AddShoppingCart, Build, CalendarMonth, Flag, Group, MarkUnreadChatAlt, Newspaper, RssFeed, SportsEsports, WorkOutline } from '@mui/icons-material'
import React from 'react'
import "./leftPane.css"

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
        <div className="leftPaneContainer">
            <div className="leftPainMenu">
                <li className="leftPaneMenuItem">
                    <MarkUnreadChatAlt/>
                    <span className="leftPaneMenuText">Messages</span>
                </li>
                <li className="leftPaneMenuItem">
                    <Group/>
                    <span className="leftPaneMenuText">Groups</span>
                </li>
                <li className="leftPaneMenuItem">
                    <RssFeed/>
                    <span className="leftPaneMenuText">Feed</span>
                </li>
                <li className="leftPaneMenuItem">
                    <Flag/>
                    <span className="leftPaneMenuText">Pages</span>
                </li>
                <li className="leftPaneMenuItem">
                    <CalendarMonth/>
                    <span className="leftPaneMenuText">Events</span>
                </li>
                <li className="leftPaneMenuItem">
                    <Build/>
                    <span className="leftPaneMenuText">Settings</span>
                </li>
                <li className="leftPaneMenuItem">
                    <SportsEsports/>
                    <span className="leftPaneMenuText">Games</span>
                </li>
                <li className="leftPaneMenuItem">
                    <Newspaper/>
                    <span className="leftPaneMenuText">News</span>
                </li>
                <li className="leftPaneMenuItem">
                    <WorkOutline/>
                    <span className="leftPaneMenuText">Jobs</span>
                </li>
                <li className="leftPaneMenuItem">
                    <AddShoppingCart/>
                    <span className="leftPaneMenuText">Market</span>
                </li>
                <hr/>
                <div className="pageYouLiked">
                    <h3>Page you Liked</h3>
                </div>
                <div className="pageList">
                <li className="pageListItem">
                    <img src="/images/Groups/Benz.jpg" alt="" className="pagePic" />
                    <span className="PageName">Mercedes Benz</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/Groups/Audi.jpg" alt="" className="pagePic" />
                    <span className="PageName">Audi</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/Groups/Bently.jpg" alt="" className="pagePic" />
                    <span className="PageName">Bently</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/Groups/BMW.jpg" alt="" className="pagePic" />
                    <span className="PageName">BMW</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/Groups/Ferrari.jpg" alt="" className="pagePic" />
                    <span className="PageName">Ferrari</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/Groups/Ford.jpg" alt="" className="pagePic" />
                    <span className="PageName">Ford</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/Groups/Jaguar.jpg" alt="" className="pagePic" />
                    <span className="PageName">Jaguar</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/Groups/Lamborgini.jpg" alt="" className="pagePic" />
                    <span className="PageName">Lamborgini</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/Groups/Maserati.jpg" alt="" className="pagePic" />
                    <span className="PageName">Maserati</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/Groups/Porsche.jpg" alt="" className="pagePic" />
                    <span className="PageName">Porsche</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/Groups/RollsRoyes.jpg" alt="" className="pagePic" />
                    <span className="PageName">RollsRoyes</span>
                </li>
                <li className="pageListItem">
                    <img src="/images/Groups/VolksWagon.jpg" alt="" className="pagePic" />
                    <span className="PageName">VolksWagon</span>
                </li>
                </div>
            </div>
        </div>
    </div>
  )
}

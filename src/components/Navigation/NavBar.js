import React from 'react'
import "./navBar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className="logo">mybook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search for your friends' className="searchInput" />
            </div>
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLink">HomePage</span>
                <span className="navBarLink">Profile</span>
            </div>
            <div className="navBarIcons">
                <div className="navBarIcon">
                    <PersonIcon/>
                    <span className="iconTag">3</span>
                </div>
                <div className="navBarIcon">
                    <MessageIcon/>
                    <span className="iconTag">15</span>
                </div>
                <div className="navBarIcon">
                    <SettingsIcon/>
                    <span className="iconTag">2</span>
                </div>
            </div>
            <div className="pic">
                <img src="/images/Profile/11.jpg" alt="" className="profilePicImg" />
            </div>
        </div>
    </div>
  )
}

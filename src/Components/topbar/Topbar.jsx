import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language, Settings} from '@mui/icons-material';

export default function Topbar() {
  return (
    <>
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span><img src="../../assets/redlogotransblue.png" className='logo' alt="" /></span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNone className='icon'/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language className='icon'/>
            <span className="topbarIconBadge">4</span>
          </div>
          <div className="topbarIconContainer">
            <Settings className='icon'/>
          </div>
          <img className='topbarPfp' src="../../assets/pfp/image.png" alt="" />
        </div>
      </div>
    </div>

    </>
  )
  
}

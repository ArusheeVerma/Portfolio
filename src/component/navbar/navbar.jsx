// import React from 'react'
import "./navbar.scss"
//import {} from '@material-ui/icons'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Brilliance
          </a>
          <div className="itemContainer">
            <DeveloperBoardIcon className="icon"/>
            <span>+9999XXXXX</span>
          </div>
        </div>
        <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
        </div>
      </div>
    </div>
  )
}

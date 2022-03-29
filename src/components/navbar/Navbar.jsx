// Material UI icon
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";


import "./navbar.scss"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  
  const { darkMode,dispatch } = useContext(DarkModeContext);


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
          </div>
          <div className="item" onClick={()=>{dispatch({type:"TOGGLE"})}}>
            {darkMode ? <LightModeOutlinedIcon className="icon" /> : <DarkModeOutlinedIcon className="icon" />}            
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div> 
          <div className="item">
            <img src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.6435-9/60469582_869766273367189_6564962004195344384_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yBr18QrGNkkAX-mEUNJ&_nc_ht=scontent.fsgn5-13.fna&oh=00_AT8_yUwUxZyz2De27pJTeVqVzRElVO3ZNMUYt86AqwSxzA&oe=625F0563" alt="" 
              className="avatar"
            />
          </div>         
        </div>
      </div>
    </div>
  )
}

export default Navbar
// Material UI icon
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
// route
import { Link } from "react-router-dom";

import "./sidebar.scss"
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">        
        <Link to="/" className="logo" >TedAdmin</Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">main</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>dashboard</span>
          </li>
          <p className="title">list</p>
          <Link to="/users" className='link'>
            <li>
                <AccountCircleIcon className='icon'/>
                <span>users</span>
            </li>
          </Link>     
          <Link  to="/products" className='link'>
            <li>
              <InventoryIcon className='icon'/>
              <span>products</span>
            </li>          
          </Link>       
          <li>
            <LocalShippingIcon className='icon'/>
            <span>delivery</span>
          </li>
          <p className="title">useful</p>
          <li>
            <InsertChartIcon className='icon'/>
            <span>stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon'/>
            <span>notifications</span>
          </li>
          <p className="title">service</p>
          <li>
            <SettingsSystemDaydreamIcon className='icon'/>
            <span>system health</span>
          </li>
          <li>
            <PsychologyIcon className='icon'/>
            <span>log</span>
          </li>
          <li>
            <SettingsApplicationsIcon className='icon'/>
            <span>setting</span>
          </li>      
          <p className="title">user</p>    
          <li>
            <AccountBoxIcon className='icon'/>
            <span>profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p className="title">Theme</p>
        <div className="colorOptions">
          <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
          <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
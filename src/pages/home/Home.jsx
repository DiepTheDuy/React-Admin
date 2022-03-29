import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"

import "./home.scss"
import {userData} from '../../dummyData'
import {itemData} from '../../dummyData'
import Table from "../../components/table/Table"

const Home = () => {
  return (  
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="widgets">
              <Widget type="user" status="positive"/>
              <Widget type="order" status="negative"/>
              <Widget type="earning" status="negative"/>
              <Widget type="balance" status="positive"/>
            </div>
            <div className="charts">
              <Featured/>
              <Chart title="user anylytics" data={userData} dataKey="Active User" grid aspect={2.35/1}/>
            </div>
            <div className="listContainer">
              <div className="listTitle">latest transactions</div>
              < Table datas={itemData} />
            </div>
        </div>
    </div>
  )
}

export default Home
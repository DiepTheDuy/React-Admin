import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"

import {userData} from '../../dummyData'
import {itemData} from '../../dummyData'
import "./single.scss"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />    
        <div className="top">
          <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.6435-9/60469582_869766273367189_6564962004195344384_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yBr18QrGNkkAX-mEUNJ&_nc_ht=scontent.fsgn5-13.fna&oh=00_AT8_yUwUxZyz2De27pJTeVqVzRElVO3ZNMUYt86AqwSxzA&oe=625F0563"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">The Duy</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">dieptheduy2000@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    222 Lê Văn Khương, Phường Thới An
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Viet Nam</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title="user anylytics" data={userData} dataKey="Active User" grid aspect={3.75/1}/>
          </div>
        </div>
        <div className="bottom">
          <h2 className="title">Last Transactions</h2>
          < Table datas={itemData}/>
        </div>  
      </div>
    </div>
  )
}

export default Single
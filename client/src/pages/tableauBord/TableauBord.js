import React from 'react';
import MainDash from './MainDash/MainDash';
import RightSide from './RightSide/RightSide';
import SideBar from './SideBar';
import "./tableauBord.css";

const TableauBord = () => {
  return (
    <div style={{backgroundColor:"#f1f2f6",padding: "130px 0 15px 0"}}>
    <div className='dashbord'>
      <div className='AppGlass'>
        <SideBar />
        <MainDash/>
        <RightSide/>
      </div>
      <div id="temperature"></div>
      <div id="humidity"></div>

      </div>
    </div>
  )
}

export default TableauBord

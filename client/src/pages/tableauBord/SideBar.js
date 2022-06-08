import React, { useState } from 'react';
import './SideBar.css'
import { SidebarData } from './Data.js/Data';
import  {UilSignOutAlt,UilBars} from '@iconscout/react-unicons';

import  {motion} from 'framer-motion'




const SideBar = () => {

    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(true);

    const sidebarVaiants = {
        true: {
             left:'0'
        }, 
        false: {
            left: '-60 %'
        }        
       
    }




    return (
      <>

            <div className="bars" style={expanded ?
                { left: '60%' } : { left: "5%" }}
            
            ><UilBars /></div>

            <motion.div className='Sidebar' variants={sidebarVaiants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
                
            >
           { /* logo */}
          <div className='logo'>       
             <span>
                Agro<span>Smart</span>
              </span>
          </div>
          
              {/*menu */}
              <div className='Menu'>
                  
                  {
                      SidebarData.map((item, index)=>{
                          return (
                              <div className={selected === index ? 'MenuItem active' : 'MenuItem'} key={index}
                                  onClick={() =>setSelected(index)}
                              >
                                  <item.icon />
                                  <span>{item.heading}</span>
                              </div>
                              
                        )
                      })}                     
              
              <div className='MenuItem'>
                  <UilSignOutAlt />

              </div>
          </div>
      </motion.div>
      </>
  )
}

export default SideBar

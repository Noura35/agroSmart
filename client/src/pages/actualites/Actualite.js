import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Trends from '../../components/Trends';
import { getUser } from '../../redux/actions/user.action';
import Login2 from '../login/Login2';
import FriendsHint from '../profile/FriendsHint';
import NewPostForm from './posts/NewPostForm';
import Thread from './Thread'

const Actualite = () => {

    const auth = useSelector(state => state.auth);
  
    const user = {
    id:auth.user.id,
    isConnected: auth.isConnected,
  }
  
  const dispatch = useDispatch();
  
  useEffect(async ()=>{
   await dispatch(getUser(user.id))},[])

  return (
    <section className="container">
      
      <div className='home' style={{ marginTop: "110px" }}>        
      <div></div>
        <div className='main1'>

          <div className='home-header'>
            {
              user.isConnected ? (<NewPostForm />) : (<Login2/>)
            }
            
          </div>

          <Thread />
        </div>
         <div className='right-side'>
              <div className='right-side-container'>
                  <Trends />

            {user.isConnected && <FriendsHint/> }

              </div>
          </div>
     

    </div>
    
    </section>
         
  )
}

export default Actualite

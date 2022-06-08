import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions/user.action';
import UpdateProfile from './UpdateProfile';
import "./profil.css"

const Profile = () => {
  
  const auth = useSelector(state => state.auth);


  const user = {
    id:auth.user.id,
    isConnected: auth.isConnected,
    role: auth.user.role,
    nom:auth.user.nom
  }

  const dispatch = useDispatch();
  useEffect(async ()=>{
   await dispatch(getUser(user.id))
  },[])

  return (
        <section className="container">
        <div className="profil-page" style={{margin:"100px 50px"}}>
        <UpdateProfile user={user}/>
      </div> 
  </section>    
  )
}

export default Profile;

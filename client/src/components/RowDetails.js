import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeleteUser } from '../redux/actions/user.action';
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
import { IconContext } from "react-icons";
import '../pages/admin/admin.css';


function RowDetails({ nom, prenom, email, role, bio,id }) {
   const dispatch =  useDispatch()
    const DeleteHandler = (id)=>{
      dispatch(DeleteUser(id))
    }
 
  return (
    <tr>
    <td>{role}</td>
    <th>{nom}</th>
    <td>{prenom}</td>
    <td>{email}</td>
    <td>{bio}</td>
    <td className="gap__actions">
      <Link to={`/profil/${id}`} className="text-white">
          <span style={{marginRight:"20px"}}>
              <IconContext.Provider value={{ size: 22, color:"#b2bec3"}}>
              <AiFillEdit />
              </IconContext.Provider>
           </span>
      </Link>

        <span onClick={() => DeleteHandler(id)}>
            <IconContext.Provider value={{ size: 22, color:"#ff4757"}}>
            <AiFillDelete />
            </IconContext.Provider>
        </span>
    </td>
  </tr>
  )
}

export default RowDetails


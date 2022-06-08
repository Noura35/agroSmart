import React from 'react'
//import {TrashIcon } from "@heroicons/react/outline"
import { Delete } from '../pages/irrigation/action/images'
const Image = ({id, title, image, path,setImage }) => {

    const trash={
        color: "red",
        width: "20px",
        cursor:"pointer"
    
    }
    const head = {
        display: "flex",
        justifyContent:"space-between",
    }


    const DeleteHandler = (id) => {
        Delete(id, setImage);
        
    }
  return (
      <div className='col-md-4 mt-4'>
          <div className='img-thumbnail' style={head}>
              {
             /*  <em>{title}</em><TrashIcon style={trash} onClick={()=>DeleteHandler(id)}/> */     
        } 

          </div>
          <img  src={path} alt={title} className='rounded img-thumbnail' width="100%" height="70px" />
    </div>
  )
}

export default Image

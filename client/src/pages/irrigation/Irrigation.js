import React, { useEffect, useState } from 'react'
import './irrigation.css'
import {GoHeart} from 'react-icons/go';
//import { SwitchVerticalIcon } from '@heroicons/react/outline'
import { Add, FindAll } from './action/images';
import Image from '../../components/Image';
import  { useForm } from 'react-hook-form'
import  classname from 'classnames'


const Irrigation = () => {
  const desc = {
    width: "700px",
    margin: "50px auto 0px auto",
    fontSize: "15px", fontWeight: "bold",
    color: "#535c68"
  }
  

  const [show, setShow] = useState(false);
  const [images, setImage] = useState([]);
  const [errors, setErrors] = useState([]);

  const { register, handleSubmit } = useForm();


  useEffect(() => {
    FindAll(setImage);
  }, [])
  
  /* onsubmit */
  const onSubmit = (data) => {
    const formDate = new FormData();
    formDate.append("title", data.title);
    formDate.append("image", data.image[0]);
    Add(formDate, setImage, setErrors);

  }

  return (
   <div className='container'>
  
        <div style={{marginTop:"120px",width:"min-content"}} >
                    <h1 style={{width:"1000px"}}> l'arr<GoHeart style={{width:"22px",marginLeft:"2px"}}/>sage automatique, c'est thérapeutique.</h1>
                      <div style={desc}><span style={{ fontSize: "20px"}}>L’</span>eau est précieuse, particulièrement dans des régions arides. Pour les agriculteurs, une irrigation intelligente signifie de meilleures récoltes à un coût moindre.</div>
        <div className='form_index'>
          <div>
            <button className='btn btn-outline-primary sm' onClick={()=>setShow(!show)}>
              {
                /*
                 <SwitchVerticalIcon style={{width:'20px'}} />
                */
        }   
            </button>

          </div>
          {
            show ? <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
                <input type="text"  {...register("title")} className={classname("form-control mt-4",{"is-invalid":errors.title})} placeholder='Entrer le nom de la zone'/>
                {
                  errors.title && (<div className='invalid-feedback'>{errors.title}</div>)
                }
              
              </div>
            <div className='form-group'>
                <input type="file" {...register("image")} className={classname("form-control mt-4",{"is-invalid":errors.image})} />
                 {
                  errors.image && (<div className='invalid-feedback'>{errors.image}</div>)
                }

            </div>
            <button className='btn btn-outline-primary sm mt-4 ' >sauvegarder</button>
          </form> : ""
          }
          
          <div className='gallery_index'>
            <div className='row'>
              {
                images.map(({ _id, title, image, path}) => (
                  <Image id={_id} title={title} image={image} path={path} setImage={setImage}/>
                ))
              }

            </div>

          </div>

        </div>        
      </div>    
 </div>
  )
}

export default Irrigation

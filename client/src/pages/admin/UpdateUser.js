import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Inputs from '../../components/Inputs'
import { getUser } from '../../redux/actions/user.action';

function UpdateUser() {
 
  const [form, setForm] = useState({});
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();


  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };
  

    useEffect(() => {
       dispatch(getUser(user._id));
      
  });

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.put(`user/profil/${user._id}`, form)
    .then(res=>{
      navigate('/admin')
    })
    .catch(err=>setErrors(err.response.data))
    
    }
    

      

  return (

  <section className="container">   
    <div className="h-100 h-custom" style={{margin:"100px 0"}}>
    <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100 " >
      <div className="col-lg-8 col-xl-6" >
        <div className="card rounded-3" id="cont1">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" id="title" style={{color:"black"}}>Modifier utilisateur</h3>

            
                  
           <form onSubmit={onSubmitHandler} className="px-md-2">
            <Inputs
            placeholder="nom"
            type="text"
            name="nom"
            onChangeHandler={onChangeHandler}
            errors={errors.nom}
          />
          <Inputs
            placeholder="prenom"
            type="text"
            name="prenom"
            onChangeHandler={onChangeHandler}
            errors={errors.prenom}
          />
          <Inputs
            placeholder="Email"
            type="text"
            name="email"
            onChangeHandler={onChangeHandler}
            errors={errors.email}
          />
         
          <Inputs
            placeholder="role"
            type="text"
            name="role"
            onChangeHandler={onChangeHandler}
            errors={errors.role}
          />
            <Inputs
            placeholder="bio"
            type="text"
            name="bio"
            onChangeHandler={onChangeHandler}
            errors={errors.bio} />
                    
                    <div  style={{ display: "flex",justifyContent:"center" }}>
                        <button  type="submit" >Envoyer</button>
                    </div>

                  </form> 

          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
</section>
          

  )
}

export default UpdateUser;
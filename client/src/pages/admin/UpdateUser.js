import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Inputs from '../../components/Inputs'

function UpdateUser() {
   
const [form, setForm] = useState({});
  const {id} = useParams();
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.put(`user/${id}`, form)
    .then(res=>{
      navigate('/admin')
    })
    .catch(err=>setErrors(err.response.data))
    
  }

  useEffect(()=>{
    async function fct (){
      await axios.get(`user/${id}`)
        .then((res) => {
          setForm(res.data);
        })
    };
      fct();
    
  }, []);
      

  return (

  <section className="container">   
    <div className="h-100 h-custom" style={{margin:"100px 0"}}>
    <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100 " >
      <div className="col-lg-8 col-xl-6" >
        <div className="card rounded-3" id="cont1">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" id="title" style={{color:"black"}}>Modifier utilisateur</h3>

            
                  
           <form onSubmit={onSubmitHandler}>
          <Inputs
            type="text"
            name="nom"
            onChangeHandler={onChangeHandler}
            errors={errors.nom}
            value={form.nom}
             />
                    


          <Inputs

            type="text"
            name="prenom"
            onChangeHandler={onChangeHandler}
            errors={errors.prenom}
            value={form.prenom}
          />
          <Inputs


            type="text"
            name="email"
            onChangeHandler={onChangeHandler}
            errors={errors.email}
            value={form.email}
          />
          <Inputs
             type="text"
            name="role"
            onChangeHandler={onChangeHandler}
            errors={errors.role}
            value={form.role}
                    />
     
            <Inputs
             type="text"
            name="bio"
            onChangeHandler={onChangeHandler}
            errors={errors.bio}
            value={form.bio}
          />
                    
            <div  style={{ display: "flex",justifyContent:"center" }}> <button  type="submit" >Envoyer</button></div>

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
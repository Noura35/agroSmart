import React, { useState } from 'react'
import './Contact.css'
import Inputs from '../../components/Inputs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Classnames from 'classnames'
import { AddContact } from '../../redux/actions/contactAction';


const Contact = () => {

  const [form, setForm] = useState({})

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const errors = useSelector
    (state => state.errors);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
  })
}
 
  const onSubmit = (e) => {  
    e.preventDefault();
   dispatch(AddContact(form,navigate))
  } 


  return (
    <section className="container">   
    <div className="h-100 h-custom" style={{margin:"100px 0"}}>
    <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100 " >
      <div className="col-lg-8 col-xl-6" >
        <div className="card rounded-3" id="cont1">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" id="title" style={{color:"black"}}>Contactez-nous</h3>

            
                  
                             <form onSubmit={onSubmit} className="px-md-2">
                            <Inputs name="nom" placeholder="Votre nom ..." type="text" icon="fa-solid fa-at" onChangeHandler={onChangeHandler} errors={errors.nom} />
                            <Inputs name="prenom" placeholder="Votre prénom ..." type="text" icon="fa-solid fa-key"  onChangeHandler={onChangeHandler}  errors={errors.prenom }/>
                            <Inputs name="email" placeholder="Votre addresse mail ..." type="text" icon="fa-solid fa-at" onChangeHandler={onChangeHandler} errors={errors.email} />
                            <Inputs name="tel" placeholder="Votre téléphone ..." type="text" icon="fa-solid fa-key"  onChangeHandler={onChangeHandler}  errors={errors.tel }/>
                           
                     <div className=" mb-3">
                      <div className="input-group">
                        <textarea
                          type="text"
                          className={Classnames("form-control", {"is-invalid": errors.message})}
                          name="message"
                          onChange={onChangeHandler}
                          placeholder="Votre Message ..."
                          style={{height: "170px"  }}
                          value={form && form.message ? form.message : ""}
                        ></textarea>
                        {
                          errors.message && (<div  className="invalid-feedback">
                          {errors.message}
                        </div>)
                        }
                    </div>
                   </div>
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

export default Contact

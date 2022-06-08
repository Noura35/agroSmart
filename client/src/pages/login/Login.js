import React,  { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Inputs from '../../components/Inputs';

import "./Login.css";
import  login from '../images/pot.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../redux/actions/authAction";


function Login () {

  const [form, setForm] = useState({})

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const errors = useSelector(state => state.errors);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
  })
}
 
  const onSubmit = (e) => {  
    e.preventDefault();
    dispatch(LoginAction(form,navigate))
  }  


      return (

<section className="container" >
         
  <div className="h-100 h-custom" style={{margin:"100px 0"}}>
    <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100 " >
      <div className="col-lg-8 col-xl-6" >
        <div className="card rounded-3" id="cont1">
          <img src={login} className="w-100" style={{ borderTopLeftRadius: " .3rem", borderTopRightRadius: " .3rem"}} alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" id="title">Connexion</h3>

            
                              <form  className="px-md-2" onSubmit={onSubmit}>
                            <Inputs name="email" placeholder="Entrer votre addresse mail" type="text" icon="fa-solid fa-at" onChangeHandler={onChangeHandler} errors={errors.email} />
                            <Inputs name="password" placeholder="Entrer votre mot de passe" type="password" icon="fa-solid fa-key"  onChangeHandler={onChangeHandler}  errors={errors.password }/>

                               
                            <div class="d-flex justify-content-between">
                            <button type="submit">Se connecter</button>
                            <Link to="#">Mot de passe oublié ?</Link>
                            </div>
                        
                            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>   
</section>

        );
    }
export default Login;

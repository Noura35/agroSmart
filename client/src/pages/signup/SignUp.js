import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import  login from '../images/pot.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Inputs from '../../components/Inputs';
import { Registration } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from 'react-redux';


function SignUp() {

  const [form, setForm] = useState({});
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
    dispatch(Registration(form,navigate))
}  


  return (
    <section className="container " >
    <div className="h-100 h-custom" style={{margin:"100px 0"}}>
    <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100 " >
      <div className="col-lg-8 col-xl-6" >
        <div className="card rounded-3" id="cont1">
          <img src={login} className="w-100" style={{ borderTopLeftRadius: " .3rem", borderTopRightRadius: " .3rem"}} alt="Sample photo"/>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" id="title">Inscription</h3>

            
                              <form  className="px-md-2" onSubmit={onSubmit}>
                             <Inputs name="nom" placeholder="Entrer votre nom" type="text" icon="fa-solid fa-user"  onChangeHandler={onChangeHandler} errors={errors.nom} />
                            <Inputs name="prenom" placeholder="Entrer votre prenom"  type="text" icon="fa-solid fa-user"  onChangeHandler={onChangeHandler} errors={errors.prenom} />
                            <Inputs name="email" placeholder="Entrer votre addresse mail" type="text" icon="fa-solid fa-at"   onChangeHandler={onChangeHandler} errors={errors.email} />
                            <Inputs name="password" placeholder="Entrer votre mot de passe" type="password" icon="fa-solid fa-key"   onChangeHandler={onChangeHandler} errors={errors.password} />
                            <Inputs name="confirm" placeholder="Confirm votre mot de passe" type="password" icon="fa-solid fa-key"  onChangeHandler={onChangeHandler} errors={errors.confirm} />

                            <div class="d-flex justify-content-between">
                            <button type="submit">Sauvegarder</button>
                            <Link to="/login">I have account</Link>
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

export default SignUp;

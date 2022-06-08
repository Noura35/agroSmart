import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Inputs from '../../components/Inputs';
import { LoginAction } from '../../redux/actions/authAction';

const Login2 = () => {

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
         
 <div className="container" >
        <div className="card p-4">
            <h3  id="title">Connexion</h3>
                <form  onSubmit={onSubmit}>
                    <Inputs name="email" placeholder="Entrer votre addresse mail" type="text" icon="fa-solid fa-at" onChangeHandler={onChangeHandler} errors={errors.email} />
                    <Inputs name="password" placeholder="Entrer votre mot de passe" type="password" icon="fa-solid fa-key"  onChangeHandler={onChangeHandler}  errors={errors.password }/>
                               
                    <div class="d-flex justify-content-between">
                    <button type="submit">Se connecter</button>
                    <Link to="#">Mot de passe oublié ?</Link>
                    </div>
                        
                </form>

        </div>
      </div>
    
  
  )
}

export default Login2

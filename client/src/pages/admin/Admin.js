import React, { useEffect, useState } from "react";
import RowDetails from '../../components/RowDetails'
import axios from "axios";
import Alert from "../../components/Alert";
import './admin.css'
import Inputs from "../../components/Inputs";


function Admin() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };


  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('user/profil', form)
    .then(res=>{
      setMessage(res.data.message)
      setForm({})
      setErrors({})
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
    })
    .catch(err=>setErrors(err.response.data))
    
  }

  const OnDelete = (id)=>{
    if(window.confirm("êtes-vous sûr de supprimer cet utilisateur")){
 
     axios.delete(`user/${id}`)
     .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
      setShow(false)
      }, 4000);
     })
    }
  }
  
  
  useEffect(() => {
    
    async function fct() {
    
      await axios.get("user/")
        .then((res) => {
        setUsers(res.data);
      });
    }

    fct();
  
  }, []);
  

  return (
    <section className="container">
    <div className="row" style={{ marginTop:"180px"}}>
        <Alert message={message} show={show} style={{ margin: "100px" }} />

        <div className="col">
        <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">Ajouter utilisateur</button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nouveau utilisateur</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

       <form onSubmit={onSubmitHandler}>
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
            placeholder="role: ADMIN ou USER"
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
            errors={errors.bio}
          />
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="submit" class="btn btn-primary">Ajouter</button>
       </div>
        </form>  

       </div>
    </div>
  </div>
          </div>

          </div>    


        
      <div className="col">
        <table className="table bg-white table-hover"  style={{width:"880px"}}>
          <thead  className="table-dark">
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Nom</th>
              <th scope="col">Prenom</th>
              <th scope="col">Email</th>
              <th scope="col">Bio</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ nom, prenom, email, role, bio, _id }) => (
              
              <RowDetails
                 role={role}
                 nom={nom}
                 prenom={prenom}
                 email={email}      
                  bio={bio}
                  id={_id}
                 OnDelete={OnDelete}

              />
            ))}
          </tbody>
          </table>          
      </div>
      </div>
    </section>
  );
}

 export default Admin;
                
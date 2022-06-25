import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/acceuil/Home';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import Contact from './pages/contact/Contact';
import Admin from './pages/admin/Admin';
import Profile from './pages/profile/Profile';
import NoAccess from './pages/notAccess/NoAccess';
import NotFound from './pages/notAccess/NotFound'
import TableauBord from './pages/tableauBord/TableauBord';
import Actualite from './pages/actualites/Actualite';

//articles :
import Articles from './pages/Articles/Articles';
import AddArticle from './pages/Articles/AddArticle';
import Article from './pages/Articles/Article';
import EditArticle from './pages/Articles/EditArticle';


//embauche:
import Embauche from './pages/annonces/Embauche/Embauche';
import CardEmbauche from './pages/annonces/Embauche/CardEmbauche';
import UpdateEmb from './pages/annonces/Embauche/UpdateEmb';

//materiels
import Materiels from './pages/annonces/Materiels/materiels';
import AddMateriel from './pages/annonces/Materiels/AddMateriel';
import Materiel from './pages/annonces/Materiels/Materiel';
import EditMateriel from './pages/annonces/Materiels/EditMateriel';






          
import ForceRedirect from './components/ForceRedirect';
import AdminRouter from './components/AdminRouter';
import PrivateRouter from './components/PrivateRouter';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import store from './redux/store'
import { Logout, setUser } from './redux/actions/authAction';
import jwt_decode from 'jwt-decode'
import {  useSelector } from 'react-redux';
import { setAuth } from './redux/util/setAuth';
import UpdateUser from './pages/admin/UpdateUser';
import Trending from './pages/actualites/Trending';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DashTemp from './pages/tableauBord/DashTemp';

import DashHum from './pages/tableauBord/DashHum';
import DashHumSol from './pages/tableauBord/DashHumSol';
import Arrosage from './pages/tableauBord/Arrosage';



if (window.localStorage.jwt) {
  const decode = jwt_decode(window.localStorage.jwt);
  store.dispatch(setUser(decode));
  setAuth(window.localStorage.jwt);
  const currentDate = Date.now / 1000;

  if (decode.exp > currentDate) {
    store.dispatch(Logout())
  }

}


function App() {

  //user
  const auth = useSelector(state => state.auth);
  const user = {
    id: auth.user.id,
    isConnected: auth.isConnected,
    role: auth.user.role,
    nom: auth.user.nom
  };

  //articles
const [posts,setPosts]=useState([]);
useEffect(()=> {
axios
.get("/api/articles")
.then(res =>setPosts(res.data))
.catch(error => console.log(error));

  }, []);


  //materiels
  const [cards,setCards]=useState([]);
  useEffect(()=> {
  axios
  .get("/api/")
  .then(res =>setCards(res.data))
  .catch(error => console.log(error));
  
    }, []);
    

 
  return (
    <div style={{backgroundColor:"#f1f2f6"}}>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" exact  element={<NotFound />}/>
        <Route path="/noaccess" element={<NoAccess />} />
        
        <Route path="/signup" element={
          <ForceRedirect user={user}>
             <SignUp />
          </ForceRedirect>
        } />

        <Route path="/login" element={
          <ForceRedirect user={user}>
          <Login />
          </ForceRedirect>
          } />

        <Route path="/profile" element={
        <PrivateRouter user={user}>
        <Profile  user={user}/>
          </PrivateRouter>} />
        

         <Route path="/admin" element={
         <AdminRouter user={user}>
         <Admin />
         </AdminRouter>} />
      
        
        <Route path="/contact" element={ <Contact /> } />
        
        <Route path="/tableaubord" element={
        <PrivateRouter user={user}>
        <TableauBord />
        </PrivateRouter>} />

       

        {/* annonces : */}
        <Route path="/annonces" element={
        <CardEmbauche user={user}/>
        } />
       
        <Route path="/updateemb/:id" element={
          <PrivateRouter user={user}>
          <UpdateEmb />
          </PrivateRouter>

        } />
        <Route path="/embauche" element={
          <PrivateRouter user={user}>
          <Embauche />
          </PrivateRouter>

        } />
        {/* end annonces : */}

        {/* actualités : */}

        <Route path="/actualite" element={
            <Actualite />
        } />
          <Route path="/trending" element={
            <Trending />
        } />

        {/*  end actualités : */}


        {/* profil */}

        <Route path="/:id" element={<UpdateUser />} />

        {/* end profil */}

        
        {/* articles */}
        <Route path="/articles"  element={<Articles posts={posts} user={user} />} />
        <Route path="/article/:id" element={
           <PrivateRouter user={user}>
          <Article posts={posts} />
         </PrivateRouter>
        } />
        <Route path="/articles/:id" element={
               <AdminRouter user={user}>
                <EditArticle posts={posts} />
              </AdminRouter>

        } />
        <Route path="/addarticle" element={
           <AdminRouter user={user}>
             <AddArticle />
             </AdminRouter>} />
            <Route path="/editarticle" element={
           <AdminRouter user={user}>
          <EditArticle />
          </AdminRouter>} />

        {/*  fin articles */}
        
{/*materiels */}
        <Route path="/materiels" element={<Materiels cards={cards} user={user}  />} />
        
        <Route path="/addmateriel" element={
          <PrivateRouter user={user}>
          <AddMateriel />
          </PrivateRouter>
          } />
        
        <Route path="/materiel/:id" element={
           <PrivateRouter user={user}>
           <Materiel cards={cards}   />
           </PrivateRouter>
        } />

        <Route path="/materiels/:id"  element={          
        <PrivateRouter user={user} >
        <EditMateriel cards={cards}/>
       </PrivateRouter>

        }/>
        
    {/* end materiels */}
    
   <Route path="/dashTemp"  element={          
        <PrivateRouter user={user} >
        <DashTemp />
       </PrivateRouter>

        } />
        



       <Route path="/dashHum"  element={          
        <PrivateRouter user={user} >
        <DashHum />
       </PrivateRouter>

        }/>



       <Route path="/dashHumSol"  element={          
        <PrivateRouter user={user} >
        <DashHumSol />
       </PrivateRouter>

        } />
        
        <Route path="/arrosages"  element={          
        <PrivateRouter user={user} >
        <Arrosage />
       </PrivateRouter>

        }/>

    

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

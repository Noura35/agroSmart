import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateBio } from '../../redux/actions/user.action';
import { dateParser } from '../../redux/util/util';
import FollowHandler from './FollowHandler';
import UploadImg from './UploadImg';


const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const dispatch = useDispatch();
  const [followingPopup, setFollowingPopup] = useState(false);
  const [followersPopup, setFollowersPopup] = useState(false);
  const userData = useSelector((state) => state.user);
  const usersData = useSelector((state) => state.users);
  const error = useSelector((state) => state.errors);

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  return (

    <div className="profil-container">
      <h1 style={{marginTop:"140px"}}> Paramètres de profil</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>{userData.nom}</h3>
          <img src={userData.picture} alt="user-pic" />
          <UploadImg />
          <p>{error.maxSize}</p>
          <p>{error.format}</p>

        </div>
        <div className="right-part">
          <div className="bio-update">
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  placeholder="Décrivez-vous ici..."
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>Valider modifications</button>
              </>
            )}
          </div>
          <h4 style={{ fontSize: "15px", padding:"20px"}}>Membre depuis le : {dateParser(userData.createdAt)}</h4>
          <h5 onClick={() => setFollowingPopup(true)}>
            Abonnements : {userData.following ? userData.following.length : ""}
          </h5>
          <h5 onClick={() => setFollowersPopup(true)}>
            Abonnés : {userData.followers ? userData.followers.length : ""}
          </h5>
        </div>
      </div>
      {followingPopup && (
        <div className='popup-profil-container'>
          <div className='model'>
            <h3>Abonnements</h3>
            <span className="cross" onClick={() => setFollowingPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.following.length; i++) {
                  if (user._id === userData.following[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt="user-pic" />
                        <h4>{user.nom}</h4>
                        <div className="follow-handler">
                          <FollowHandler idToFollow={user._id} type={"suggestion"}/>

                        </div>
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
        </div>
      )}
      {followersPopup && (
        <div className='popup-profil-container'>
          <div className='model'>
            <h3>Abonnés</h3>
            <span className="cross" onClick={() => setFollowersPopup(false)}>
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.followers.length; i++) {
                  if (user._id === userData.followers[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt="user-pic" />
                        <h4>{user.nom}</h4>
                        <div className="follow-handler">
                        <FollowHandler idToFollow={user._id} type={"suggestion"}/>
                        </div>
                      </li>
                    );
                  }

                }

              })}
            </ul>
          </div>
        </div>
      )}
      </div>
      
  );
};

export default UpdateProfil;
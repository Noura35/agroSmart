import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, updatePost } from '../../../redux/actions/post.action';
import isEmpty from '../../../redux/util/isEmpty';
import { dateParser } from '../../../redux/util/util';
import FollowHandler from '../../profile/FollowHandler';
import CardComments from './CardComments';
import DeleteCard from './DeleteCard';
import LikeButton from './LikeButton';

const Card = ({post}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isUpdated, setIsUpdated] = useState(false); 
    const [textUpdate, setTextUpdate] = useState(null);
    const [showComment, setShowComment] = useState(false);
    const usersData = useSelector((state) => state.users);
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();


    const auth = useSelector(state => state.auth);
    const user = {
    id:auth.user.id,
    isConnected: auth.isConnected,
    }



    const updateItem =  () => {
        if (textUpdate) {
            dispatch(updatePost(post._id,textUpdate))
  
        }
        setIsUpdated(false);
    }


    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false);
    },[usersData])



  return (
      <li className='card-container' key={post._id}>
          {
              isLoading ? (
                  <i className='fas fa-spinner fa-spin'></i>
              ) : (
                      <>
                          <div className='card-left'>
                              <img src={
                                 !isEmpty(usersData[0]) && 
                                  usersData.map((user) => {
                                      if (user._id === post.posterId) {
                                          return user.picture;
                                      }
                                      else return null;
                                    }).join('')
                            } alt="" />
                              
                          </div>
                          <div className='card-right'>
                              <div className='card-header'>
                                  <div className='pseudo' >
                                      <h4 style={{ textTransform: "lowercase"}}>
                                          {
                                         !isEmpty(usersData[0]) && 
                                        
                                           usersData.map((user) => {
                                         if (user._id === post.posterId) {
                                          return user.nom;
                                        }     
                                        }).join("") }
                                      </h4>
                                      {
                                          post.posterId !== user.id && <FollowHandler type={'card'} idToFollow={post.posterId} />

                                      }
                                  </div>
                                  <span> {dateParser(post.createdAt)}</span>
                              </div>
                              
                              {
                                  isUpdated === false && <p>{post.message}</p>
                              }
                              
                              {
                                  isUpdated && (
                                      <div className='update-post'>
                                          <textarea
                                              defaultValue={post.message}
                                              onChange={(e)=>setTextUpdate(e.target.value)}
                                          
                                          
                                          />
                                          <div className='button-container'>

                                              <button className='btn' onClick={updateItem}>
                                                  valider Modification
                                            </button>
                                          </div>
                                          
                                    </div>
                                      
                                  )
                              } 

                              {
                                  post.picture && <img src={post.picture} alt="card-pic" className='card-pic' />
                              }
                                {
                                  post.video && <iframe
                                      width="500" height="300" src={post.video}
                                      allow="accelerometre; autoplay; clipboard-write;encrypted-media; gyroscope;picture-in-picture"
                                      allowFullScrean
                                      title={post._id}
                                  ></iframe>
                              }

                              {
                                  user.id === post.posterId && (
                                      <div className='button-container'>
                                          <div onClick={() => setIsUpdated(!isUpdated)}>
                                              <img src='./img/icons/edit.svg' alt="edit"/>
                                          </div>
                                          <DeleteCard id={post._id}/>
                                      </div>
                                  )
                              }
                              

                              <div className='card-footer'>
                                  <div className='comment-icon'>
                                      <img onClick={()=>setShowComment(!showComment)} src="./img/icons/message1.svg" alt='comment' />
                                      <span>{post.comments.length}</span>
                                  </div>
                                  <LikeButton post={post} />
                                  <img src='./img/icons/share.svg' alt='share'/>
                              </div>
                              {
                                  showComment && <CardComments post={post} />
                              }

                          </div>
                      </>
              )
          }
    </li>
  )
}

export default Card

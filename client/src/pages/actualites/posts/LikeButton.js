import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { likePost, unlikePost } from '../../../redux/actions/post.action';
import isEmpty from '../../../redux/util/isEmpty';




const LikeButton = ({ post }) => {
    
    
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    const like = () => {
        dispatch(likePost(post._id, user._id))
        setLiked(true);
     
    }
    const unlike = () => {
        dispatch(unlikePost(post._id, user._id))
        setLiked(false);
    }

    useEffect(() => {
        if (post.likers.includes(user._id))
            setLiked(true);
        
    }, [user._id,post.likers, liked])


    return (
        <div className='like-container'>

            {         
                isEmpty(user._id)  && <Popup trigger={<img src="./img/icons/heart.svg" alt="like" />} position={
                    ['bottom center', 'bottom right', 'bottom left']} closeOnDocumentClick >
                    <div>Connectez vous pour aimer un post !</div>
                    </Popup>
            }
       

            {
                 user._id && liked === false && (
                    <img src="./img/icons/heart.svg" alt="like" onClick={like}/>
                )

                 }

            {
                 user._id && liked ===true && (
                    <img src="./img/icons/heart-filled.svg" alt="unlike" onClick={unlike}/>
                )

            }
            <span>{post.likers.length}</span>

        </div>

    );
}; 

export default LikeButton

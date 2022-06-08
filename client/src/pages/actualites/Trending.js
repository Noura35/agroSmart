import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Trends from '../../components/Trends';
import { getTrend } from '../../redux/actions/post.action';
import { getUser } from '../../redux/actions/user.action';
import isEmpty from '../../redux/util/isEmpty';
import FriendsHint from '../profile/FriendsHint';
import Card from './posts/Card';

const Trending = () => {
    const auth = useSelector((state) => state.auth);
    const trendingList = useSelector((state) => state.trending);
    const posts = useSelector((state) => state.allposts);
    const dispatch = useDispatch();

    const user = {
    id:auth.user.id,
    isConnected: auth.isConnected,
  }

    

    useEffect(() => {
        if (!isEmpty(posts[0])) {
            const postsArr = Object.keys(posts).map((i) => posts[i]);
            let sortedArr = postsArr.sort((a, b) => {
                return b.likers.length - a.likers.length;
            });
            sortedArr.length = 3;
            dispatch(getTrend(sortedArr));
        }
        
       dispatch(getUser(user.id))

        
    },[posts,dispatch])
  return (
    <div className='trending-page' style={{marginTop:"100px"}}>
          <div></div>
          <div className='main1'>
              <ul>
                  {!isEmpty(trendingList[0]) && trendingList.map((post) => <Card post={post}
                      key={post._id} />)}
              </ul>
          </div>
          <div className='right-side'>
              <div className='right-side-container'>
                  <Trends />

              {user.isConnected && <FriendsHint/> }

              </div>
          </div>
    </div>
  )
}

export default Trending

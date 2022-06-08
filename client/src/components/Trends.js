import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getTrend } from '../redux/actions/post.action';
import isEmpty from '../redux/util/isEmpty';

const Trends = () => {
    const posts = useSelector((state)=>state.allposts);
    const usersData = useSelector((state) => state.users);
    const trendList = useSelector((state) => state.trending);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isEmpty(posts[0])) {
            const postsArr = Object.keys(posts).map((i) => posts[i]);
            let sortedArr = postsArr.sort((a, b) => {
                return b.likers.length - a.likers.length;
            });
            sortedArr.length = 3;
            dispatch(getTrend(sortedArr));
        }

        
    },[posts,dispatch])


  return (
    <div className='trending-container'>
          <h4>Tendance</h4>
          <NavLink exact to="/trending">
              <ul>
                  {trendList.length && (trendList.map((post) => {
                      return (
                          <li key={post._id}>
                              <div>
                                  {post.picture && <img src={post.picture} alt="post-pic" />}
                            
                                  {post.video && (
                                                  <iframe
                                                      src={post.video}
                                                      frameBorder='0'
                                                      allow="accelerometre; autoplay; clipboard-write;encrypted-media; gyroscope;picture-in-picture"
                                                      allowFullScrean
                                                      title={post._id}
                                                  ></iframe>
                                  )}
                                  {isEmpty(post.picture) && isEmpty(post.video) && (
                                      <img src={usersData[0] && usersData.map((user) => {
                                          if (user._id === post.posterId)
                                          { return user.picture; }
                                          else
                                          { return null; }
                                      }).join('')
                                      } alt="poster-pic" />
                                )}      
                                  
                               
                              </div>
                                 <div className='trend-content' >
                                      <p> {post.message} </p>   

                                      <span> Lire </span>
                             </div>
                          </li>
                      )
                  }))}
              </ul>

          </NavLink>
    </div>
  )
}

export default Trends

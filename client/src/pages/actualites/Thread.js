import React, { useEffect, useState } from 'react'
import { getPosts } from '../../redux/actions/post.action';
import { useDispatch, useSelector } from 'react-redux'
import isEmpty from '../../redux/util/isEmpty';
import Card from './posts/Card';

const Thread = () => {

    const [LoadPost, setLoadPost] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const [count, setCount] = useState(5);

    const loadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >
            document.scrollingElement.scrollHeight) {
            setLoadPost(true);
            }
    }

    useEffect(() => {
        if (LoadPost) {
            dispatch(getPosts(count));
            setLoadPost(false);
            setCount(count + 5);
        }
        window.addEventListener('scroll', loadMore);
        return () => window.removeEventListener('scroll', loadMore);
    
},[LoadPost,dispatch,count])




  return (
      <div className='thread-container'>
          <ul>
              {!isEmpty(posts[0]) && 
                  posts.map((post) => {
                      return <Card post={post} key={post._id}/>
                })
              }
          </ul>  
    </div>
  )
}

export default Thread

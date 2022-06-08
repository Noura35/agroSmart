import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../../redux/actions/post.action';

const EditDeleteComment = ({comment,postId}) => {

    const [isAuthor, setIsAuthor] = useState(false);
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);
    const user = {
    id:auth.user.id,
    isConnected: auth.isConnected,
    nom: auth.user.nom,

    }

    const handleEdit = (e) => {
    e.preventDefault();
        if (text) {
            dispatch(editComment(postId, comment._id, text));
            setText('');
            setEdit(false)

        }

     }

  const handleDelete = (e) => dispatch(deleteComment(postId, comment._id));

      



        useEffect(() => {
            const checkAuthor = () => {
                if (user.id === comment.commenterId)
                    setIsAuthor(true);
            }
            checkAuthor();
        },[user.id])

    



  return (
      <div className='edit-comment'>
          {isAuthor && edit === false && (
              <span onClick={() => setEdit(!edit)}>

                  <img src='./img/icons/edit.svg' alt='edit-comment'/>
              </span>
          )}

           {isAuthor && edit === true && (
              <form action='' onSubmit={handleEdit} className="edit-comment-form">
                <label htmlFor='text' onClick={()=>{setEdit(!edit)}}>Editer</label>  
                  <br />
                  <input type='text' name='text' onChange={(e) => { setText(e.target.value) }} defaultValue={comment.text} />
                  <br />

                  <div className='btn-comment'>
                        < span onClick={() => {if (window.confirm('Voulez-vous supprimer ce commentaire ?')) {
                                handleDelete(); } }}>
                        <img src='./img/icons/trash.svg' alt='trash-comment'/>

                        </span>
                        

                        <input type='submit' value="Valider Modification"/>
                  </div>
              </form>
          )}
    </div>
  )
}

export default EditDeleteComment

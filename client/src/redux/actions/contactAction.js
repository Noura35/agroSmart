import axios from 'axios'
import { ERRORS, SET_CONTACT, SET_CONTACTS,DELETE_CONTACT } from '../type';

export const AddContact = (form,setShow,setMessage) => dispatch => {
    
    axios
        .post("/user/contacts",form)
        .then(res => {
            setShow(true);
            setMessage("message send with success");
         dispatch({
                type: ERRORS,
                payload: {}
         })
          
        setTimeout(() => {
           setShow(false);
                
        }, 4000);
            
            

        })
        .catch(err => {
            dispatch({
                type: ERRORS,
                payload:err.response.data
            })
        });
}
export const GetContact = () => dispatch => {
    
    axios
        .get("/user/contacts/showone")
        .then(res => {
            dispatch({
                type: SET_CONTACT,
                payload: res.data
                })
        })
        .catch(err => {
            dispatch({
                type: ERRORS,
                payload:err.response.data
            })
        });
}

export const GetContacts = () => dispatch => {
    
    axios
        .get("/user/contacts/showall")
        .then(res => {
            dispatch({
                type: SET_CONTACTS,
                payload: res.data
                })
        })
        .catch(err => {
            dispatch({
                type: ERRORS,
                payload:err.response.data
            })
        });
}


export const DeleteContacts = (id) => dispatch => {
    
    if(window.confirm("are you sure to delete this Message?")){
    axios
    .delete(`/user/contacts/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    })
    .catch(err => {
       console.log(err);
    });
   }
}
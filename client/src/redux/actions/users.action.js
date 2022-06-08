import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = ()=>dispatch=>{
    axios
      .get("user/")
      .then(res => {
          dispatch({
              type: GET_USERS,
              payload: res.data
          })
      })
      .catch(err => {
        console.log(err);
      });
}
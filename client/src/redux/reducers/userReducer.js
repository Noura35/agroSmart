import { FOLLOW_USER, GET_USER, UNFOLLOW_USER, UPDATE_BIO, UPLOAD_PICTURE,DELETE_USER } from "../actions/user.action";


const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state,
        picture: action.payload,
      };
    case UPDATE_BIO:
      return {
        ...state,
        bio: action.payload,
      };
    case FOLLOW_USER:
      return {
        ...state,
        following:[action.payload.idToFollow, ...state.following],
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        following:state.following.filter((id)=>id !== action.payload.idToUnFollow ),
      };
     case DELETE_USER:
            return {
                ...state, //state courant
                users: state.payload.filter(p=>p._id !== action.payload)
            }
    default:
      return state;
  }
}
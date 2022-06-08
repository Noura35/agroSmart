import { GET_POST_ERRORS } from "../actions/post.action";
import { GET_USER_ERRORS } from "../actions/user.action";
import { ERRORS } from "../type";

const initialState = { }
export default function (state = initialState, action) {
    
    switch (action.type) {
        case ERRORS: 
            return action.payload;
        
        case GET_POST_ERRORS:
            return action.payload;
        
        case GET_USER_ERRORS:
            return action.payload;   

        default:
            return state;
    }
    
}
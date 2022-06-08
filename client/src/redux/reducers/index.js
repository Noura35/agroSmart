import { combineReducers } from "redux";
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import postReducer from "./postReducer";
import userReducer from './userReducer';
import usersReducer from "./usersReducer";
import contactReducer from "./contactReducer";
import allPostReducer from "./allPostReducer";
import trendingReducer from "./trendingReducer";


export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    user: userReducer,
    users: usersReducer,
    posts: postReducer,
    contact:contactReducer,
    allposts: allPostReducer,
    trending:trendingReducer,

});
import { SET_CONTACT, SET_CONTACTS } from "../type";

const intilialState = {
    contacts:[],
    contact:{}
}
export default function (state=intilialState, action) {

    switch (action.type) {
        case SET_CONTACT:
            return {
                ...state, //state courant
                contact: action.payload
            } 
        case SET_CONTACTS:
            return {
                ...state, //state courant
                contacts: action.payload
            }
            
        default:
            return state;
    }
    
}
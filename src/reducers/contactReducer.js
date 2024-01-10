import { UPDATE_FORM } from "../actions/action_constants";



const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
};

const contactReducer = (state = initialState , action) => {
    switch(action.type){
        case UPDATE_FORM:
            return{
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                comments: action.payload.comments,
            }
        default:
            return state;
}
};

export {contactReducer};

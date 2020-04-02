import {    
    GET_NEARBY_SHOWS_LIST_SAGA
}from './types';

const DefaultLoacation = `Delhi`;

const reducer = (state = {UserLocation: DefaultLoacation}, action) =>{
    switch(action.type){
        case GET_NEARBY_SHOWS_LIST_SAGA: {
            const UserLocation = action.payload;
            return{
                ...state,
                UserLocation
            };
        }
        default:
            return state;
    }
};

export default reducer;
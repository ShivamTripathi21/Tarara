import{
    GET_NEARBY_SHOWS_LIST_SAGA
} from './types';

const onGetNearbyShowsListAction = UserLocation => ({
    type: GET_NEARBY_SHOWS_LIST_SAGA,
    payload: UserLocation
});

export{
    onGetNearbyShowsListAction
}
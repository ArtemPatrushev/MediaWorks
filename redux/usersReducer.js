import { usersAPI } from '../api/api';

const SET_USERS = 'SET-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [],
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        default:
            return state;
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    };
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    };
};

export const getUsersThunkCreator = () => {
    debugger
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers()
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data));
            });
    };
};

export default usersReducer;

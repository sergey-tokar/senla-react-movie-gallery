import {ADD_NEW_USER, ADMIN_LOG_IN, LOG_IN, LOG_OUT} from "../constants/constants";

export const tryLogIn = (loginData) => (dispatch, getState) => {
    const users = getState().authorization.users;
    const currentUser = users.find(user => user.email.toLowerCase() === loginData.email.toLowerCase() && user.password === loginData.password);
    if (currentUser && currentUser.login === 'admin') {
        dispatch(adminLogIn(currentUser));
    } else if (currentUser) {
        dispatch(logIn(currentUser))
    }
}

export const tryRegister = (registerData) => (dispatch, getState) => {
    const users = getState().authorization.users;
    const currentUser = users.find(user => user.email.toLowerCase() === registerData.email.toLowerCase());
    if (!currentUser) {
        dispatch(addNewUser(registerData));
        console.log(registerData)
    }
}

function logIn(currentUser) {
    return {
        type: LOG_IN,
        payload: currentUser
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}

function adminLogIn(currentUser) {
    return {
        type: ADMIN_LOG_IN,
        payload: currentUser
    }
}

function addNewUser(registerData) {
    return {
        type: ADD_NEW_USER,
        payload: registerData
    }
}

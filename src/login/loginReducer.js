
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';


export const loginReducer = (state = { complete: false }, {type, payload}) => {
    switch (type) {
        case LOGIN_REQUEST:
            state = { complete: false, isLogedIn: false }
            return state;
        case LOGIN_SUCCESS:
            state = { complete: true, isLogedIn: true }
            return state;
        case LOGIN_FAILED:
            state = { complete: true, isLogedIn: false, reason: payload.reason }
            return state;
        default:
            return state;
    }
}
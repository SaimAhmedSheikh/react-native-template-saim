import { actionTypes } from "../actions/AuthActions";

// Initial state of the application
const initialState = {
    showSplash: true,
    isLoading: false,
    user: null,
    isLoggedIn: null,
    fcmToken: null
}

// Reducer that changes the state based on the action
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING: return {
            ...state,
            isLoading: action.payload
        };
        case actionTypes.SET_LOGGED_IN: return {
            ...state,
            isLoading: false,
            user: action.payload,
            isLoggedIn: action.payload!==null
        };
        case actionTypes.SET_SHOW_SPLASH: return {
            ...state,
            showSplash: action.payload.showSplash,
            isLoggedIn: action.payload.isLoggedIn
        };

        default: return state;
    }
}
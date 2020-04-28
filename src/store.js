import React, {createContext, useReducer} from 'react';


const initialState = {
    mainRequest:'',
    isAuth:false,
    token:'',
    refreshToken:'',
    user:{}
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {

        switch(action.type) {
            case 'login user':
                state.isAuth = true;
                state.token = action.token;
                state.refreshToken = action.refreshToken;
                return {...state};

            case 'auth required':
                state.mainRequest = action.mainRequest;
                return {...state};

            case 'redirect user' :

                return {...state};

            case 'refresh token':
                return {...state};

            default:
                throw new Error();
        };

    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
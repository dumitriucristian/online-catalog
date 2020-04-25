import React, {createContext, useReducer} from 'react';

const initialState = {
    login:false,
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
                state.login = true;
                state.token = action.token;
                state.refreshToken = action.refreshToken;

                return state;

            default:
                throw new Error();
        };

    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
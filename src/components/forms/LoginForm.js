import React, { useState, useContext } from 'react';
import { store} from "../../store";
import { useHistory } from "react-router-dom";

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
   //get
    const globalState = useContext(store);
    const { dispatch } = globalState;



    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!username) {
            return setUsername({error: 'Username is required'});
        }

        if (!password) {
            return setPassword({ error: 'Password is required' });
        }

        //prevent user login multiple times
        if(globalState.state.login === true) {
           return
        }


        const data = {'username': username, 'password': password};
        fetch('http://localhost:8080/api/login_check', {
            method: 'POST',
            mode: 'cors',
            credentials: 'omit',
            headers: new Headers({
                'Content-Type': 'application/json',
                'origin':'http://localhost:3000',
            }),
            body: JSON.stringify(data)
        }).then( (rsp) => {

            if (!rsp.ok) {
                throw Error(rsp.statusText);
            }
            return rsp.json();
        }).then(rsp => {
            console.log(rsp);
            dispatch({type: 'login user', token: rsp.token, refreshToken: rsp.refresh_token});
            history.push("/");

        }).catch(error => {
            alert('Wrong username or password');
            console.log(error)
        });

    };

    const handleUserChange = evt => {
        setUsername( evt.target.value);
    };

    const handlePassChange = evt => {
        setPassword( evt.target.value);
    };

    //conditional rendering - if loged in hide form
    if(globalState.state.login){
        return (

            <div className="w-full max-w-xs">

                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <p className="block text-center text-gray-700 text-lg font-bold mb-2"> You are already loged in</p>
                </div>
            </div>
        )
    };

    return (

        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username"
                        value={username} onChange={handleUserChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="******************"
                        value={password} onChange={handlePassChange}
                    />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-center">
                    <input
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" value="submit"
                    />
                </div>
                <div className="flex items-end justify-center p-5">
                    <a className="inline-block   text-sm text-blue-500 hover:text-blue-800"
                       href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
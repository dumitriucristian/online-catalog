import React, { useState, useContext } from 'react';
import { store} from "../../store";
import { useHistory } from "react-router-dom";

function RegisterForm() {

    const [roles] = useState(['VISITOR','STUDENT','TEACHER','ADMIN','SUPER-ADMIN']);
    const [role, setRole] = useState('VISITOR');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const globalState = useContext(store);
    const { dispatch } = globalState;


    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!username) {
            return setError('Username is required');
        }

        if (!password) {
            return setError('Password is required');
        }

        if (!passwordValidation) {
            return setError('Password validation is required');
        }

        if (password != passwordValidation) {
            return setError( 'Password must match');
        }

        //prevent user login multiple times
        if(globalState.state.isAuth === true) {
            return
        }


        const data = {'username': username, 'password': password, 'role': role };
        fetch('http://localhost:8080/register', {
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

    const handleValidationPassChange = evt =>{
        setPasswordValidation(evt.target.value);
    };

    const handleRoleChange = evt =>{
        setRole(evt.target.value);
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
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordValidation">
                        Password check
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password-validation" type="password" placeholder="retype password"
                        value={passwordValidation} onChange={handleValidationPassChange}
                    />
                    <p className="text-red-500 text-xs italic">Please re-type your password.</p>
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user-role">
                    User role
                </label>
                <select id="user-role" value={role} className="w-full py-2 px-3 text-gray-700 mb-3 border border-red-500 rounded" onChange={handleRoleChange}>
                    {
                       roles.map( (value, index) => {
                            return <option value={value} key={index}>{value}</option>
                       })
                    }
                </select>
                <div className="flex items-center justify-center">
                    <input
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" value="submit"
                    />
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;
import React, { useState } from 'react';


function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!username) {
            return this.setUsername({error: 'Username is required'});
        }

        if (!password) {
            return this.setPassword({ error: 'Password is required' });
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
            setToken(rsp.token);
            setRefreshToken(rsp.refresh_token);
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
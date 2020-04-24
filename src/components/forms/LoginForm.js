import React from 'react';


class LoginForm extends React.Component {
    constructor(){

        super();
        this.state = {
            username: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }
        const data = {'username':'test@test.com', 'password':'test'};
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
                console.log(rsp);
                return rsp.json();
            })
        return this.setState({ error: '' });
    }


    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }


    render() {
        return (
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Username"
                            value={this.state.username} onChange={this.handleUserChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="******************"
                            value={this.state.password} onChange={this.handlePassChange}
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
}

export default LoginForm;
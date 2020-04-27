import React, { useState, useContext } from 'react';
import { store} from "../../store";
import { useHistory } from "react-router-dom";

function SchoolForm() {



    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const globalState = useContext(store);
    const { dispatch } = globalState;


    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!name) {
            return setError('A name is required');
        }

        if (!address) {
            return setError('Address is required');
        }

        if (!description) {
            return setError('Description is required');
        }


        //prevent user login multiple times
        if(globalState.state.isAuth === true) {
            return
        }


        const data = {'name': name, 'description': description, 'address': address };
        fetch('http://localhost:8080/api/addSchool', {
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

    const handleNameChange = evt => {
        setName( evt.target.value);
    };



    const handleDescriptionChange = evt =>{
        setDescription(evt.target.value);
    };

    const handleAddressChange = evt =>{
        setAddress(evt.target.value);
    };


    return (

        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        School name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="School name"
                        value={name} onChange={handleNameChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        School address
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="address" type="text" placeholder="School address"
                        value={address} onChange={handleAddressChange}
                    />

                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordValidation">
                        Short Description
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="description" type="text" placeholder="School description"
                        value={description} onChange={handleDescriptionChange}
                    />
                </div>

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

export default SchoolForm;
import React from 'react';
import { Link } from 'react-router-dom';

function Auth() {

    return (
        <div>
            <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <p className="text-center">Before access this section please,</p>
                <p className="text-center m-2">
                    <Link to="/login" className="w-full sm:w-1/4 text-center sm:text-center bg-white rounded text-center p-2">Login </Link>
                    <span>or </span>
                    <Link to="/register" className="w-full sm:w-1/4 text-center sm:text-center bg-blue-300 rounded text-center text-white p-2">Register </Link>
                </p>
                <p className="text-center">and you will be redirected to the page</p>
            </div>
        </div>
    )
}

export default Auth;
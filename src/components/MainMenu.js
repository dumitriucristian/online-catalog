import { NavLink} from "react-router-dom";
import React, {useContext} from "react";
import {store} from "../store";


function MainMenu(){
    const globalState =  useContext(store);
    const login = globalState.state.login;


    return (
        <div className="flex flex-wrap mr-5">
            <NavLink to="/"   className="w-full sm:w-1/4 text-center sm:text-right p-2" href="#" >Home</NavLink>
            <NavLink to="/classes"   className="w-full sm:w-1/4 text-center sm:text-right p-2" href="#" >Classes </NavLink>
            <NavLink to="/students" className="w-full sm:w-1/4 text-center sm:text-right p-2" href="#">Students</NavLink>
            <NavLink to="/statistics" className="w-full sm:w-1/4 text-center sm:text-right p-2" href="#">Statistics</NavLink>
            <NavLink to="/school" className="w-full sm:w-1/4 text-center sm:text-right p-2" href="#">School</NavLink>
            { login ? (
                <NavLink to="/logout" className="w-full sm:w-1/4 text-center sm:text-center bg-black text-white p-2" href="#">Logout</NavLink>
                ):(
                <div>
                    <NavLink to="/login" className="w-full sm:w-1/4 text-center sm:text-center bg-white rounded text-center p-2" href="#">Login</NavLink>
                    <span className="p-2">or</span>
                    <NavLink to="/register" className="w-full sm:w-1/4 text-center sm:text-center bg-blue-300 rounded text-center text-white p-2" href="#">Register</NavLink>
                </div>
                )
            }
        </div>
    )
}

export default MainMenu;
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import "../Styles/NavStyle.css"

function Navbar() {
    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);
    const signOut = () => {
        localStorage.removeItem('userData');
        navigate("/");
    }

    const goToUserProfile = () => {
        navigate("/userprofile");
    }
    const goToHomeProfile = () => {
        navigate("/todoapp");
    }

    return (
        <>
            <div className='align-items-center nav-color d-flex justify-content-between w-100 px-2 py-1'>
                <div className='ps-2 text-light fw-bold text-nav fs-5'><i className="fas fa-tasks"></i>{" "}To-Do App</div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <button className='btn text-light'><i className="fa fa-home"  onClick={goToHomeProfile}></i></button>
                    </li>
                    <li className="nav-item">
                        <button className='btn text-light' title={`${userData.username}`} onClick={goToUserProfile} >
                            <i className="fa-solid fa-user"></i>{userData.username}</button>
                    </li>
                    <li className="nav-item">
                        <button className='btn text-light' title="Sign Out" onClick={signOut}>
                            <i className="fa fa-sign-out" aria-hidden="true"></i></button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
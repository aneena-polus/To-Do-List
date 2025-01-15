import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import "../Styles/NavStyle.css"
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Person2Icon from '@mui/icons-material/Person2';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import axios from 'axios';

function Navbar() {
    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);
    const taskCount = useSelector((state) => state.task.totalCount);
    const signOut = () => {
        localStorage.removeItem('userData');
        axios.get('/api/logout').then(() => {
            navigate("/");
        });
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
                <ul className="nav justify-content-end icon-button-white">
                    <li className="nav-item">
                        <IconButton color="inherit" size="medium" onClick={goToHomeProfile}>
                            <Badge color="secondary" badgeContent={taskCount}>
                                <HomeIcon fontSize="inherit" />
                            </Badge>
                        </IconButton>
                    </li>
                    <li className="nav-item">
                        <IconButton color="inherit" size="medium" title={`${userData.username}`} onClick={goToUserProfile}>
                            <Person2Icon fontSize="inherit" />
                        </IconButton>
                    </li>
                    <li className="nav-item">
                        <IconButton color="inherit" size="medium" title="Sign Out" onClick={signOut}>
                            <ExitToAppIcon fontSize="inherit" />
                        </IconButton>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
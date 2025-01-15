import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks, updateTaskInList } from '../Redux/Actions/taskActions.js';
import { getTasks, updateStatus } from '../Services/taskService.js';
import { TaskContext } from '../Context/TaskContext.js';
import DeleteTask from './DeleteTask';
import AddOrUpdateTask from './AddOrUpdateTask';
import "../Styles/FormStyle.css";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ViewMore from '../Utilities/ViewMore.js';
import { IconButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LimitDropDown from '../Utilities/LimitDropDown.js';
import TimeAgo from 'react-timeago';
import { grey } from '@mui/material/colors';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import { ToastMessage } from '../Common/Toast.js';
import { useNavigate } from 'react-router-dom';

function ToDoApp() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.tasks);
    const [selectedLimit, setSelectedLimit] = useState("");
    const { setTaskData } = useContext(TaskContext);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getTasks(selectedLimit).then((response) => {
            dispatch(setTasks(response.data || []));
        })
            .catch((error) => {
                console.error('Error fetching todos:', error);
                navigate('/errorMsg');
            });
    }, [dispatch, selectedLimit, navigate]);

    const toggleModal = (task = null) => {
        setShowModal((prevState) => !prevState);
        setTaskData(task);
    };

    const handleLimitChange = (limit) => {
        setSelectedLimit(limit);
    };

    const updateTaskStatus = (taskId, currentStatus) => {
        const updatedStatus = currentStatus == 'Completed' ? 'Pending' : 'Completed';
        updateStatus(taskId, updatedStatus).then((response) => {
            dispatch(updateTaskInList(response.data));
            ToastMessage('Task Status Updated Successfully!');
        })
        .catch((error) => {
            console.error('Error updating status:', error);
        })
    };

    return (
        <div className={`container mt-4 ${showModal ? "opacity" : ""}`} >
            {showModal ? <AddOrUpdateTask onClose={toggleModal} /> : <></>}
            <div className="align-items-center d-flex justify-content-between">
                <h2 className='text-color'>My {selectedLimit ? (selectedLimit == 1 ? "Completed" : "Pending") : "All"} Tasks</h2>
                <div className='d-flex align-items-end'>
                    <LimitDropDown handleChange={handleLimitChange} />
                    <span className='text-color'>
                        <IconButton color="inherit" size="large" onClick={() => toggleModal(null)} title="Add Task">
                            <AddBoxIcon fontSize="inherit" />
                        </IconButton>
                    </span>
                </div>
            </div>
            <div className="row my-3">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div key={task._id} className="col-12 col-sm-6 col-md-4 mt-3">
                            <div className="card text-dark card-design">
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <p><span className='fw-semibold'>Subject: </span>{task.subject}</p>
                                        <span className='text-color'>
                                            <IconButton color="inherit" size="small" title={task.status === 'Pending' ? "Done" : "Not Done"}
                                                onClick={() => updateTaskStatus(task._id, task.status)}>
                                                {task.status === 'Pending' ? (<DoneAllIcon fontSize="inherit" />) :
                                                    (<RemoveDoneIcon fontSize="inherit" />)}
                                            </IconButton>
                                        </span>
                                    </div>
                                    <p><span className='fw-semibold'>Comment: </span>
                                        <ViewMore text={task.comment} maxLength={15} /></p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <TimeAgo date={task.updateTimestamp} style={{ color: grey[600], fontSize: 13 }} />
                                        <span>
                                            <span className='text-color'>
                                                <IconButton size="small" color="inherit" title="Edit Task" onClick={() => toggleModal(task)}>
                                                    <ModeEditOutlineIcon fontSize="inherit"></ModeEditOutlineIcon>
                                                </IconButton>
                                            </span>
                                            <span className='text-color'>
                                                <DeleteTask task={task} />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <span>No Information Available</span>
                )}
            </div>
        </div>
    );
}

export default ToDoApp;

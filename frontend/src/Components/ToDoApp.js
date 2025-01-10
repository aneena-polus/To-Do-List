import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../Redux/Actions/taskActions.js';
import { getTasks } from '../Services/taskService.js';
import { TaskContext } from '../Context/TaskContext.js';
import DeleteTask from './DeleteTask';
import AddOrUpdateTask from './AddOrUpdateTask';
import "../Styles/FormStyle.css"
import ViewMore from '../Utilities/ViewMore.js';

function ToDoApp() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.tasks);
    const { setTaskData } = useContext(TaskContext);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getTasks().then((response) => {
            dispatch(setTasks(response.data || []));
        })
            .catch((error) => {
                console.error('Error fetching todos:', error);
                dispatch(setTasks([]));
            });
    }, [dispatch]);

    const toggleModal = (task = null) => {
        setShowModal((prevState) => !prevState);
        setTaskData(task);
    };

    return (
        <div className="container mt-4">
            {showModal ? <AddOrUpdateTask onClose={toggleModal} /> : <></>}
            <div className="align-items-center d-flex justify-content-between">
                <h2>My List</h2>
                <button onClick={() => toggleModal(null)} className="btn bg-color text-light" title="Add Task">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
            <div className="row mt-3">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div key={task._id} className="col-12 col-sm-6 col-md-4 mt-3">
                            <div className="card text-dark card-design">
                                <div className="card-body">
                                    <p> <strong>Subject:</strong> {task.subject} </p>
                                    <p> <strong>Comment: </strong>
                                        <ViewMore text={task.comment} maxLength={15} /></p>
                                    <div className='d-flex justify-content-end'>
                                        <div onClick={() => toggleModal(task)} className="text-color pointer" title="Edit Task">
                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                        </div>
                                        <DeleteTask task={task} />
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

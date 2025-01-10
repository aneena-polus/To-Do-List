import React from 'react';
import "../Styles/FormStyle.css"
import { deleteTasks } from '../Services/taskService.js';
import { deleteTaskfromList } from '../Redux/Actions/taskActions.js';
import { useDispatch } from 'react-redux';
import { ToastMessage } from '../Common/Toast.js';

function DeleteTask(props) {
    const dispatch = useDispatch();

    const onDelete = () => {
        deleteTasks(props.task._id).then(() => {
            dispatch(deleteTaskfromList(props.task._id));
            ToastMessage("Task Deleted Successfully!")
        })
        .catch((error) => console.error('Error deleting todo:', error));
    };

    return (
        <div className='text-color ps-3 pointer' title="Delete Task"
            onClick={() => onDelete()}>
            <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
    )
}

export default DeleteTask
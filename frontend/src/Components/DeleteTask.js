import React from 'react';
import "../Styles/FormStyle.css"
import { deleteTasks } from '../Services/taskService.js';
import { deleteTaskfromList } from '../Redux/Actions/taskActions.js';
import { useDispatch } from 'react-redux';
import { ToastMessage } from '../Common/Toast.js';
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';

function DeleteTask(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDelete = () => {
        deleteTasks(props.task._id).then(() => {
            dispatch(deleteTaskfromList(props.task._id));
            ToastMessage("Task Deleted Successfully!");
        })
        .catch((error) => {
            console.error('Error deleting todo:', error);
            navigate('/errorMsg');
        });
};

return (
    <IconButton title="Delete Task" color="inherit" size="small" onClick={() => onDelete()}>
        <DeleteOutlineIcon fontSize="inherit" />
    </IconButton>
)
}

export default DeleteTask
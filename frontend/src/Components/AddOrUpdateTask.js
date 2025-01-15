import React, { useContext, useState } from 'react';
import { onFormDataChange } from '../Utilities/FormUtils.js'
import { TaskContext } from '../Context/TaskContext.js';
import { addTask, updateTask } from '../Services/taskService.js';
import { validate } from '../Utilities/FormUtils.js';
import { useDispatch } from 'react-redux';
import { updateTaskInList, addTaskInList } from '../Redux/Actions/taskActions.js';
import { ToastMessage } from '../Common/Toast.js';
import { useNavigate } from 'react-router-dom';

function AddOrUpdateTask(props) {
    const dispatch = useDispatch();
    const { taskData } = useContext(TaskContext);
    const [newField, setnewField] = useState({
        subject: taskData?.subject || '',
        comment: taskData?.comment || '',
        status: taskData?.status || 'Pending',
        createUser: JSON.parse(localStorage.getItem('userData'))._id,
        createTimestamp: new Date()
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const onInputChange = onFormDataChange(setnewField);

    const onFormSubmission = (event) => {
        event.preventDefault();
        const requiredFields = ['subject', 'comment'];
        const isValid = validate(newField, requiredFields, setErrors);
        if (!isValid) return;
        const AddOrUpdateTask = taskData?._id
            ? updateTask(taskData._id, newField)
            : addTask(newField);
        AddOrUpdateTask
            .then((response) => {
                taskData?._id
                    ? dispatch(updateTaskInList(response.data))
                    : dispatch(addTaskInList(response.data));
                    ToastMessage(taskData?._id? 'Task Updated Successfully!' : 'Task Added Successfully!');
            })
            .catch((error) => {
                console.error(taskData?._id ? 'Error updating task:' : 'Error adding task:', error);
                navigate('/errorMsg');
            })
            .finally(() => {
                setnewField({ subject: '', comment: '' });
                props.onClose();
            });
    };

    return (
        <div className="modal show d-block bg-blur" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">{taskData ? 'Edit Task' : 'Create Task'}</h5>
                        <button type="button" className="btn-close" title="Close" onClick={props.onClose}
                            aria-label="Close"></button>
                    </div>
                    <form onSubmit={onFormSubmission}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label fw-semibold">Subject:</label>
                                <input type="text" id="subject" name="subject"
                                    value={newField.subject} onChange={onInputChange}
                                    className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                                />
                                {errors.subject && <div className="text-danger">{errors.subject}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="comment" className="form-label fw-semibold">Comment:</label>
                                <textarea id="comment" name="comment"
                                    value={newField.comment} onChange={onInputChange}
                                    className={`form-control ${errors.comment ? "is-invalid" : ""}`}
                                ></textarea>
                                {errors.comment && <div className="text-danger">{errors.comment}</div>}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={props.onClose}>
                                Close
                            </button>
                            <button type="submit" className="btn btn-success" title={taskData ? 'Update' : 'Create'}>
                                {taskData ? 'Update' : 'Create'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddOrUpdateTask
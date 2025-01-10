import { ActionTypes } from '../Constants/taskContants.js';

const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_TASKS:
            return {
                ...state,
                tasks: action.payload,
            };
        case ActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case ActionTypes.UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task._id === action.payload._id ? action.payload : task
                ),
            };
        case ActionTypes.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task._id !== action.payload),
            };
        default:
            return state;
    }
};

export default taskReducer;

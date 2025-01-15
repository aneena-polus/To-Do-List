import { ActionTypes } from '../Constants/taskContants.js';

const initialState = {
    totalCount: 0,
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_TASKS:
            return {
                ...state,
                tasks: action.payload.tasks,
                totalCount: action.payload.totalCount
            };
        case ActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                totalCount: state.totalCount + 1 
            };
        case ActionTypes.UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task._id === action.payload._id ? action.payload : task
                ),
            };
        case ActionTypes.UPDATE_STATUS:
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
                totalCount: state.totalCount - 1 
            };
        default:
            return state;
    }
};

export default taskReducer;

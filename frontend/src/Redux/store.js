import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../Redux/Reducers/taskReducer.js';

const store = configureStore({
    reducer: {
        task: taskReducer,
    },
});

export default store;
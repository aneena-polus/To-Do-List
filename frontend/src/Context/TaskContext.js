import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [taskData, setTaskData] = useState([]);

    return (
        <TaskContext.Provider value={{ taskData, setTaskData }}>
            {children}
        </TaskContext.Provider>
    );
};


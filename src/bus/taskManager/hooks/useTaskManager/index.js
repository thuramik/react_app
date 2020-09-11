// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// API
import { api } from '../../api';
import { taskManagerActions } from "../../actions";

const mockData = [
    {
        id: 'A-1',
        title: 'Learn Git',
        isCompleted: true,
    }
];

export const useTaskManager = () => {
    const dispatch = useDispatch();

    const { tasks } = useSelector((state) => state.taskManager);

    useEffect( () => {
        dispatch(taskManagerActions.fetchTasksAsync());
        // (async () => {
        //     const tasks = await api.tasks.getAll();
        //     setTasks(tasks);
        // })();
    }, [dispatch]);

    return {
        tasks,
    }
}
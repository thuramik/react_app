// Core
import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

// API
import { taskManagerActions } from "../../actions";

export const useTaskManager = () => {
    const dispatch = useDispatch();

    const { tasks, fetching, creating, errorCode, actionOnTaskIds } = useSelector((state) => state.taskManager);

    useEffect( () => {
        dispatch(taskManagerActions.fetchTasksAsync());
    }, [dispatch]);

    const createTask = (title) => {
        dispatch(taskManagerActions.createTaskAsync(title));
    }

    const updateTask = (id, isCompleted) => {
        dispatch(taskManagerActions.updateTaskAsync(id, isCompleted));
    }

    const deleteTask = (id) => {
        dispatch(taskManagerActions.deleteTaskAsync(id));
    };

    return {
        tasks,
        fetching,
        creating,
        errorCode,
        actionOnTaskIds,
        createTask,
        updateTask,
        deleteTask
    }
}
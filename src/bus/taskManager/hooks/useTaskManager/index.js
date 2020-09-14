// Core
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

// API
import { api } from '../../api';
import { taskManagerActions } from "../../actions";

export const useTaskManager = () => {
    const dispatch = useDispatch();

    const { tasks, fetching, errorCode } = useSelector((state) => state.taskManager);
    const [flag, setFlag] = useState(true);

    useEffect( () => {
        if (flag === true) {
            dispatch(taskManagerActions.fetchTasksAsync());
            setFlag(false);
        }
    }, [dispatch, flag]);

    const createTask = (title) => {
        api.tasks.create(title);
        setFlag(true);
    }

    const updateTask = (id, isCompleted) => {
        api.tasks.update(id, isCompleted);
        setFlag(true);
    }

    const deleteTask = (id) => {
        api.tasks.delete(id);
        setFlag(true);
    };

    return {
        tasks,
        fetching,
        errorCode,
        createTask,
        updateTask,
        deleteTask
    }
}
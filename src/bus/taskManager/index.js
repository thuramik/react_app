// Core
import React from 'react';
import { Text } from '@fluentui/react';

// Components
import { List } from '../../bus/taskManager/components/list';
import { Create } from '../../bus/taskManager/components/create';
import { useTaskManager } from './hooks/useTaskManager';
import {createTaskManager} from "./hooks/createTaskManager";
import {deleteTaskManager} from "./hooks/deleteTaskManager";
import {updateTaskManager} from "./hooks/updateTaskManager";

export const TaskManager = () => {
    const { tasks } = useTaskManager();
    const createTask = createTaskManager();
    const deleteTask = deleteTaskManager();
    const updateTask = updateTaskManager();

    return (
        <div>
            <Text varioant="xxLarge">
                TaskManager
            </Text>
            <br />
            <Create createTask={createTask} />
            <br />
            <List items={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </div>
    );
};
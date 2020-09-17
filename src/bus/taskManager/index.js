// Core
import React from 'react';
import { Text } from '@fluentui/react';

// Components
import { List } from '../../bus/taskManager/components/list';
import { Create } from '../../bus/taskManager/components/create';
import { useTaskManager } from './hooks/useTaskManager';

// Element
import {Error} from "../../elements/Error";
import {LoaderFetching} from "../../elements/loaderFetching";

export const TaskManager = () => {
    const { tasks, fetching, creating, errorCode, actionOnTaskIds, createTask, deleteTask, updateTask } = useTaskManager();

    return (
        <div>
            <Text varioant="xxLarge">
                TaskManager
            </Text>
            <br />
            <Create createTask={createTask} creating={creating} />
            <br />
            <List  items={tasks} deleteTask={deleteTask} updateTask={updateTask} actionOnTaskIds={actionOnTaskIds} />
            <LoaderFetching fetching={fetching} />
            <Error errorCode={errorCode} />
        </div>
    );
};
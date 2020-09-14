// Core
import React from 'react';
import { Text } from '@fluentui/react';

// Components
import { List } from '../../bus/taskManager/components/list';
import { Create } from '../../bus/taskManager/components/create';
import { useTaskManager } from './hooks/useTaskManager';

// Element
import {Loader} from "../../elements/loader";
import {Error} from "../../elements/Error";

export const TaskManager = () => {
    const { tasks, fetching, errorCode, createTask, deleteTask, updateTask } = useTaskManager();

    return (
        <div>
            <Text varioant="xxLarge">
                TaskManager
            </Text>
            <br />
            <Create createTask={createTask} />
            <br />
            <List items={tasks} deleteTask={deleteTask} updateTask={updateTask} />
            <Loader fetching={fetching} />
            <Error errorCode={errorCode} />
        </div>
    );
};
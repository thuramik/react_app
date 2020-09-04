// Core
import React from 'react';
import { Text } from '@fluentui/react';

// Components
import { List } from '../../bus/taskManager/components/list';
import { useTaskManager } from './hooks/useTaskManager';

export const TaskManager = () => {
    const { tasks } = useTaskManager();
    return (
        <div>
        <Text varioant="xxLarge">
            TaskManager
        </Text>
        <List items={tasks} />
        </div>
    );
};
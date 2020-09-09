// Core
import React from 'react';

//Elements
import { Task } from '../../../../elements/task';
import { DefaultButton, Text} from "@fluentui/react";

export const List = ({ items, deleteTask, updateTask }) => {
    const listJSX = items.map((
        {
            id,
            title,
            isCompleted
        }
    ) => {
        const onSubmit = event => deleteTask(id);
        return (
            <>
                <Task
                    id={id}
                    key={id}
                    label={title}
                    isCompleted={isCompleted}

                    updateTask={updateTask}
                />
                <form onSubmit={onSubmit}>
                    <DefaultButton type="submit" text="Delete" />
                </form>
                <br />
                <br />
            </>
            );
        }
    );
    return (
        <>
            <Text varioant="xLarge">
                List of tasks:
            </Text>
            {listJSX}
        </>
    )
};
// Core
import React from 'react';

//Elements
import { Task } from '../../../../elements/task';
import {Checkbox, DefaultButton, Text} from "@fluentui/react";

export const List = ({ items, deleteTask }) => {
    const listJSX = items.map((
        {
            id,
            title,
            isComplited
        }
    ) => (
        <>
            <Task
                key={id}
                label={title}
                isComplited={isComplited}
            />
            <DefaultButton text="Delete" onClick={() => { deleteTask(id) }} />
            <br />
            <br />
        </>
    )
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
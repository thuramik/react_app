// Core
import React from 'react';

//Elements
import { Task } from '../../../../elements/task';

export const List = ({ items }) => {
    const listJSX = items.map((
        {
            id,
            title,
            isComplited
        }
    ) => (
        <Task 
            key={id}
            label={title}
            isComplited={isComplited} 
        />
    )
    );
    return (
        <>
            {listJSX}
        </>
    )
};
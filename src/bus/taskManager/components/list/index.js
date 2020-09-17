// Core
import React from 'react';

//Elements
import { Task } from '../../../../elements/task';
import { DefaultButton, Text} from "@fluentui/react";
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

export const List = ({ items, deleteTask, updateTask, actionOnTaskIds }) => {
    const listJSX = items.map((
        {
            id,
            title,
            isCompleted
        }
    ) => {
        const onSubmit = (event) =>  {
            deleteTask(id);
            event.preventDefault();
        }
        return (
            <div key={id}>
                <div style={actionOnTaskIds.has(id) ? {pointerEvents: "none", opacity: "0.4"} : {}}>
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
                </div>
                {actionOnTaskIds.has(id) ? <Spinner style={{float: 'left'}} size={SpinnerSize.xSmall} /> : ''}
                <br />
                <br />
            </div>
            );
        }
    );
    return (
        <div>
            <Text varioant="xLarge">
                List of tasks:
            </Text>
            {listJSX}
        </div>
    )
};
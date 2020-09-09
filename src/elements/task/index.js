import React, {useState} from 'react';
import { Checkbox, DefaultButton } from '@fluentui/react';

export const Task = ({ id, isCompleted, label, updateTask }) => {
    const [completed, setCompleted] = useState(isCompleted);

    const onChangeCompleted = (event, checked) => {
        setCompleted(checked);
        updateTask(id, checked);
    };

    return (
    <>
        <Checkbox
            label={label}
            checked={completed}
            onChange={onChangeCompleted}
        />
    </>
    );
}
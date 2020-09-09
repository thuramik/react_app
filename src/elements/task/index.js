import React from 'react';
import { Checkbox, DefaultButton } from '@fluentui/react';

export const Task = ({ isComplited, label }) => (
<>
    <Checkbox 
        label={label}
        checked={isComplited}
    />
</>
);
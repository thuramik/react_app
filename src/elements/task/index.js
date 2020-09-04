import React from 'react';
import { Checkbox } from '@fluentui/react';

export const Task = ({ isComplited, label }) => (
<>
    <Checkbox 
        label={label}
        checked={isComplited}
    />
    <br />
</>
);
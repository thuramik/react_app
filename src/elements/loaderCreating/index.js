import React from 'react';
import { Spinner } from '@fluentui/react';

export const LoaderCreating = ({ creating }) => {

    if (creating) {
        return (
            <div>
                <Spinner label="Nope, still creating..." ariaLive="assertive" labelPosition="left" />
            </div>
        );
    } else {
        return '';
    }
}
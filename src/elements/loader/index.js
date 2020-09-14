import React from 'react';
import { Label, Spinner } from '@fluentui/react';

export const Loader = ({ fetching }) => {

    if (fetching) {
        return (
            <div>
                <Spinner label="Nope, still loading..." ariaLive="assertive" labelPosition="left" />
            </div>
        );
    } else {
        return '';
    }
}
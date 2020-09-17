import React from 'react';
import { Spinner } from '@fluentui/react';

export const LoaderFetching = ({ fetching }) => {

    if (fetching) {
        return (
            <div>
                <Spinner label="Nope, still fetching..." ariaLive="assertive" labelPosition="left" />
            </div>
        );
    } else {
        return '';
    }
}
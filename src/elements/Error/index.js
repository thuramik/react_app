import React from 'react';
import { Text} from '@fluentui/react';

export const Error = ({ errorCode }) => {

    const errorMap = new Map();
    errorMap.set('500', 'Error on the server');
    errorMap.set('403', 'Response error');

    if (errorCode !== null) {
        let errorText = errorMap.get(errorCode);
        if (errorText === undefined) {
            errorText = 'Unexpected error';
        }

        return (
            <div>
                <Text varioant="xxLarge" style={{color: 'red', fontSize: 25, border: '2px solid red'}}>
                    {errorText}
                </Text>
            </div>
        );
    } else {
        return '';
    }
}
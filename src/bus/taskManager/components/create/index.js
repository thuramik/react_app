// Core
import React, {useState} from 'react';

//Elements
import {Text, PrimaryButton, TextField} from "@fluentui/react";


export const Create = ({ createTask }) => {

    const [title, setTitle] = useState([]);

    const onSubmit = event => {
        if (title.length === 0) {
            alert('Fill title');
            event.preventDefault();
        } else {
            createTask(title);
        }
    };

    const onChangeTitle = event => {
        setTitle(event.target.value);
    };

    return (
    <>
        <Text varioant="mega">
            Create new task:
        </Text>
        <br />
        <form onSubmit={onSubmit}>
            <TextField onChange={onChangeTitle} label="Title" />
            <PrimaryButton type="submit" text="Create task" />
        </form>
    </>
    );
}
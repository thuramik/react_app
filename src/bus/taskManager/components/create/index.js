// Core
import React, {useState} from 'react';

//Elements
import {Text, PrimaryButton, TextField} from "@fluentui/react";
import {LoaderCreating} from "../../../../elements/loaderCreating";


export const Create = ({ createTask, creating }) => {

    const [title, setTitle] = useState([]);

    const onSubmit = event => {
        event.preventDefault();
        if (title.length === 0) {
            alert('Fill title');
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
            <PrimaryButton type="submit" text="Create task" disabled={creating} />
        </form>
        <LoaderCreating creating={creating} />
    </>
    );
}
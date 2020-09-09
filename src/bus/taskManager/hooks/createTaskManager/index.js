// API
import { api } from '../../api';

export const createTaskManager = () => {
    return (title) => {
        api.tasks.create(title);
    };
}
// API
import { api } from '../../api';

export const updateTaskManager = () => {
    return (id, isCompleted) => {
        api.tasks.update(id, isCompleted);
    };
}
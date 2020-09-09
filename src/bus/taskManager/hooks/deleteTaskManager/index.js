// API
import { api } from '../../api';

export const deleteTaskManager = () => {
    return (id) => {
        api.tasks.delete(id);
    };
}
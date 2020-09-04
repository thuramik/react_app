export const api = {
    tasks: {
        getAll: async () => {
            const response = await fetch('https://localhost:5000/tasks');
            const tasks = await response.json();

            return tasks;
        }
    }
}
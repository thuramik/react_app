export const api = {
    tasks: {
        getAll: async () => {
            return await fetch('http://localhost:5000/tasks');
        },

        create: async (title) => {
            return await fetch('http://localhost:5000/tasks', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body:  JSON.stringify({
                    title: title,
                }),
            });
        },

        update: async (id, isCompleted) => {
            return await fetch('http://localhost:5000/tasks/' + id, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body:  JSON.stringify({
                    isCompleted: isCompleted,
                }),
            });
        },

        delete: async (id) => {
            return await fetch('http://localhost:5000/tasks/' + id, {
                method: "DELETE",
            });
        }
    }
}
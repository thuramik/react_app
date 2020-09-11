export const api = {
    tasks: {
        getAll: async () => {
            const response = await fetch('http://localhost:5000/tasks');
            return response;
        },

        create: async (title) => {
            fetch('http://localhost:5000/tasks', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body:  JSON.stringify({
                    title: title,
                }),
            });
        },

        update: async (id, isCompleted) => {
            fetch('http://localhost:5000/tasks/' + id, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body:  JSON.stringify({
                    isCompleted: isCompleted,
                }),
            });
        },

        delete: async (id) => {
            fetch('http://localhost:5000/tasks/' + id, {
                method: "DELETE",
            });
        }
    }
}
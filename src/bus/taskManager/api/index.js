export const api = {
    tasks: {
        getAll: async () => {
            const response = await fetch('http://localhost:5000/tasks');
            return await response.json();
        },

        create: (title) => {
            fetch('http://localhost:5000/tasks', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body:  JSON.stringify({
                    title: title,
                }),
            });
        },

        update: (id, isCompleted) => {
            fetch('http://localhost:5000/tasks/' + id, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body:  JSON.stringify({
                    isCompleted: isCompleted,
                }),
            });
        },

        delete: (id) => {
            fetch('http://localhost:5000/tasks/' + id, {
                method: "DELETE",
            });
        }
    }
}
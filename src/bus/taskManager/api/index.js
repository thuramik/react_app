export const api = {
    tasks: {
        getAll: async () => {
            const response = await fetch('http://localhost:5000/tasks');
            return await response.json();
        },

        create: (title) => {
            fetch('http://localhost:5000/tasks', {
                method: "POST",
                body:  JSON.stringify({
                    title: title,
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
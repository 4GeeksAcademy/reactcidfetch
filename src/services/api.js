const BASE_URL = "https://playground.4geeks.com/todo/todos";
const USERNAME = "Eren1982";


export const createUser = async () => {
    try {
        const res = await fetch(`${BASE_URL}/${USERNAME}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify([]),
        });
        const data = await res.json();
        console.log("✅ Usuario creado o ya existe:", data);
    } catch (error) {
        console.error("❌ Error al crear usuario:", error);
    }
};


export const getTasks = async () => {
    try {
        const res = await fetch(`${BASE_URL}/${USERNAME}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error("❌ Error al obtener tareas:", error);
        return [];
    }
};


export const updateTasks = async (tasks) => {
    try {
        const res = await fetch(`${BASE_URL}/${USERNAME}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tasks),
        });

        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error("❌ Error al actualizar tareas:", error);
    }
};


export const deleteAllTasks = async () => {
    try {
        const res = await fetch(`${BASE_URL}/${USERNAME}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error("❌ Error al borrar tareas:", error);
    }
};
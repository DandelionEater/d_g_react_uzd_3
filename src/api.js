export async function fetchUsers() {
    try {
        const response = await fetch("https://dummyjson.com/users?limit=100");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

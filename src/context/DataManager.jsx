import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchUsers } from "../api";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUsers() {
            try {
                const fetchedUsers = await fetchUsers();
                const transformedUsers = fetchedUsers.map(user => ({
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    city: user.address?.city || "Unknown"
                }));
                setUsers(transformedUsers);
            } catch (error) {
                console.error("Error loading users:", error);
            } finally {
                setLoading(false);
            }
        }

        loadUsers();
    }, []);

    return (
        <DataContext.Provider value={{ users, loading }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);

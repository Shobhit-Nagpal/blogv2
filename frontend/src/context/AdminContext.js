import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();

const useAdmin = () => {
    return useContext(AdminContext);
}

function AdminProvider({ children }) {
    const [isAdmin, setIsAdmin] = useState(false);
    return (
        <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        { children }
        </AdminContext.Provider>
    )
}

export { AdminProvider, useAdmin };

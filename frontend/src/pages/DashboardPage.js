import Cookies from "js-cookie";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useAdmin } from "../context/AdminContext";

function DashboardPage() {

    const { isAdmin, setIsAdmin } = useAdmin();
    const cookies = Cookies.get()
    const navigate = useNavigate();

    if (!cookies.token) {
        return <Navigate to="/login" />
    }

    function logout() {
        Cookies.remove("token");
        setIsAdmin(false);
        navigate("/");
    }

    return (
        <Layout>
        <h1 className="text-white">Dashboard</h1>
        <button className="text-white bg-black border-solid border-2 border-red rounded-md p-3 m-5" onClick={() => {logout()}}>Logout</button>
        </Layout>
    )
}

export default DashboardPage;

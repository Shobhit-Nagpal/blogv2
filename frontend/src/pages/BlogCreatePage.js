import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Editor from "../components/Editor";
import { useAdmin } from "../context/AdminContext";
import Cookies from "js-cookie";

function BlogCreatePage() {
    
    const { isAdmin, setIsAdmin } = useAdmin();
    const navigate = useNavigate();
    const cookies = Cookies.get()

    if (!cookies.token) {
        setIsAdmin(false);
        navigate("/login");
    }

    return (
        <Layout>
        <div className="h-screen">
        <div className="flex items-center justify-center">
        <h1 className="text-center text-grey text-2xl font-bold m-5">What's on your mind today?</h1>
        </div>
        <Editor isEdit={false} />
        </div>
        </Layout>
    )
}

export default BlogCreatePage;

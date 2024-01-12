import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import Layout from "../components/Layout";
import { useAdmin } from "../context/AdminContext";

function BlogEditPage() {

    const { isAdmin, setIsAdmin } = useAdmin();
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
        
    const cookies = Cookies.get()

    if (!cookies.token) {
        setIsAdmin(false);
        navigate("/login");
    }


    return (
        <Layout>
        <div className="h-screen">
        <Editor isEdit={true} id={id} />
        </div>
        </Layout>
    )
}

export default BlogEditPage;

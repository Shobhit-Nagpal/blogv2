import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import Layout from "../components/Layout";
import { useAdmin } from "../context/AdminContext";
import { baseURL } from "../utils/utils";

function AdminLoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [isError, setIsError] = useState(false);

    const { setIsAdmin } = useAdmin();
    const navigate = useNavigate();

    async function authenticateAdmin(username, password) {

        if (username === "" || password === "") {
            setToastMessage("Please fill in credentials");
            setIsError(true);
            setShowToast(true);
            return;
        }

        try {

            const response = await fetch(`${baseURL}/admin`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                credentials: "include"
            });

            const data = await response.json();

            if (response.status !== 200) {
                setToastMessage(data.message);
                setIsError(true);
                setShowToast(true);
                return;
            }

            if (response.status === 200) {
                setToastMessage(data.message);
                setIsError(false);
                setIsAdmin(true);
                const token = data.token;
                Cookies.set("token", token)
                navigate("/dashboard");
            }


        } catch (err) {
            console.error(err);
            return;
        }
    }

    useEffect(() => {
        if (showToast) 
        {
            const timeoutId = setTimeout(() => {
                setToastMessage("");
                setIsError(false);
                setShowToast(false);
            }, 3000);

            return () => {
                clearTimeout(timeoutId);
            }
        }

        return;

    }, [showToast])

    return (
        <Layout>
        { showToast ? 
            <Alert isError={isError} message={toastMessage} />
            : null
        }
        <div className="h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <div className="mb-4">
        <label htmlFor="username" className="block text-grey text-lg font-semibold mb-2">Username</label>
        <input id="username" type="text" onChange={(e) => {setUsername(e.target.value)}} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-grey" placeholder="Enter your username" />
        </div>
        <div className="mb-6">
        <label htmlFor="password" className="block text-grey text-lg font-semibold mb-2">Password</label>
        <input id="password" type="password" onChange={(e) => {setPassword(e.target.value)}} className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-grey" placeholder="Enter your password" />
        </div>
        <div className="flex items-center justify-between">
        <button className="bg-black hover:bg-grey text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-grey" onClick={async () => {await authenticateAdmin(username, password)}}>Sign In</button>
        </div>
        </div>        
        </div>
        </Layout>
    )
}

export default AdminLoginPage;

import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import { useNavigate } from "react-router-dom";
import { baseURL } from "../utils/utils";
import Alert from "./Alert";

function Editor({isEdit, id}) {
    
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [isError, setIsError] = useState(false);

    const navigate = useNavigate();

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    async function publishPost(title, content) {

        const response = await fetch(`${baseURL}/post/publish`, {
            headers: {
            "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                title: title,
                content: content
            }),
            credentials: "include"
        });

        const data = await response.json();

        if (response.status !== 201) {
            setToastMessage(data.error.message);
            setIsError(true);
            setShowToast(true);
            return;
        }

        if (response.status === 201) {
            navigate("/");
        }

    }

    async function savePost(title, content) {
        
        const response = await fetch(`${baseURL}/post/save`, {
            headers: {
            "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                title: title,
                content: content
            }),
            credentials: "include"
        });

        const data = await response.json();

        if (response.status !== 201) {
            setToastMessage(data.error.message);
            setIsError(true);
            setShowToast(true);
            return;
        }

        if (response.status === 201) {
            navigate("/dashboard");
        }
    }

    async function editPost(title, content) {
        
        const response = await fetch(`${baseURL}/post/${id}`, {
            headers: {
            "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({
                id: id,
                title: title,
                content: content
            }),
            credentials: "include"
        });

        const data = await response.json();

        if (response.status !== 201) {
            setToastMessage(data.error.message);
            setIsError(true);
            setShowToast(true);
            return;
        }

        if (response.status === 201) {
            navigate("/dashboard");
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

    useEffect(() => {

        if (isEdit) {

        async function getPost(navigate) {
            try {
                const response = await fetch(`${baseURL}/post/${id}`);
                const data = await response.json();

                if (response.status !== 200) {
                    navigate("/404");
                    return;
                }

                if (response.status === 200) {
                    console.log(data);
                    //set content and title from here
                }
            } catch(err) {
                console.error(err);
                return;
            }
        }

        getPost(navigate);
        }
    }, [id])

    return (
        <>
        { showToast ? 
            <Alert isError={isError} message={toastMessage} />
            : null
        }
        <div className="max-w-2xl mx-auto p-4">
        <form>
        <div className="mb-4">
        <label htmlFor="title" className="block text-grey text-xl font-semibold mb-2">Title</label>
        <input id="title" type="text" onChange={(e) => setTitle(e.target.value)}className="w-full p-2 border font-bold rounded-md focus:outline-none focus:ring focus:border-blue" placeholder="Enter the title" />
        </div>
        </form>
        <div>
        <label htmlFor="title" className="block text-grey text-xl font-semibold mb-2">Content</label>
        <ReactQuill 
            className="text-white" 
            theme="snow" 
            value={content} 
            modules={ modules } 
            formats={ formats } 
            onChange={(value) => setContent(value)} 
        />
        </div>
        <div className="flex items-center justify-center gap-5 m-5">
        { isEdit ? 
            <button className="bg-black text-white border-solid border-2 border-white p-3 rounded-md hover:bg-white hover:text-black" onClick={() => editPost(title, content)}>Save</button>
            : 
            <>
            <button className="bg-green text-black p-3 rounded-md" onClick={() => publishPost(title, content)}>Publish</button>
            <button className="bg-black text-white border-solid border-2 border-white p-3 rounded-md hover:bg-white hover:text-black" onClick={() => savePost(title, content)}>Save</button>
            </>
        }
        </div>
        </div>
        </>
    )
}

export default Editor;

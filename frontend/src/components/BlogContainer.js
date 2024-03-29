import React from "react";
import { Navigate } from "react-router-dom";

function BlogContainer({id, title, created_at}) {
    function handleClick(id) {
        console.log(`This is the ${id}`);
        //return <Navigate to={`/post/${id}`} />
    }
    
    return (
        <div className="border-solid border-2 border-grey rounded-md p-5 w-1/5 cursor-pointer bg-black hover:border-white" onClick={() => {handleClick(id)}}>
        <h2 className="text-white text-3xl font-bold">{title}</h2>
        <p className="text-grey mt-3">{created_at}</p>
        </div>
    )
}

export default BlogContainer;

import React from "react";

function Alert({ isError, message }) {
    return (

        isError ? 
        <div className="bg-red border-t-4 border-red rounded-b text-white px-4 py-3 shadow-md w-1/6 fixed top-4 right-4 rounded-s-lg" role="alert">
        <div className="flex">
        <div className="py-1">
        <svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z"/>
        <path d="M10 13a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
        </div>
        <div>
        <p className="font-bold text-xl">Error</p>
        <p className="text-lg">{message}</p>
        </div>
        </div>
        </div>
        : 
        <div className="bg-green border-t-4 border-green rounded-b text-white px-4 py-3 shadow-md w-1/6 fixed top-4 right-4 rounded-s-lg" role="alert">
        <div className="flex">
        <div className="py-1">
        <svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z"/>
        <path d="M10 13a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
        </div>
        <div>
        <p className="font-bold text-xl">Error</p>
        <p className="text-lg">{message}</p>
        </div>
        </div>
        </div>
    )
}

export default Alert;

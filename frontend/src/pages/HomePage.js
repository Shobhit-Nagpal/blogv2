import React, { useState, useEffect } from "react";
import BlogContainer from "../components/BlogContainer";
import { baseURL } from "../utils/utils";
import Layout from "../components/Layout";

function HomePage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            try {

                const response = await fetch(`${baseURL}/`);
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.error(err); 
                return;
            }
        }
        getData();
    }, []);

    return (
        <Layout>
        <div className="flex justify-center items-center">
        <h2 className="text-center text-white text-3xl">Blog</h2>
        </div>
        { posts.length === 0 ? 
            <>
            <div className="flex justify-center items-center h-screen">
            <p className="text-center mb-40 text-white text-2xl">There are no posts currently </p> 
            </div>
            </>
            : posts.map((post) => {
                <BlogContainer key={post.id} title={post.title} created_at={post.created_at} />
            }) 
        }
        </Layout>
    )
}

export default HomePage;

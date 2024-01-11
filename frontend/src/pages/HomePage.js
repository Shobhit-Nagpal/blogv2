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
            : 
            <div className="flex flex-col gap-10 items-center justify-center">
            {
                posts.map((post) => {
                <BlogContainer className="text-center" key={post.id} id={post.id} title={post.title} created_at={post.created_at} />
            })

            }
            </div>
        }
        </Layout>
    )
}

export default HomePage;

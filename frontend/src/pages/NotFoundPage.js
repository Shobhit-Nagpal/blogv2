import Lottie from "lottie-react";
import React from "react";
import Layout from "../components/Layout";
import NotFoundAnimation from "../lotties/404-not-found.json";

function NotFoundPage() { 
    return (
        <Layout>
        <div className="h-screen">
        <div className="flex justify-center items-center">
        <Lottie className="text-center mt-32" animationData={NotFoundAnimation} loop={true} />
        </div>

        <div className="flex justify-center items-center">
        <p className="text-white text-2xl">Page Not Found. Go back to <a className="text-grey underline" href="/">home page</a></p>
        </div>
        </div>
        </Layout>
    )
}

export default NotFoundPage;

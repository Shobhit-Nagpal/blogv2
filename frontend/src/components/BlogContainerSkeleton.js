import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

function BlogContainerSkeleton() {
    return (
        <div className="max-w-2xl w-1/5 mx-auto my-5 p-4 border border-grey rounded-md shadow-lg bg-black">
            <Skeleton height={30} width={`80%`} enableAnimatio={true} baseColor={"#808080"} /> {/* Title */}
            <Skeleton height={20} width={`60%`} className="my-2" baseColor={"#808080"} /> {/* Date */}
        </div>
    )
}

export default BlogContainerSkeleton;

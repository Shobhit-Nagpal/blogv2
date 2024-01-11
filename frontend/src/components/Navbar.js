import React from "react";

function Navbar() {
    return (
        <div className="flex justify-between items-center gap-10 p-8">
        <div>
        <a className="text-grey text-2xl font-bold ml-52 hover:text-blue" href="/">[s]</a>
        </div>
        <div className="flex justify-between items-center gap-10 mr-52">
        <a className="text-grey text-2xl font-bold hover:text-white" href="/">blog</a>
        <a className="text-grey text-2xl font-bold hover:text-white" href="https://shobhit-nagpal.github.io/portfolio/" rel="noreferrer" target="_blank">work</a>
        </div>
        </div>
    )
}

export default Navbar;

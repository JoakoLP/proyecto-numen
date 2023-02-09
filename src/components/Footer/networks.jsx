import React from "react";
import Buttons from "./buttons";

function Networks () {
    console.log("text");
    return (
        <div className="h-72 bg-gradient-to-r from-fuchsia-900 to-green-600">
            <h1 className="p-10 font-mono text-4xl text-center text-purple-50">Networks</h1>
            <Buttons/>
        </div>
    )
}

export default Networks;